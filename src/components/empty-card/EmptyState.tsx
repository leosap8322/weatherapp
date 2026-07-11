function EmptyState() {
    return (
        <div className="flex flex-col items-center bg-white rounded-xl py-10 px-10 shadow-md space-y-4 w-80">
            <span className="text-4xl text-gray-400">📭</span>
            <h2 className="font-semibold text-xl">Search for a city</h2>
            <p className="text-gray-600 text-center">Enter a city name above to see the current weather.</p>
        </div>
    )
} export default EmptyState