import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/Alerts/Loading';
import auth from '../../app/Authentication/firebase.init';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {

    // New user create function from Firebase
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true }
    );
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // React Hook Form function
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // Handling the user create form submission
    const onSubmit = async data => {
        if (data?.password === data?.confirmpass) {
            await createUserWithEmailAndPassword(data.email, data.password);
            reset();
        } else {
            Swal.fire(
                'Error',
                'Your password did not matched',
                'error'
            )
        }
    };

    // After completing the signup process, it will navigate main route
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    // Notification after success
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Account created successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [from, navigate, user, googleUser]);

    // Error massage
    useEffect(() => {
        if (error || googleError) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Something went wrong. Please try again.',
                showConfirmButton: false,
                timer: 2000
            });
        };
    }, [error, googleError]);

    return (
        <>
            {
                loading || googleLoading ?

                    <Loading />

                    :
                    <section className="">
                        <div className="min-h-screen flex items-center justify-center px-6">
                            <div className='border border-primary p-10 rounded-lg max-w-sm'>
                                <h1 className='text-3xl uppercase text-primary font-semibold text-center mb-6'>Create Account</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered input-primary text-black" {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: "Provide a valid email"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered input-primary text-black" {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters required"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" placeholder="Confirm your password" className="input input-bordered input-primary text-black" {...register("confirmpass", {
                                            required: {
                                                value: true,
                                                message: "Confirm Password is required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Minimum 6 characters required"
                                            }
                                        })} />
                                        <label className="label">
                                            {errors.confirmpass?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                                            {errors.confirmpass?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.confirmpass.message}</span>}
                                        </label>
                                    </div>

                                    <input type="submit" value='Create A New Account' className="btn btn-primary text-white capitalize w-full mt-3" />
                                    <div className="divider">OR</div>
                                </form>
                                <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline text-white capitalize w-full'><FcGoogle className=' text-2xl mr-2' />Sign up with Google</button>

                                <p className='text-center mt-5 text-sm'>Already have an account? Then please <Link className='underline underline-offset-2 text-primary' to="/login">Login</Link></p>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
};

export default SignUp;