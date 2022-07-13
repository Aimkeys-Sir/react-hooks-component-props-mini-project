function About(props) {
    return (
        <aside>

            <img alt="blog logo"
                src={props.image ? props.image : "https://via.placeholder.com/215"} />
            <div style={{marginTop:"0px"}}>
                <p>About this blog</p>
                <p>{props.text}</p>
            </div>

        </aside>
    )
}
export default About