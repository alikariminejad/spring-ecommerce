import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
    const location = useLocation();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h3>Current Path: {location.pathname}</h3>
        </div>
        
    );
}

export default CurrentLocation;