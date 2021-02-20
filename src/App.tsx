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
import {ColorSlot} from "./ColorSlot";

const {Header, Content, Footer, Sider} = Layout;
const {Title, Text} = Typography;
const {TabPane} = Tabs;

export const App = () => {
    const [modalIdx, setModalIdx] = useState<number>(-1);
    const addPalette: any = {type: 'button', name: 'add'};
    const [palettes, setPalettes] = useState<any>([]);
    const [currentRed, setCurrentRed] = useState<number>(255)
    const [currentGreen, setCurrentGreen] = useState<number>(255)
    const [currentBlue, setCurrentBlue] = useState<number>(255)
    const [currentColor, setCurrentColor] = useState<string>('#fff')
    const popover: any = {
        position: 'absolute',
        zIndex: '2',
    }
    const cover: any = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }

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
                                        <Text>Palette</Text>
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={19}>
                                        <List
                                            grid={{column: 10}}
                                            dataSource={palettes.concat(addPalette)}
                                            renderItem={(item: any) => {
                                                if (item.type === 'color') {
                                                    return <ColorSlot item={item} modalIdx={() => modalIdx}
                                                                      setModalIdx={(id: number) => setModalIdx(id)}/>
                                                } else if (item.type === 'button' && item.name === 'add') {
                                                    return (<div style={{
                                                        border: '1px solid black',
                                                        height: '50px'
                                                    }} onClick={() => setPalettes([...palettes].concat({
                                                        type: 'color',
                                                        id: palettes.length,
                                                        r: 0,
                                                        g: 0,
                                                        b: 0
                                                    }))}>
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
        </div>
    );
}