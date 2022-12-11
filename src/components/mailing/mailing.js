import './mailing.scss'

import instagram from './../../assets/images/instagram.svg'
import facebook from './../../assets/images/facebook.svg'
import twitter from './../../assets/images/twitter.svg'
import linkedIn from './../../assets/images/linkedIn.svg'

const Mailing = () => {
    return (
        <div className="mailing">
            <h1>
                Subscribe to Atelier <br />
                Newsletter
            </h1>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </div>

            <h3 className="mailing__btn1">
                “Subscribe”
            </h3>
            <h3 className="mailing__btn2">
                Data Use Policy.
            </h3>
            <div>
                * By clicking button, you agree to our Terms and that you have <br />
                read our
            </div>

            <div className="mailing__media">
                <a href='/'>
                    <img src={facebook} alt="" />
                </a>
                <a href='/'>
                    <img src={twitter} alt="" />
                </a>
                <a href='/'>
                    <img src={instagram} alt="" />
                </a>
                <a href='/'>
                    <img src={linkedIn} alt="" />
                </a>
            </div>

        </div>
    )
}

export default Mailing