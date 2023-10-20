import React from 'react';
import { HContainer, MenuDropdown, NameBlock } from './HeaderStyle';

export default function Header() {
    return(
        <HContainer>
          <NameBlock onClick={() => {document.getElementById("Home").scrollIntoView({behavior: "smooth"})}}>Paige Lekach</NameBlock>
          <MenuDropdown />
        </HContainer>

    );
}
