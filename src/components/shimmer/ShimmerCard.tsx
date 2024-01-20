const ShimmerCard = () => {
    return (
        <div className="w-[350px] h-[220px] m-2 mb-4">
            <div className="w-full h-[150px] bg-black/[0.2] rounded-lg"></div>
            <div className="flex w-full mt-2 justify-between">
                <div className="w-[40px] h-[40px] bg-black/[0.2] rounded-full"></div>
                <div className="bg-black/[0.2] h-20px w-5/6 rounded-lg"></div>
            </div>
        </div>
    )
}

export default ShimmerCard