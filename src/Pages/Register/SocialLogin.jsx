import { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

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
                    className="btn bg-red-500 text-white hover:text-black"><FcGoogle className="text-3xl"></FcGoogle> Google </button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn bg-red-500 text-white hover:text-black"> <BsGithub className="text-3xl"></BsGithub> Github </button>
            </div>
        </div>
    );
};

export default SocialLogin;