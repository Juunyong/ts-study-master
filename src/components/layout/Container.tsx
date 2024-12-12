import classNames from 'classnames';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return <div className={classNames('max-w-7xl px-5 md:px-8 lg:px-0 mx-auto', className)}>{children}</div>;
};

// 사이트 전체 감싸는 역할
export const Wrap = ({ children }: ContainerProps) => {
    return <div>{children}</div>;
};

// 섹션 감싸는 역할
export const Section = ({ children }: ContainerProps) => {
    return (
        <section>
            <Container>{children}</Container>
        </section>
    );
};

export default Container;
