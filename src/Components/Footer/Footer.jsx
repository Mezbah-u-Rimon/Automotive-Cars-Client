import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoMail } from 'react-icons/go';

const Footer = () => {
    return (
        <div className="bg-black ">
            <div className="max-w-6xl mx-auto">
                <footer className="footer text-gray-400 p-10">
                    <div>
                        <div className="flex items-center gap-3">
                            <img className="w-[200px]" src="https://i.ibb.co/fvrGv40/360-F-502880411-Sq4ue-CVz1-PHi-Bw-FDxh-Qcn-BB4-IWg-Vayl-K-removebg-preview.png" alt="" />

                        </div>
                        <div className='space-y-2'>
                            <p className='flex items-center gap-3 text-base'><BsTelephone className='text-red-600 text-xl'></BsTelephone> 012 345 6789 </p>
                            <p className='flex items-center gap-3 text-base'><CiLocationOn className='text-red-600 text-xl'></CiLocationOn> Street San Francisco Bangladesh </p>
                            <p className='flex items-center gap-3 text-base'><GoMail className='text-red-600 text-xl'></GoMail> email@gmail.com </p>
                        </div>
                    </div>
                    <nav>
                        <header className="text-white mb-2 font-bold text-lg uppercase">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="text-white mb-2 font-bold text-lg uppercase">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="text-white mb-2 font-bold text-lg uppercase">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>

                <hr />
                <div className='text-center py-5'>
                    <small className='text-gray-400'> !Copy All right resolve by Mezbah uddin Rimon </small>
                </div>

            </div>
        </div>

    );
};

export default Footer;