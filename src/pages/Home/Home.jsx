import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import AnimatedCursor from 'react-animated-cursor';
import animation from "../../assets/welcome.json";
import Lottie from 'lottie-react';

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setTimeout(() => {
                setLoading(false);
            }, 2900);
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading ? (
                <div className='bg-[#131313] flex justify-center items-center text-center h-screen'>
                    <div>
                        <Lottie className='' animationData={animation} loop={true}></Lottie>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='hidden md:block'>
                        <AnimatedCursor
                            innerSize={10}
                            outerSize={20}
                            color='201,243,29'
                            outerAlpha={0.2}
                            innerScale={0.7}
                            outerScale={5}
                            clickables={[
                                'a',
                                'input[type="text"]',
                                'input[type="email"]',
                                'input[type="number"]',
                                'input[type="submit"]',
                                'input[type="image"]',
                                'label[for]',
                                'select',
                                'textarea',
                                'button',
                                '.link',
                            ]}
                        />
                    </div>
                    <Navbar />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Home;