import { useEffect, useState } from "react";

export const LoaderSkeleton = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500);

    }, []);

    return { loading };
}
