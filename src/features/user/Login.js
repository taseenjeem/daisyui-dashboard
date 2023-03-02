import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../app/Authentication/firebase.init';
import Loading from '../../components/Alerts/Loading';

const Login = () => {

    // Login function
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // React Hook Form function
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // Handling login form
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    // Error massage
    useEffect(() => {
        if (error?.message === "Firebase: Error (auth/user-not-found).") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'No user found. Please check your information',
                showConfirmButton: true,
            })
        };
    }, [error?.message]);

    // After completing the login process, it will navigate main route
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [user, from, navigate])

    return (
        <>
            {
                loading ?

                    <Loading
                    />

                    :
                    <section className="">
                        <div className="lg:min-h-screen flex items-center justify-center">
                            <div className='border border-primary p-10 rounded-lg'>
                                <h1 className='text-3xl uppercase text-primary font-semibold text-center mb-6'>Welcome Back</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered max-w-sm input-primary" {...register("email", {
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
                                        <input type="password" placeholder="password" className="input input-bordered max-w-sm input-primary" {...register("password", {
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

                                    <input type="submit" value='Log in' className="btn btn-primary text-white capitalize w-[384px] mt-3" />
                                </form>

                                <p className='text-center mt-5'>Don't have an account? <Link className='underline underline-offset-2 text-primary' to="/create-account">Create A New Account</Link></p>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
};

export default Login;