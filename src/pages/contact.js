import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout> 
                <Head title="Contact" />          
                <h1>Contact</h1>
                <p>You can reach me <a href="kenton.scott22@gmail.com" target="_blank">here</a>.</p>
            </Layout>
        </div>

    )
}

export default ContactPage