const App = () => {
    return (
        <div>
            <h1>Timeline</h1>
            <Tweet name={"Mark Johns"} username={"markbjohns"} body={"This is my first tweet"} date={new Date().toLocaleString()} />
            <Tweet name={"Mark Johns"} username={"markbjohns"} body={"This is my second tweet"} date={new Date().toLocaleString()} />
            <Tweet name={"John Doe"} username={"kjlkjsd773"} body={"I am an ad bot :^)"} date={new Date().toLocaleString()} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));