const FeatureCards = (props) =>{
return(
    <>
    <div className="FeatureCard">
        <img src={`../../Image/Icon/${props.image}`} alt=""    className="iconCard"/> <div className="textgup"> 
            <span className="TextWhyUs">{props.description}</span>
             <span className="titleWhyUs">{props.title}</span>
             </div>
    </div>
    
    
    
    </>
)
}
export default FeatureCards