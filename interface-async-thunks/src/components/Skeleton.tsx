import React, { FC } from "react";
import classNames from "classnames";

interface SkeletonProps {
    times: number;
    className: string;
}

const Skeleton: FC<SkeletonProps> = ({ times, className }): JSX.Element => {
    const outerClassNames = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerClassNames = classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white",
        "to-gray-200"
    );
    const boxes = Array(times)
        .fill(0)
        .map((_, i: number) => (
            <div key={i} className={outerClassNames}>
                <div className={innerClassNames} />
            </div>
        ));

    return <>{boxes}</>;
};

export default Skeleton;
