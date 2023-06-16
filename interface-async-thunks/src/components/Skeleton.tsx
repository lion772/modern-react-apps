import React, { FC } from "react";
import classNames from "classnames";

interface SkeletonProps {
    times: number;
}

const Skeleton: FC<SkeletonProps> = ({ times }): JSX.Element => {
    const boxes = Array(times)
        .fill(0)
        .map((_, i: number) => <div key={i}></div>);

    return <>{boxes}</>;
};

export default Skeleton;
