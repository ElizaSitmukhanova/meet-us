import React from 'react';
import { initialData } from '../../data';
import { Block } from './Block';

export const Body = () => {
    return(
        <div>
            {initialData.map((element, i) => {
                return(
                    <Block
                        description={element.description}
                        title={element.title}
                        img={element.img}
                        date={element.date}
                      
                    />
                );
            })}
        </div>
    );
}