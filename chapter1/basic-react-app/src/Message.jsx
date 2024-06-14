function Message({Name, Color}){
    let styles={ color: Color, backgroundColor: "grey"};
    return(
        <h1 style={styles}>Hello {Name}</h1>
    )
}

export default Message;