import './follow.scss'

import img1 from './../../assets/images/follow1.png'
import img2 from './../../assets/images/follow2.png'
import img3 from './../../assets/images/follow3.png'
import img4 from './../../assets/images/follow4.png'
import inst from './../../assets/images/inst.svg'

const Follow = () => {
    return (
        <div className="follow">
            <div>
                <img src={img1} alt="" />
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
            <div className="follow__main">
                <h2>Follow me on</h2>
                <div className="follow__main-icon">
                    <img src={inst} alt="" />
                </div>
                <a href='/' className="follow__main-btn">
                    INSTAGRAM
                </a>
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
        </div>
    )
}

export default Follow