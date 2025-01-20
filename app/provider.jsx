import Header from "./_components/Header";

function Provider({ children }) {
    return (
        <div>
            <Header />
            <div className="px-10 lg:px-32 xl:px-48 p-4">{children}</div>
        </div>
    );
}

export default Provider;