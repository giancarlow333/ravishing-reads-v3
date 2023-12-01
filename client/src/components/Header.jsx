//header has been added to all pages, to be displayed when page is display 

import React, { useState, useEffect } from 'react';
import '../index.css';
import Auth from '../utils/auth';


function Header() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState('');
    const [hasLoggedOut, SetLogout] = useState(false);

    useEffect(() => {
        const savedAvatarSrc = localStorage.getItem("selectedAvatarSrc");
        if (savedAvatarSrc) {
            setSelectedAvatar(savedAvatarSrc);
        }
    }, []);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const chooseAvatar = (avatarSrc) => {
        setSelectedAvatar(avatarSrc);
        localStorage.setItem("selectedAvatarSrc", avatarSrc);
        setModalOpen(false);
    };

    const avatarOptions = [
        "/avators/book1.jpeg",
        "/avators/book2.jpeg",
        "/avators/bookworm1.jpeg",
        "/avators/cat.jpeg",
        "/avators/panda.jpeg",
        "/avators/pig.png",
    ];


    const logout = async (event) => {
        event.preventDefault();
        Auth.logout()
        setLoggedIn(true)
    }

    const isLoggedOut = () => {
        return <>
            <button onClick={() => window.location.href = '/login'} className="bg-sky-700 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Login</button>
        </>
    }

    const isLoggedIn = () => {
        return <>

            <button onClick={() => window.location.href = '/Mylist'} className="bg-sky-700 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">My Lists</button>
   
            <button onClick={logout} className="bg-sky-700 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Logout</button>

        </>
    }

    if (hasLoggedOut) {
        return <Navigate to="/" />
    }

        return (
            <header className="flex flex-col justify-center h-screen w-3/12 bg-repeat overflow-auto" style={{ backgroundImage: `url(/img/pages.png)` }}>
                <div className="flex flex-col justify-top h-screen w-full rounded-full">
                    <img className="w-3/5 m-5 rounded-md self-center" src='/img/logo.png' alt="TechLogoImg" />
                    <div className="rounded-full w-2/6 self-center mb-8 bg-[#00214f] border-4 border-amber-600 border-solid shadow-black shadow-xl outline outline-4 outline-amber-600 outline-offset-4">
                        <img id="display_image" className="h-6/6  rounded-full bg-black" src={selectedAvatar || "./path/to/default-avatar.jpeg"} alt="Selected Avatar" />
                    </div>
                    <button id="openModal" className="bg-blue-800 self-center rounded-md h-8 w-28 text-white shadow-black shadow-md" onClick={openModal}>My Avatar</button>

                    {isModalOpen && (
                        <div id="avatarModal" className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <div id="avatar-gallery">
                                    {avatarOptions.map((avatarSrc, index) => (
                                        <img
                                            key={index}
                                            className="avatar-option"
                                            src={avatarSrc}
                                            alt={`Avatar ${index + 1}`}
                                            onClick={() => chooseAvatar(avatarSrc)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <nav className="flex flex-col content-center h-3/4 w-full max-h-fit">
                    {/* Update buttons to use React's onClick for navigation */}
                    <button onClick={() => window.location.href = '/'} className="bg-sky-700 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Home</button>
                    {Auth.loggedIn() ? isLoggedIn() : isLoggedOut()}
                </nav>
            </header>
        );
}

export default Header;
