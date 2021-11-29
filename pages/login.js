import { getProviders, signIn } from 'next-auth/react';

import logo from '../assets/logo.png';


function Login({ providers }) {
    return (
        <div>
            <img 
                className="w-60 mb-5" 
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo" />
            { 
                Object.values(providers).map( (provider) => (
                    <div key={provider.name}>
                        <button className="bg-[#18D860] text-white">
                            Login with {provider.name}
                        </button>
                    </div>
                ))
            }
            <h1>Login Page</h1>
        </div>
    )
}

export default Login

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}