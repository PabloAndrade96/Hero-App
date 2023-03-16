import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        users: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            loading: true
        });

        const res = await fetch(url);
        const { users } = await res.json();

        setState({
            users: users,
            isLoading: false,
            hasError: null
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return { ...state };
}

export default useFetch