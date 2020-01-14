import React, { useState } from 'react';
import { theme, Spacing } from 'Shared';
import {
  ResponsiveContainer,
  MenuButton,
} from 'components/Layout/SubMenu/SubMenuStyle';

const MenuLinks = ({ listItems, menuHandler, currentMenu }) => {
  const [activeMenu, setActiveMenu] = useState(listItems[1].name);
  const onClickHandler = e => {
    setActiveMenu(e.target.value);
  };

  return (
    <ResponsiveContainer className="vertical">
      <Spacing mTop={theme.small} />
      {listItems.map(listItem => {
        return (
          <MenuButton
            key={listItem.name}
            value={listItem.name}
            className={listItem.name === currentMenu ? 'primary' : 'text'}
            style={{ width: '100%' }}
            onClick={menuHandler}
          >
            <listItem.icon style={{ fontSize: '12px', display: 'inline' }} />
            {listItem.name}
          </MenuButton>
        );
      })}
    </ResponsiveContainer>
  );
};

export default MenuLinks;