import React from 'react';
import { HighlightCard } from '../../components/HighlightCard'


import { 
    Container,
     Header,
     UserInfo,
     Photo,
     User,
     UserGreething,
     UserName,
     UserWrapper,
     Icon,
     HighlightCards,
} from './styles';

export function Dashboard() {
    
    return (
        <Container>
           <Header>
            <UserWrapper>
            <UserInfo>
                <Photo
                source = {{uri:'https://i.pinimg.com/736x/e7/1c/1f/e71c1f344b84362c1a119864135cf9a7--funny-faces-beans.jpg'}}
                />
                <User>
                    <UserGreething>Olá,</UserGreething>
                    <UserName>Patolino</UserName>
                </User>
            </UserInfo>

            <Icon name="power"/>

            </UserWrapper>
           </Header>

           <HighlightCards>

           <HighlightCard 
           type="up"
           title='Entradas'
           amount='R$ 17.400,00'
           lastTransaction='Última entrada dia 13 de abril'/>

           <HighlightCard
           type="down"
           title='Saidas'
           amount='R$ 1.259,00'
           lastTransaction='Última saída dia 03 de abril'/>

           <HighlightCard
           type="total"
           title='Total'
           amount='R$ 16.141,00'
           lastTransaction='01 à 16 de abril'/>

           </HighlightCards>


        </Container>
    )
}