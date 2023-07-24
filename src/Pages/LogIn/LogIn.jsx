import React from 'react';
import SocialMedia from '../../Components/SocialMedia/SocialMedia';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-[50%] flex-col">
            <div className="card w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center uppercase underline">Log in</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name <span className='text-red-500'>*</span></span>
                        </label>
                        <input type="text" placeholder="Type Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email <span className='text-red-500'>*</span></span>
                        </label>
                        <input type="email" placeholder="Type Your Email" className="input input-bordered" />
                    </div>
                    <div className='flex w-full gap-4'>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">New Password <span className='text-red-500'>*</span></span>
                            </label>
                            <input type={select ? 'text' : 'password'} placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Confirm Password<span className='text-red-500'>*</span></span>
                            </label>
                            <input type={select ? 'text' : 'password'} placeholder="Re-type Password" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control flex-row items-center gap-4">
                        <input onClick={selectBtn} type="checkbox"  className="checkbox" />
                        <label className="label">
                            {
                                select ?
                                <span className="label-text uppercase">Hide</span>
                                :
                                <span className="label-text uppercase">Show</span>
                            }
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p className='text-xl text-center font-bold my-4'>OR Sign up with</p>
                    <div className='my-2'>
                        <SocialMedia></SocialMedia>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;