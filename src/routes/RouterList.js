import React from 'react';
import Layout from '../layout'
import { AppRoutes } from './AppRoutes';
const Home = React.lazy(() => import('../views/Home'));
const Signup=React.lazy(() => import('../views/Auth/Signup'));
const Login=React.lazy(() => import('../views/Auth/Login'));
const ForgotPassword=React.lazy(() => import('../views/Auth/ForgotPassword'));
const Dashboard=React.lazy(() => import('../views/Dashboard'));
const AddCart=React.lazy(() => import('../views/AddCard'));
const ContactUs=React.lazy(() => import('../views/ContactUs'));
const AboutUs=React.lazy(() => import('../views/AboutUs'));

export const restrictRoutes = [
  {
    key: 'home',
    path: AppRoutes.HOME,
    exact: true,
    name: 'home',
    component: Home,
    layout: Layout,
  },
  {
    key: 'contactus',
    path: AppRoutes.CONTACTUS,
    exact: true,
    name: 'contactus',
    component: ContactUs,
    layout: Layout,
  },
  {
    key: 'aboutus',
    path: AppRoutes.ABOUTUS,
    exact: true,
    name: 'aboutus',
    component: AboutUs,
    layout: Layout,
  },
];

export const publicRoutes = [
  {
    key: 'signup',
    path: AppRoutes.SIGNUP,
    exact: true,
    name: 'signup',
    component: Signup,
    layout: Layout,
  },
  {
    key: 'login',
    path: AppRoutes.LOGIN,
    exact: true,
    name: 'login',
    component: Login,
    layout: Layout,
  },
  {
    key: 'forgot-password',
    path: AppRoutes.FORGOT_PASSWORD,
    exact: true,
    name: 'dashboard',
    component: ForgotPassword,
    layout: Layout,
  },
];

export const privateRoutes = [
  {
    key: 'dashboard',
    path: AppRoutes.DASHBOARD,
    exact: true,
    name: 'dashboard',
    component: Dashboard,
    layout: Layout,
  },
  {
    key: 'add-cart',
    path: AppRoutes.ADD_CART,
    exact: true,
    name: 'add-cart',
    component:AddCart,
    layout: Layout,
  },
];