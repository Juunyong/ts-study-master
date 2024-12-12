import React, { ReactNode } from 'react';
import { Button, Menu as CustomMenu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react';
import { ChevronDownIcon } from 'lucide-react';

interface IMenuItem {
    label: string;
    onClick: () => void;
}

interface IMenuProps {
    buttonText: ReactNode;
    items: IMenuItem[];
    variant?: string;
}

const Menu = ({ buttonText, items, variant = 'solid' }: IMenuProps) => {
    return (
        <CustomMenu>
            <MenuButton
                variant={variant}
                as={Button}
                rightIcon={typeof buttonText === 'string' ? <ChevronDownIcon /> : undefined}
            >
                {buttonText}
            </MenuButton>
            <MenuList>
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={item.onClick}>
                        {item.label}
                    </MenuItem>
                ))}
            </MenuList>
        </CustomMenu>
    );
};

export default Menu;
