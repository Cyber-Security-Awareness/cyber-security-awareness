import { Col, Layout, Menu, Row, Space } from 'antd'
import { Content, Header } from 'antd/lib/layout/layout'
import { Link, NavLink } from "react-router-dom";

import React from 'react'
import Sider from 'antd/lib/layout/Sider';
import Title from 'antd/lib/skeleton/Title';

export default function DefaultLayout(props: any) {
    return (
        <Layout>
            <Header >
                <NavLink to="/" style={{ color: "white", fontSize: "24px", float: "left", marginRight: "24px" }}>
                    Cyber Security Awareness
                </NavLink>
                <Row>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        <Menu.Item key={'0'}>
                            <Link to="/">
                                HOME
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={'1'}>
                            <Link to="/quiz">
                                QUIZ
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={'2'}>
                            <Link to="/news">
                                NEWS
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={'3'}>
                            <Link to="/video">
                                VIDEO
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={'4'}>
                            <Link to="/message-board">
                                MESSAGE BOARD
                            </Link>
                        </Menu.Item>
                        <Menu.Item key={'5'}>
                            <Link to="/article">
                                ARTICLE
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Col flex="auto">
                        <Space />
                        <NavLink to="/register" style={{ float: "right", color: "white", margin: "0 20px", fontWeight: "bold" }}>Register</NavLink>
                        <NavLink to="/login" style={{ float: "right", color: "white", margin: "0 20px", fontWeight: "bold" }}>Login</NavLink>
                    </Col>
                </Row>
            </Header>
            <Content style={{ minHeight: "100vh" }}>
                {props.children}
            </Content>
        </Layout>
    )
}
