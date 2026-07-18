import React from 'react';
import Collection from '../pages/collections/Collection';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const CollectionLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Collection></Collection>
            <Outlet></Outlet>
        </div>
    );
};

export default CollectionLayout;