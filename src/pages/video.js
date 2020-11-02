import React from 'react'

import Layout from "../components/layout"
import Head from '../components/head'
import videoStyles from "../styles/video.module.scss"
import { graphql } from 'gatsby'
// import { INLINES } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    {
        allContentfulVideoEmbed {
            nodes {
                title
                markdownContent {
                    childMarkdownRemark {
                        html
                    }
                }
                richTextContent {
                    json
                }
            }
        }
    }
`

// const options = {
//     renderNode: {
//         [INLINES.HYPERLINK]: (node) => {
//             if(node.data.uri.indexOf('vimeo.com') !== -1) {
//                 return (
//                     <iframe src={node.data.uri} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
//                 )
//             }
//         },
//     },
// }

const VideoPage = ({ data }) => {
    return (
        <div>
            <Layout>
            <Head title="Videos"/>
                <div className={videoStyles.container}>
                    {data.allContentfulVideoEmbed.nodes.map((node) => {
                        return (
                            <div>
                                <div className={videoStyles.videoWrapper}
                                dangerouslySetInnerHTML={{ __html: node.markdownContent.childMarkdownRemark.html }}
                                />
                                <div className={videoStyles.titles}>
                                    <p>{node.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Layout>
        </div>
    )
}


export default VideoPage