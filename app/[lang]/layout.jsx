export default function VideosLayout( { children, modal } ) {
    return (
        <>
            {modal}
            {children}
        </>
    );
};