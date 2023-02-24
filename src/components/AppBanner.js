import * as React from 'react';
import {useContext} from "react";
import {AuthContext} from '../auth';


export default function HomePage(){
    const {user} = useContext(AuthContext);

    return(
        <div>
            
        </div>
    );
}