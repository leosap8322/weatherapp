function ErrorMessage() {
    return (
        <div className="flex flex-col items-center bg-white rounded-xl py-10 px-10 shadow-md space-y-4 w-80">
            <span className="text-4xl text-amber-500">⚠️</span>
            <h2 className="font-semibold text-xl">City not found</h2>
            <p className="text-gray-600 text-center">Please check the city name and try again.</p>
        </div>
    )
} export default ErrorMessage