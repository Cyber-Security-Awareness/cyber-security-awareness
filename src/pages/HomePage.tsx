import React, { useState } from 'react'
import { getPosts } from '../api/post'
import { Post } from '../models/post';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import { Card, Col, Divider, Row } from 'antd';
import remarkGfm from 'remark-gfm'

export default function HomePage() {

    const [posts, setPosts] = useState<Post[]>([]);

    React.useEffect(() => {
        // get all posts
        (async () => {
            const retrievedPosts = await getPosts();
            setPosts(retrievedPosts);
        })();

    }, [])

    return (
        <div style={{ maxWidth: "1200px", margin: "auto", paddingTop: "40px"}}>
            <Card style={{ textAlign: "left", backgroundColor: "#454545" }}>
                <div style={{ color: "white" }}>
                    <div style={{ fontSize: 45 }}>
                        <div>
                            Title of the introduction
                        </div>
                        <div>
                            to network security
                        </div>
                        <div>
                            awareness.
                        </div>
                    </div>

                </div>
            </Card>
            <Row>
                <Col sm={18}>
                    <div style={{ marginTop: "40px", marginBottom: "14px", paddingRight: "25px" }}>
                        {
                            posts.map(p =>
                                <div style={{ textAlign: "left", maxWidth: "100%" }}>
                                    <div style={{ fontWeight: 500, fontSize: 32, margin: "3px 0" }}>{p.title}</div>
                                    <div style={{ fontSize: 12, margin: "15px 0" }}>{p.updatedAt.toLocaleDateString()} <span style={{ color: "#4d4d4d", fontWeight: 500, marginLeft: "12px" }}>{p.authorName}</span></div>
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} skipHtml={true} children={p.mdContent} />
                                    <Divider/>
                                </div>
                            )
                        }
                    </div>
                </Col>
                <Col sm={6}>
                    <Card style={{ marginTop: "40px", marginBottom: "14px" }} title={"About our web"}>
                        There are some information of our team for this web.
                    </Card>

                    <Card title={'Archive'}>
                        <div>
                            <div>
                                March 2021
                            </div>
                            <div>
                                February 2021
                            </div>
                            <div>
                                January 2021
                            </div>
                            <div>
                                December 2020
                            </div>
                            <div>
                                November 2020
                            </div>
                        </div>
                    </Card>

                    <Card title={'ElseWhere'} style={{ marginTop: "16px", marginBottom: "14px" }} >
                        <div>
                            <div>
                                GitHub
                            </div>
                            <div>
                                Twitter
                            </div>
                            <div>
                                Facebook
                            </div>
                            <div>
                                Instagram
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
