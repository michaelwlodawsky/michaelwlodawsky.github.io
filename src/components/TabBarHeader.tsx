import React from "react";

const tabWidth = '100px'

interface TabBarHeaderProps {
    items: string[];
}

export function TabBarHeader(props: TabBarHeaderProps): React.ReactElement {
    const children = props.items.map((value: string, index: number) => {
        return <Tab value={value} key={index.toString()} ></Tab>
    });

    const [selected, setSelected] = React.useState(0);

    const selectStyle: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: 'white',
        height: '5px',
        width: tabWidth,
        transform: `translate(${selected * 100}%, 0%)`,
        transition: 'transform 500ms'
    };

    const handleClick = (index: number) => {
        console.log(`Clicked tab ${index}`);
        setSelected(index);
    };

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {
                    children.map((child, index) => (
                        <div key={child.key} onClick={() => {handleClick(index)}}>
                            {child}
                        </div>
                    ))
                }
            </div>
            <div style={selectStyle}></div>
        </div>

  
    );
}

interface TabProps {
    key: string;
    value: string;
}

function Tab(props: TabProps) {
    const [mouseHovering, setMouseHovering] = React.useState(false);

    const tabStyle: React.CSSProperties = {
        display: 'flex',
        backgroundColor: mouseHovering ? 'rgba(173, 216, 230, 0.5)' : 'transparent', // lightblue, 50% opacity or clear
        fontSize: 'medium',
        height: '50px',
        width: tabWidth,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        userSelect: 'none',
    };

    return (
        <div key={props.key} style={tabStyle} onMouseEnter={() => setMouseHovering(true)} onMouseLeave={() => setMouseHovering(false)}>
            {props.value}
        </div>
    );
}