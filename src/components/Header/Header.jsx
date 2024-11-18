import React from 'react';
import { HContainer, MenuDropdown, NameBlock } from './HeaderStyle';

export default function Header() {
    return(
        <HContainer>
          <NameBlock href="https://www.linkedin.com/in/paige-lekach/" >Paige Lekach</NameBlock>
          <MenuDropdown />
        </HContainer>

    );
}
