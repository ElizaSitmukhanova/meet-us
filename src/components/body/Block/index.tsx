import React from 'react'
import { Wrapper, DiscContainer, TitleContainer,  CalendarAndDate, ImageContainer } from './styled';
import { BsCalendar2Date } from 'react-icons/bs';
interface BrockProps {
    description: string,
    title: string,
    img: string,
    date: string,
}

export const Block: React.FC<BrockProps> = ({ description, title, img, date }) => {
    return (
        <div>
            <Wrapper>
                <ImageContainer>
                    <img src={img} width="300" height="250 " />
                </ImageContainer>
                <TitleContainer>
                    {title}
                </TitleContainer>
                <DiscContainer>
                    {description}
                </DiscContainer>
                <CalendarAndDate>
                    <BsCalendar2Date />
                    {date}
                    {/* <DateContainer>
                        
                    </DateContainer> */}
                </CalendarAndDate>
            </Wrapper>
        </div>
    );
}