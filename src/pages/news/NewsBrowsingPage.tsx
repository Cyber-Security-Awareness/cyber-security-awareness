import { Card, Col, Divider, Row } from 'antd';
import React, { useState } from 'react'
import { getNews } from '../../api/news';
import { News } from '../../models/\bnews'


export default function NewsBrowsingPage() {
    const [news, setNews] = useState<News[]>([])


    React.useEffect(() => {
        // get all posts
        (async () => {
            const retrievedPosts = await getNews();
            setNews(retrievedPosts);
        })();
    }, [])


    return (
        <div style={{ maxWidth: "1200px", margin: "auto", paddingTop: "40px"}}>
            <Row gutter={[16, 16]} justify="start" typeof="flex">
                {
                    news.map(n => <Col xs={8} id={n.id}>
                        <Card style={{ borderRadius: "20px", textAlign: "start" }}
                            cover={<img src={n.coverImage} height="220px" style={{ objectFit: "cover", borderRadius: "20px", padding: "10px" }} />}
                        >
                            <Card.Meta title={
                                <div>
                                    <div style={{ fontSize: "15px" }}>
                                        {n.title}
                                    </div>
                                    <div style={{ fontSize: "11px", marginTop: "6px", color: ""}}>
                                        {n.updatedAt.toDateString()}
                                    </div>
                                </div>
                            } description={n.summary} />
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    )
}
