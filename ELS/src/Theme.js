import "./theme.css"
export default function Theme(){
    return(
        <div className="container">
        <div className="header">header</div>
        <div className="body">body
            <div className="left">left</div>
            <div className="right">right</div>
        </div>
        <div className="footer">footer</div>
        </div>
    );
}