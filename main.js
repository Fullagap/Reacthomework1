function App() {
    return (
        <div style = {{height: "600px", width : "1000px",display : "flex" ,flexDirection : "row", justifyContent : "center",padding : "50px"}}>
            <div style = {{height : "500px",width : "700px",backgroundColor : "skyblue",borderRadius : "5%"}}>
                <Pic />
                <Info />
                <Data />
            </div>
        </div>
    )
}

function Pic() {
    return (
        <div style = {{display : "flex" ,flexDirection : "row", justifyContent : "center",padding : "30px"}}>
        <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="Paris"
        style = {{borderRadius : "50%"}}></img>
        </div>
    )
}

function Info() {
    return (
        <div style = {{display : "flex" ,flexDirection : "column", textAlign : "center", padding : ""}}>
            <h2>Julienne Moore</h2>
            <h2 style = {{color : "grey"}}>juliane.moore@company.com</h2>
        </div>
    )
}

function Data() {
    return (
        <div style = {{display : "flex" , flexDirection : "row",justifyContent : "space-around", padding : "20px 0"}}>
            <div style = {{display : "flex" ,flexDirection : "column", textAlign : "center"}}>
                <h3 style = {{fontSize : "25px"}}>25</h3>
                <h3 style = {{color : "grey" , fontSize : "20px"}}>Posts</h3>
            </div>
            <div style = {{display : "flex" ,flexDirection : "column", textAlign : "center"}}>
                <h3 style = {{fontSize : "25px"}}>350</h3>
                <h3 style = {{color : "grey" , fontSize : "20px"}}>Following</h3>
            </div>
            <div style = {{display : "flex" ,flexDirection : "column", textAlign : "center"}}>
                <h3 style = {{fontSize : "25px"}}>1.5k</h3>
                <h3 style = {{color : "grey" , fontSize : "20px"}}>Followers</h3>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App / >)