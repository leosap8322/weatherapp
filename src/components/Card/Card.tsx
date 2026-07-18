type CardProps = {
    children: React.ReactNode;
};

function Card({ children }: CardProps) {
    return (
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md w-80 px-10 py-10">
            {children}
        </div>
    );
}

export default Card;