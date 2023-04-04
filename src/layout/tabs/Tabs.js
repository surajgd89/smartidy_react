import { useRef, useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './Tabs.scss';

function Tabs({ refElement }) {

    const location = useLocation();
    const TabFloor = useRef();

    const { pathname } = location;

    const page = pathname.split('/');
    const pagename = page[page.length - 1];

    const [Dimensions, setDimensions] = useState({
        width: 0,
        left: 0,
    });

    const [loading, setLoading] = useState(true);
    const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
    };

    const handleClick = (e) => {
        loadData();
        let getWidth = e.currentTarget.offsetWidth;
        let getLeft = e.currentTarget.offsetLeft;
        setDimensions({
            width: getWidth,
            left: getLeft,
        });
        console.log('load')
    };

    useEffect(() => {
        loadData();
        let IsActive = document.querySelector('.tabs a.active');
        setDimensions({
            width: IsActive.offsetWidth,
            left: IsActive.offsetLeft,
        });
        console.log('1 load')
    }, []);


    return (
        <>
            {loading ? <div className="page-loader"></div> : <Outlet />}
            <div
                ref={refElement}
                className={`${pagename === '' ? 'tabs' : 'tabs primary-tabs'}`}
            >
                <NavLink
                    to="/"

                    onClick={handleClick}
                >
                    <span>
                        <i className="fa-light fa-home-alt"></i>
                        <span>
                            <label className="en">Home</label>
                            <label className="mr">मुखपृष्ठ</label>
                            <label className="hn">मुखपृष्ठ</label>
                        </span>
                    </span>
                </NavLink>
                <NavLink
                    to="/about"

                    onClick={handleClick}
                >
                    <span>
                        <i className="fa-light fa-briefcase"></i>
                        <span>
                            <label className="en">About</label>
                            <label className="mr">माहिती</label>
                            <label className="hn">जानकारी</label>
                        </span>
                    </span>
                </NavLink>
                <NavLink
                    to="/gallery"

                    onClick={handleClick}
                >
                    <span>
                        <i className="fa-light fa-images"></i>
                        <span>
                            <label className="en">Gallery</label>
                            <label className="mr">गॅलरी</label>
                            <label className="hn">गॅलरी</label>
                        </span>
                    </span>
                </NavLink>
                <NavLink
                    to="/payus"

                    onClick={handleClick}
                >
                    <span>
                        <i className="fa-light fa-wallet"></i>
                        <span>
                            <label className="en">Pay Us</label>
                            <label className="mr">व्यवहार</label>
                            <label className="hn">व्यवहार</label>
                        </span>
                    </span>
                </NavLink>

                <div
                    className="tabs-floor"
                    ref={TabFloor}
                    style={Dimensions}
                ></div>
            </div>
        </>
    );





}

export default Tabs;
