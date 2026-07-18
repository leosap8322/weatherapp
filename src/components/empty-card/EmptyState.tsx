import Card from "../Card/Card"

function EmptyState() {
    return (
        <Card>
            <span className="text-4xl text-gray-400">📭</span>
            <h2 className="font-semibold text-xl">Search for a city</h2>
            <p className="text-gray-600 text-center">Enter a city name above to see the current weather.</p>
        </Card>
    )
} export default EmptyState