import FeatureCards from "./FeatureCards"

const WhyChooseUs = () =>{
return(
    <>
    <div className="WhyUS">
    <FeatureCards image = "icon-1.svg" description = "Возврат денежных средств" title = "Гарантия возврата денег"/>
    <FeatureCards image = "icon-2.svg" description = "Безопасный платеж" title = "Скидка 30 % с подпиской"/>
    <FeatureCards image = "icon-3.svg" description = "Качественная поддержка" title = "Всегда онлайн 24/7"/>
    <FeatureCards image = "icon-4.svg" description = "Ежедневные предложения" title = "Скидка 20 % с подпиской"/>
    </div>
    </>
)
}
export default WhyChooseUs