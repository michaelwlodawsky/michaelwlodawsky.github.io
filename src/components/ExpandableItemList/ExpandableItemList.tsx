import { ReactElement } from "react";
import { ExpandableItem } from "./ExpandableItem";

interface ExpandableItemListProps {
    children: ReactElement | ReactElement[]
}

export function ExpandableItemList(props: ExpandableItemListProps) {
    let child = props.children 
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            {
                Array.isArray(props.children) ? 
                    (props.children.map((child) => (child))) :
                    (props.children)
            }
        </div>
    );
}