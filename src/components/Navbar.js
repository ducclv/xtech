import {menuItems} from '../menuItems';
import MenuItems from './MenuItems';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

const NavDrawer = ({showDrawer}) => {
    return (
        <div className={`nav-drawer ${showDrawer ? 'slideInRight' : ''}`}>
            <div className='nav-item'>
                {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return (
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};
const Navbar = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    useEffect(() => {
        const handleCloseInfo = (e: any) => {
            if (!e.target.closest('.nav-drawer') && !e.target.closest('.menus-icon')) {
                setShowDrawer(false);
            }
        };
        document.addEventListener('click', handleCloseInfo);
        return () => {
            document.addEventListener('click', handleCloseInfo);
        };

        }, []);
    return (
        <nav>
            <ul className="menus">
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return (
                        <MenuItems
                            items={menu}
                            key={index}
                            depthLevel={depthLevel}
                        />
                    );
                })}
            </ul>
            <div className="menus-icon" onClick={() => setShowDrawer(!showDrawer)}>
                <div className="btn-title">
                    <FontAwesomeIcon className="icon" icon={faBars}/>
                </div>
            </div>
            {showDrawer && <NavDrawer showDrawer={showDrawer}/>}
        </nav>
    );
};

export default Navbar;
