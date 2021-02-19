import React, { useState } from 'react'

import Layout from '../components/layout'

import Recaptcha from 'react-recaptcha'

const Contact = () => {
    const [captcha, setCaptcha] = useState(false)

    const verifyCallback = (response) => {
        if (response) {
            setCaptcha(true)
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2>Contact Me</h2>
                        <form
                            action={`https://getform.io/f/${process.env.GATSBY_GETFORM_KEY}`}
                            method="POST"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name..."
                                required
                                autoFocus
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email..."
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Message..."
                            />
                            <Recaptcha
                                sitekey={process.env.GATSBY_CAPTCHA_KEY}
                                verifyCallback={verifyCallback}
                                render="explicit"
                            />
                            <button type="submit" className="mt-4" disabled={captcha ? false : true}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact