
import MainBreadcum from "@/components/Breadcum/MainBreadcum"
import Link from "next/link"

const Error = () => {
    return (

        <>
        <MainBreadcum name="404" pageName="404"/>
        <div>
            
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-6xl font-bold text-primary_color mb-4">404</h1>
                <p className="text-xl font-medium text-gray-700 mb-2">
                    Oops! Looks like something went wrong
                </p>
                <p className="text-gray-500 mb-6">
                    Page cannot be found! We&apos;ll have it figured out in no time. <br />
                    Meanwhile, check out these fresh ideas:
                </p>
                <button
                    className="bg-orange-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-primary_color transition"
                   
                >
                    <Link href={"/"}> Go to Home</Link>
                </button>
            </div>
        </div>
        </>

        
    )
}

export default Error