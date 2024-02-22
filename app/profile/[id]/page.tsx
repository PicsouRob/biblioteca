"use client";

import { useParams } from "next/navigation";

const UserProfile: React.FC = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div className="bg-white ">
            <div className="max-w-7xl h-full px-6 lg:px-8 mx-auto min-h-screen">
                
            </div>
        </div>
    );
}

export default UserProfile;