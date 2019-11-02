import React from 'react'
import './rounded-social-icons.styles.scss'
const SocialIconsRounded = (props) => {
    return (
        <div className="rounded-social-icons">
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossOrigin="anonymous"
            />
            <ul>
                <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                <li className="google"><i className="fa fa-google fa-2x" aria-hidden="true"></i></li>
                <li className="whatsapp"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
                <li className="youtube"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></li>
            </ul>
        </div>
    )
}

export default SocialIconsRounded;
