import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDrag } from 'react-use-gesture';
import loginSuccess from "./images/login-success.jpeg";

const LoginSuccess = () => {
    const [position, setPosition] = useState({ y: 0 });
    const ref = useRef(null);

    const bind = useDrag(({ down, movement: [, my], memo = position.y }) => {
        if (ref.current) {
            ref.current.style.transform = `translateY(${down ? memo + my : position.y}px)`;
        }
        if (!down) setPosition({ y: memo + my });
        return memo;
    });

    return (
        <div className="h-screen flex items-center justify-center relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transform scale-x-[-1] z-[-1]"
                style={{
                    backgroundImage: `url('https://s3-alpha-sig.figma.com/img/e088/8995/13a478aa6d3cc9bebac1c6fe29b1cf35?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ex-qdvOG4CU7LscqCsVdIQizo9lnSnv-E9rGlsYXUEdib-ekFB2UxagXNaEaDC1yyqrMSlrAmmbeQUMx-fUHSZ7gXrW6K0homEaOboDVi1tO0CIQENlaUUZA6bsLtvFLTrx0S4SSse7jd87O8MXOvGvjJk7XO22wkK3Qbdke4W7RdIDlWEhof63uRZOMw9V5qkIHUG7E2ZDc~JvGdwvAdn7UvurZa9NPw1xB20eE4pTx~gOURNif~HZ2sjYyz1Qp1uVQMTw26ynY63m8YQWQGU3nX28L2oqi7wAvKhJnnYcA2lkt5kLw~jm5RokL~SHvMqwj1530qswV3~gfM6VHyA__')`,
                }}
            ></div>
            <div className="relative">
                <div
                    ref={ref}
                    {...bind()}
                    className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer"
                >
                    <div className="w-full h-2 bg-gray-300 rounded-full mb-4">
                    </div>
                    <div className="text-center">
                        <img src={loginSuccess} alt="" />
                        <h2 className="text-2xl font-bold mb-2">Login Successful</h2>
                        <Link to='/track'>
                            <button className="w-full py-2 px-4 bg-orange-500 text-white rounded-full mb-2">
                                Go to Tracking Screen
                            </button>
                        </Link>
                        <button className="w-full py-2 px-4 text-black rounded-full">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSuccess;
