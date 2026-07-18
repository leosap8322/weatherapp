import Card from "../Card/Card";
import "./LoadingCard.css";

function LoadingCard() {
    return(
        <Card>
            <p className="text-gray-600 font-medium">Searching weather</p>
            <div className="flex gap-2">
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
            </div>
        </Card>
    )
} export default LoadingCard;