import { useRef, useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import './Tabs.scss';

function Tabs(props) {
    const location = useLocation();
    const TabFloor = useRef();

    const { pathname } = location;

    const page = pathname.split('/');
    const pagename = page[page.length - 1];

    const [Dimensions, setDimensions] = useState({
        width: 0,
        left: 0,
    });

    const handleClick = (e) => {
        let getWidth = e.currentTarget.offsetWidth;
        let getLeft = e.currentTarget.offsetLeft;

        setDimensions({
            width: getWidth,
            left: getLeft,
        });
    };

    useEffect(() => {
        let IsActive = document.querySelector('.tabs a.active');
        setDimensions({
            width: IsActive.offsetWidth,
            left: IsActive.offsetLeft,
        });

        
    }, []);

    return (
        <>
            <Outlet />
            <div
                ref={props.refElement}
                className={`${pagename === '' ? 'tabs' : 'tabs primary-tabs'}`}
            >
                <NavLink
                    to="/"
                    className={`ripple-effect-1`}
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
                    className={`ripple-effect-1`}
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
                    className={`ripple-effect-1`}
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
                    className={`ripple-effect-1`}
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
