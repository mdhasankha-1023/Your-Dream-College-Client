import {  FaFacebook, FaGoogle } from 'react-icons/fa';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialMedia = () => {
    const {googleSignUp, facebookLogin} = useContext(AuthContext)

    const googleBtn = () => {
        googleSignUp()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
    }

    const facebookBtn = () => {
        facebookLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
    }

    return (
            <div className='flex justify-center items-center gap-4'>
                <FaGoogle onClick={googleBtn} className='p-2 rounded-full text-[#D73427] bg-white text-5xl cursor-pointer'></FaGoogle>
                <FaFacebook onClick={facebookBtn} className='p-2 rounded-full text-[#0A81EC] bg-white text-5xl cursor-pointer'></FaFacebook>
            </div>
    );
};

export default SocialMedia;