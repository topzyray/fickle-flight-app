import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <>
      <Header />
      <div className="h-screen w-full flex flex-col justify-between items-center ">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root;
