import React from 'react'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd'


const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const layout = {
    labelCol: { offset: 0, span: 10 },
    wrapperCol: { offset: 0, span: 14 },
};

export default function RegisterPage() {
    return (
        <Row style={{ textAlign: "left", maxWidth: "800px", margin: "auto", paddingTop: "60px" }} justify="center">
            <Col xs={24}>
                <Form
                    {...layout}
                    name='register'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    labelAlign='left'
                    style={{ textAlign: "left" }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Password again"
                        name="passwordAgain"
                        rules={[{ required: true, message: 'Please input your password again!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0 }} >
                        <Row justify="end">
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}
