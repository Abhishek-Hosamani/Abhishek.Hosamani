import React from 'react';

const Skillbox = (props) => {
    const colors = ["#457b9d", '#fca311', '#57cc99', '#4cc9f0'];
    const skillcolor = colors[props.index];

    return (
        <>
            <div className='border-[#808080] border-2 border-solid w-full sm:w-1/4 p-2 mx-2 rounded my-2'>
                <div className='my-2'><h1 className='font-semibold'>{props.type}</h1></div>
                <div className={`flex flex-wrap `}>
                    {
                        props.skills.map((item) => {
                            return (
                                <div style={{ borderColor: skillcolor }} className='border-solid border-[1px] py-2 px-4 rounded mx-2 my-1'>
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default Skillbox;
