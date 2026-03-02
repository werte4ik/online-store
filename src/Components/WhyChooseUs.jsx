import FeatureCards from "./FeatureCards"

const WhyChooseUs = () =>{
return(
    <>
    <div className="WhyUS">
    <FeatureCards image = "icon-1.svg" description = "Return & refund" title = "Money back guarantee"/>
    <FeatureCards image = "icon-2.svg" description = "Secure Payment" title = "30% off by subscribing"/>
    <FeatureCards image = "icon-3.svg" description = "Quality Support" title = "Always online 24/7"/>
    <FeatureCards image = "icon-4.svg" description = "Daily Offers" title = "20% off by subscribing"/>
    </div>
    </>
)
}
export default WhyChooseUs