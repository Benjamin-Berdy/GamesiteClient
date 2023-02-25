import * as React from 'react';
import { useContext } from "react";
import {AuthContext} from '../auth';
import AppBanner from "./AppBanner";



export default function HomePage(){
    const {user} = useContext(AuthContext);

    return(
        <div>
            <AppBanner/>
            GameScreen
        </div>
    );
}