const Tweet = ({ name, username, body, date }) => {
    return (
        <div class="tweet">
            <h2 class="header">
                <div class="name">{name}</div>
                <div class="username">@{username}</div>
            </h2>
            <p class="body">{body}</p>
            <p class="date">posted on {date}</p>
        </div>
    );
}