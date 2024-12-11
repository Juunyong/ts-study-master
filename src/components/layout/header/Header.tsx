import Link from 'next/link';
import React from 'react';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import MenuHam from './Menu';
import { Bell } from 'lucide-react';

const Header = () => {
    return (
        <header>
            <Flex className="container-sm items-center">
                <h1>
                    <Link href={'/'}>logo</Link>
                </h1>
                <Spacer />
                <div>
                    <Button colorScheme="teal" variant="ghost">
                        <span className="sr-only">알림</span>
                        <Bell size={18} />
                    </Button>
                    <Button colorScheme="teal" variant="ghost">
                        검색
                    </Button>
                    <Button colorScheme="teal" variant="ghost">
                        나의 정보
                    </Button>
                    <MenuHam />
                </div>
            </Flex>
        </header>
    );
};

export default Header;
