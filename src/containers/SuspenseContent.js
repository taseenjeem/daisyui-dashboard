function SuspenseContent() {
    return (
        <div className='h-screen flex justify-center items-center flex-col'>
            <progress className="progress progress-primary w-56"></progress>
            <h1 className='text-xl font-bold mt-6'>Loading...</h1>
        </div>
    )
}

export default SuspenseContent