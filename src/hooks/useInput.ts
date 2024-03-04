import { Dispatch,SetStateAction, useCallback,useState } from "react";

const useInput = <T=any>
(initialData:T,):[T,(e:any)=>void,Dispatch<SetStateAction<T>>] => {
    const [value,setValue] = useState(initialData);
    const handler = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value as T);
    },[]);
    return[value,handler,setValue];
};

export default useInput;