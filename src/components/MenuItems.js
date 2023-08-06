import React, {useState, useEffect, useRef, useCallback} from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import Dropdown from './Dropdown';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  useEffect(() => {
    // Reset active state when clicking outside the component
    const resetActiveState = () => {
      setActive(false);
    };

    document.addEventListener('click', resetActiveState);

    return () => {
      document.removeEventListener('click', resetActiveState);
    };
  }, []);

  const onMouseEnter = () => {
    checkActive();
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    checkActive();
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    checkActive();
    dropdown && setDropdown(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkActive = useCallback(() => {
    setActive(window.location.pathname.includes(items.url));
  });

  useEffect(() => {
    checkActive();
  }, [checkActive]);

  return (
      <li
          className="menu-items"
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={closeDropdown}
      >
        {items.url && items.submenu ? (
            <>
              <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdown ? 'true' : 'false'}
                  onClick={() => setDropdown((prev) => !prev)}
              >
                {window.innerWidth < 960 && depthLevel === 0 ? (
                    items.title
                ) : (
                    <Link to={items.url} className={active ? "active" : ""}>{items.title.toString().toUpperCase()}</Link>
                )}

                {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel > 0 && window.innerWidth > 960 ? (
                    <span>&raquo;</span>
                ) : (
                    <span className="arrow" />
                )}
              </button>
              <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
            </>
        ) : !items.url && items.submenu ? (
            <>
              <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdown ? 'true' : 'false'}
                  onClick={() => setDropdown((prev) => !prev)}
              >
                {items.title}{' '}
                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
              </button>
              <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
            </>
        ) : (
            <Link to={items.url} style={active? {fontWeight:'700'}:{}}>
              {items.title.toString().toUpperCase()}
              {active && <SVG src={`${process.env.PUBLIC_URL}/images/tab-active.svg`} />}
            </Link>
        )}
      </li>
  );
};

export default MenuItems;
