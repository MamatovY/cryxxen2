import './our-services.scss'

import web from './../../assets/images/web.svg'
import ui from './../../assets/images/ui.svg'
import seo from './../../assets/images/seo.svg'

const OurServices = () => {
    return (
        <div className="ourServices">
            <div>Our Core Features</div>
            <h1>
                Our Services
            </h1>

            <div className="ourServices__list">
                <div className="ourServices__list__item">
                    <div className="ourServices__list__item-img">
                        <img src={web} alt="" />
                    </div>

                    <h3>
                        Web Design
                    </h3>

                    <div>
                        Suspendisse varius enim in <br />
                        cursus id rutrum imperdiet. eros elementum tristique.
                    </div>

                </div>
                <div className="ourServices__list__item">
                    <div className="ourServices__list__item-img">
                        <img src={ui} alt="" />
                    </div>
                    <h3>
                        UI/UX Design
                    </h3>

                    <div>
                        Suspendisse varius enim in <br />
                        cursus id rutrum imperdiet. eros elementum tristique.
                    </div>
                </div>

                <div className="ourServices__list__item">
                    <div className="ourServices__list__item-img">
                        <img src={seo} alt="" />
                    </div>
                    <h3>
                        SEO & Marketing
                    </h3>
                    <div>
                        Suspendisse varius enim in <br />
                        cursus id rutrum imperdiet. eros elementum tristique.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurServices