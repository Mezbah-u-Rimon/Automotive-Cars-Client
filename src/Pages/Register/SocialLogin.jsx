import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleLogin, githubLogin } = useContext(AuthContext);


    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                toast.success("user sign in successfully");
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div className="mb-10">
            <div className="divider -mt-2">continue with</div>
            <div className="flex justify-around items-center">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn bg-amber-500 text-black">Google </button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn bg-amber-500 text-black">Github </button>
            </div>
        </div>
    );
};

export default SocialLogin;