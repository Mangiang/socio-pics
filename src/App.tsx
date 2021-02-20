import React, {useState} from 'react';
import './App.css';
import {Button, Col, Form, Input, Layout, List, Menu, Modal, Row, Slider, Space, Tabs, Typography, Upload} from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    PlusCircleOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {SketchPicker} from 'react-color';

const {Header, Content, Footer, Sider} = Layout;
const {Title, Text} = Typography;
const {TabPane} = Tabs;

export const App = () => {
    const [modal2Visible, setModal2Visible] = useState(false);
    const addPalette: any = {type: 'button', name: 'add'};
    const [palettes, setPalettes] = useState([]);
    const [currentRed, setCurrentRed] = useState<number>(255)
    const [currentGreen, setCurrentGreen] = useState<number>(255)
    const [currentBlue, setCurrentBlue] = useState<number>(255)
    const [currentColor, setCurrentColor] = useState<string>('#fff')

    return (
        <div className="App">
            <Row>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1" icon={<UserOutlined/>}>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                                nav 2
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined/>}>
                                nav 3
                            </Menu.Item>
                            <Menu.Item key="4" icon={<BarChartOutlined/>}>
                                nav 4
                            </Menu.Item>
                            <Menu.Item key="5" icon={<CloudOutlined/>}>
                                nav 5
                            </Menu.Item>
                            <Menu.Item key="6" icon={<AppstoreOutlined/>}>
                                nav 6
                            </Menu.Item>
                            <Menu.Item key="7" icon={<TeamOutlined/>}>
                                nav 7
                            </Menu.Item>
                            <Menu.Item key="8" icon={<PlusCircleOutlined/>}>
                                Add palette
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{marginLeft: 200}}>
                        <Header className="site-layout-background" style={{padding: 0}}>
                            <Title>Socio Pics</Title>
                        </Header>
                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                                <Row>
                                    <Col span={4}>
                                        Palette name
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={19}>
                                        <Input placeholder="Palette name"/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col span={4}>
                                        Palette
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={19}>
                                        <SketchPicker
                                            color={currentColor}
                                            onChangeComplete={(color: any) => setCurrentColor(color.hex)}
                                        />
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col span={4}>
                                        <Text>Palette</Text>
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={19}>
                                        <List
                                            grid={{column: 10}}
                                            dataSource={palettes.concat(addPalette)}
                                            renderItem={(item: any) => {
                                                if (item.type === 'color') {
                                                    return <div style={{
                                                        border: '1px solid black',
                                                        backgroundColor: `rgb(${item.r},${item.g},${item.b})`,
                                                        height: '50px'
                                                    }}/>
                                                } else if (item.type === 'button' && item.name === 'add') {
                                                    return (<div style={{
                                                        border: '1px solid black',
                                                        height: '50px'
                                                    }} onClick={() => setModal2Visible(true)}>
                                                        <Space direction={'horizontal'}
                                                               style={{
                                                                   height: '100%',
                                                                   width: '100%',
                                                                   justifyContent: 'center'
                                                               }}>
                                                            <PlusCircleOutlined style={{fontSize: '40px'}}/>
                                                        </Space>
                                                    </div>)
                                                }
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col span={4}>
                                        <Text>Add an example image</Text>
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={19}>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture"
                                            maxCount={1}
                                        >
                                            <Button icon={<UploadOutlined/>}>Upload (Max: 1)</Button>
                                        </Upload>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Socio Pics ©2021 Created by Tutur</Footer>
                    </Layout>
                </Layout>
            </Row>
            <Modal
                title="Add new palette"
                centered
                visible={modal2Visible}
                onOk={() => {
                    setModal2Visible(false);
                    const colors: any = [...palettes];
                    setPalettes(colors.concat({
                        type: 'color',
                        r: currentRed,
                        g: currentGreen,
                        b: currentBlue
                    }));
                }}
                onCancel={() => setModal2Visible(false)}
            >
                <Row>
                    <Col span={11} style={{
                        border: '1px solid black',
                        backgroundColor: `rgb(${currentRed},${currentGreen},${currentBlue})`
                    }}/>
                    <Col span={2}/>
                    <Col span={11}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="RGB" key="RGB">
                                <Form labelCol={{span: 8}} wrapperCol={{span: 16}} name={'rgb_form'}
                                      onFinish={(values: any) => console.log(values)}
                                      onFinishFailed={(errorInfo: any) => console.log('Failed:', errorInfo)}>
                                    <Form.Item
                                        label="Red"
                                        name="Red"
                                        rules={[{required: true, message: 'Please input the Red component'}]}
                                    >
                                        <Slider
                                            min={0}
                                            max={255}
                                            onChange={(value: number) => setCurrentRed(value)}
                                            value={currentRed}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Green"
                                        name="Green"
                                        rules={[{required: true, message: 'Please input the Green component'}]}
                                    >
                                        <Slider
                                            min={0}
                                            max={255}
                                            onChange={(value: number) => setCurrentGreen(value)}
                                            value={currentGreen}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        label="Blue"
                                        name="Blue"
                                        rules={[{required: true, message: 'Please input the Blue component'}]}
                                    >
                                        <Slider
                                            min={0}
                                            max={255}
                                            onChange={(value: number) => setCurrentBlue(value)}
                                            value={currentBlue}
                                        />
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane tab="HSV" key="HSV">
                                Content of Tab Pane 2
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
}