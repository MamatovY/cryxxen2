import './template-pages.scss'
import pageData from './pageData'

const TemplatePages = () => {

    const pagesList = pageData.map((item, i) => {
        return (
            <a href='/' key={i} className="templatePages__list__item">
                <div className="templatePages__list__item-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="templatePages__list__item-text">
                    {item.name}
                </div>
            </a>
        )
    })

    return (
        <div className="templatePages">
            <div className="templatePages__title">
                Our Core Layouts
            </div>
            <h1>
                Template Pages
            </h1>

            <div className="templatePages__list">
                {pagesList}
            </div>
        </div>
    )
}

export default TemplatePages