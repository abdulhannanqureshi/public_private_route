import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import navigation from "./Navigation/navigation";
import NoDp from "../../assets/Images/TopBar/noProfile.webp";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  const history = useHistory();

  const [token, setToken] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loginDetails = JSON.parse(localStorage.getItem("registeredUsers"));
    // console.log(loginDetails);
    if (token) {
      setToken(token);
      if (loginDetails && loginDetails.length) {
        setProfileImage(loginDetails[0].imageUrl);
        setProfileName(loginDetails[0].first_name);
      }
    }
  }, []);

  //logout and removing token
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("registeredUsers");
    localStorage.removeItem("registeredEmails");
    history.push("/login");
  };

  // affix navbar color color changes
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  // <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id={colorChange ? "navactive" : "navigation_bar"}>

  let Data = JSON.parse(localStorage.getItem("cart"));

  // const lenObj = JSON.parse(localStorage.getItem('cart'));
  // var count = 0;
  // for(var item in lenObj) {
  //   count += lenObj[item].length
  // }
  // console.log("JSON obj length: ",count);



  return (
    <Disclosure
      as='nav'
      className={
        colorChange
          ? "fixed top-0 w-full top-header affix-header"
          : "fixed top-0 w-full top-header"
      }
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link to=''>
                    <img
                      className="h-8 w-auto"
                      src="./images/workflow-logo.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-5'>
                    {navigation
                      .filter((e) => e.token)
                      .map((item) => (
                        <Link
                          to={item.href}
                          key={item.name}
                          className={classNames(
                            item.current ? "active" : "hover:",
                            "nav-link px-3 py-2 rounded-md font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {token ? (
                  <div className=" flex items-center">
                    <div className="cart_icon text-white mr-8 relative">
                      <Link to="/add-cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="count absolute">{Data ? Data.length : null}</span>
                      </Link>
                    </div>
                    <Menu as="div" className="ml-3">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>

                          <img
                            className="h-8 w-8 rounded-full"
                            src={profileImage ? profileImage : NoDp}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="profile-dropdown origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="user-login py-2.5 px-4">
                            <h6 className="name mb-0">
                              {profileName ? profileName : "jon doe"}
                            </h6>
                            <p className="profession mb-0">Software Engineer</p>
                          </div>
                          <div className="user-profile">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="dashboard"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "profile-link block px-4 py-2.5 text-sm text-gray-700"
                                  )}
                                >
                                  <i className="fas fa-user"></i> Profile Setting
                                </Link>
                              )}
                            </Menu.Item>
                            {/* <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="my-courses"
                              className={classNames(active ? 'bg-gray-100' : '', 'profile-link block px-4 py-2.5 text-sm text-gray-700')}
                            >
                            <i className="fa fa-book"></i> My Courses
                            </Link>
                          )}
                        </Menu.Item> */}
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/add-cart"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "profile-link block px-4 py-2.5 text-sm text-gray-700"
                                  )}
                                >
                                  <i className="fas fa-shopping-cart"></i> Cart
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  onClick={handleLogout}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "profile-link block px-4 py-2.5 text-sm text-gray-700"
                                  )}
                                >
                                  <i className="fas fa-sign-out-alt"></i> Sign out
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                ) : (
                  <Menu as='div' className='ml-3 relative'>
                    <div>
                      <Menu.Button className='inline-block px-6 py-2.5 bg-theme-color text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                        Account
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='account-dropdown origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to='login'
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2.5 text-sm text-gray-700"
                              )}
                            >
                              <i className="fa fa-sign-in" aria-hidden="true"></i>{" "}
                              Login
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to='sign-up'
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2.5 text-sm text-gray-700"
                              )}
                            >
                              <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                              Signup
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default Header;
