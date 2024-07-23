import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Dan Firstenberg</span>
                <div className="social">
                    <a href="#"><img src="/facebook.png"></img></a>    
                    <a href="#"><img src="/instagram.png"></img></a>    
                    <a href="#"><img src="/youtube.png"></img></a>    
                    <a href="#"><img src="/dribbble.png"></img></a>    
                </div>                    
            </div>
        </div>
    )
}

export default Navbar