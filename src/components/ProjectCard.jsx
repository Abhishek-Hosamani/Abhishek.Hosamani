import React, { useState } from 'react';

const ProjectCard = (props) => {
    const [expanded, setExpanded] = useState(false);

    const textClasses = `cursor-pointer overflow-ellipsis`;
    const containerClasses = `ProjectCard w-full mx-auto sm:w-72 ${expanded ? 'h-auto' : 'h-56'} h-56 overflow-hidden text-ellipsis flex flex-col justify-start rounded rounded-4 bg-[#3a3942]`;
    const handleCont = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div className={containerClasses} onClick={handleCont} >
                <div className='object-cover m-0'>
                    <a href={props.link} target='_blankṭ'>
                        <img src={props.img} alt="Project card" className='object-cover h-36 w-full' />
                    </a>
                </div>

                <div className='bg-[#3a3942]  p-2 text-wrap text-[#FFF]'>
                    <p className='font-bold text-sm sm:text-base'>{props.ProjName}</p>
                    <p className={`${textClasses} text-xs sm:text-sm ${expanded ? '' : 'line-clamp-2'}`}>
                        {props.tech}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;


