
import Header from '../components/Header';

function Signup() {
    return (
    <div className="flex flex-row h-screen w-screen overflow-auto">    
        <Header />   
        <div className="flex flex-col justify-center items-center self-center h-full w-9/12 bg-[#001829]">
            <div className="flex justify-evenly items-center flex-col w-4/6 h-4/6 bg-[#f8f2e5] rounded-lg outline outline-8 outline-[#f7f8f6] outline-offset-4">
                <form id="auth-form" action="{{actionRoute}}" method="post" className="w-full h-full flex flex-col justify-around items-center" autoComplete="off">
                    <img className="h-24 self-center m-5" src='./img/searchIcon3.png' alt="TechChat Logo" />
                    <p className="text-5xl text-[#001829] font-serif m-5 antialiased font-bold self-center">Welcome to the Club!</p>

                    <input id="name" className="w-9/12 h-28 m-3 pl-6 border-b-4 border-sky-900 bg-transparent placeholder:text-[#001829] placeholder:italic text-3xl rounded-lg"
                           type="text" 
                           name="name" 
                           placeholder="Enter Your name..."
                           aria-label="name" />

                    <input id="email" className="w-9/12 h-28 m-3 pl-6 border-b-4 border-sky-900 bg-transparent placeholder:text-[#001829] placeholder:italic text-3xl rounded-lg"
                           type="email" 
                           name="email" 
                           placeholder="Enter Your email..."
                           aria-label="Email" />

                    <input id="password" className="w-9/12 h-28 m-3 pl-6 border-b-4 border-sky-900 bg-transparent placeholder:text-[#001829] placeholder:italic text-3xl rounded-lg"
                           type="password" 
                           name="password" 
                           placeholder="Enter your password..."
                           aria-label="Password" />

                    <button type="submit" 
                            className="bg-sky-500 w-2/5 h-14 m-4 self-center shadow-sky-200 shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">
                        Sign Up
                    </button>

                    <a href="/login" 
                       className="font-extrabold m-5 text-green-500 text-xl outline outline-1 outline-green-500 outline-offset-4 hover:outline-dashed">
                        Login Instead
                    </a>
                </form>
            </div>
        </div>
      </div>
    );
}

export default Signup;