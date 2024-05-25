const App = () => {
    return (
        <div>
            <Person name={'Mark Johns'} age={29} hobbies={['sleeping', 'eating', 'breathing']} />
            <Person name={'Ayden Heine'} age={9} hobbies={['YouTube', 'arts and crafts', 'Minecraft']} />
            <Person name={'Donald Trump'} age={79} hobbies={['real estate', 'politics', 'court cases']} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));