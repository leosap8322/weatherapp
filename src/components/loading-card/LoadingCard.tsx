import "./LoadingCard.css";

function LoadingCard() {
    return(
        <div className="flex flex-col items-center bg-white rounded-xl py-10 px-10 shadow-md space-y-4 w-80">
            <p className="text-gray-600 font-medium">Searching weather</p>
            <div className="flex gap-2">
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="dot w-3 h-3 rounded-full bg-blue-500"></span>
            </div>
        </div>
    )
} export default LoadingCard;