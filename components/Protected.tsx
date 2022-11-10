import { isEmpty, type } from "ramda";
import React from "react";
import { Account } from "./Account";
import { Profile } from "./Profile";
import { useSession } from "./Session";


export const Protected = () => {

    const { session } = useSession();


    if (type(session) === 'Null') {
        return <Account />
    } else {
        return <Profile />
    }

}