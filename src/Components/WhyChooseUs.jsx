import FeatureCards from "./FeatureCards"

const WhyChooseUs = () =>{
return(
    <>
    <div className="WhyUS">
    <FeatureCards image = "icon-1.svg" description = "Возврат и возмещение денежных средств" title = "Гарантия возврата денег"/>
    <FeatureCards image = "icon-2.svg" description = "Безопасный платеж" title = "Скидка 30 % при подписке"/>
    <FeatureCards image = "icon-3.svg" description = "Качественная поддержка" title = "Всегда онлайн 24/7"/>
    <FeatureCards image = "icon-4.svg" description = "Ежедневные предложения" title = "Скидка 20 % при подписке"/>
    </div>
    </>
)
}
export default WhyChooseUs