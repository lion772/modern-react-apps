import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

const useThunk = (thunk: any) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const dispatch = useDispatch();

    const runThunk = useCallback(
        (arg: any) => {
            setIsLoading(true);
            dispatch<any>(thunk(arg))
                .unwrap()
                .catch((err: any) => setError(`An error occured: ${err.code}`))
                .finally(() => setIsLoading(false));
        },
        [dispatch, thunk]
    );

    return [isLoading, error, runThunk];
};

export default useThunk;
