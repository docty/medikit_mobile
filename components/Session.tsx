import { deleteItemAsync, getItemAsync } from "expo-secure-store";
import { useState, createContext, useContext, Dispatch, useEffect } from "react";


const SessionContext = createContext<ISessionContext>({} as ISessionContext);

export const SessionProvider = ({ children }: IContext) => {


    const [session, setSession] = useState<string>('')

    useEffect(() => {
            
        getItemAsync('credentials').then(res => {
            setSession(res!);
        }).catch(e => {
            setSession('')
        })


    }, [session])


    const output: ISessionContext = {
        session,
        setSession
    }
    return <SessionContext.Provider value={output}>{children}</SessionContext.Provider>
}



export const useSession = () => {


    const { session, setSession } = useContext<ISessionContext>(SessionContext);

    return { session, setSession }

}

export interface ISessionContext {
    session: string;
    setSession: Dispatch<string>;

}

type IContext = {
    children: React.ReactNode
}