import Card from "../Card/Card"

function ErrorMessage() {
    return (
        <Card>
            <span className="text-4xl text-amber-500">⚠️</span>
            <h2 className="font-semibold text-xl">City not found</h2>
            <p className="text-gray-600 text-center">Please check the city name and try again.</p>
        </Card>
    )
} export default ErrorMessage