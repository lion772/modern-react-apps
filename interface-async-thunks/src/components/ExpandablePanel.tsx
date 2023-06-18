import { FC, ReactNode, useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

interface ExpandablePanelInt {
    header: ReactNode;
    children: ReactNode | undefined | null;
}

const ExpandablePanel: FC<ExpandablePanelInt> = ({ header, children }): any => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="cursor-pointer"
                >
                    {!isExpanded ? <GoChevronLeft /> : <GoChevronDown />}
                </div>
            </div>
            {isExpanded && <div className="p-2 border-t">{children}</div>}
        </div>
    );
};

export default ExpandablePanel;
