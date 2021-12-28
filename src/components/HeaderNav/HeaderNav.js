import React from "react";
import { Col, Layout, Row } from "antd";
import "./styles.less";
const { Header } = Layout;
const HeaderNav = () => {
  const centered = { display: "flex", justifyContent: "center" };
  return (
    <Header>
      <Row style={{ color: "white" }} justify="space-between">
        <Col span={12}>
          <Row align="middle">
            <Col span={2}>Logo</Col>
            <Col span={8}>Gestão da Oferta</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row align="middle" justify="end" gutter={8}>
            <Col flex="center" span={3}>
              <div style={centered}>Ico</div>
            </Col>
            <Col>
              <div className="profile" style={centered}></div>
            </Col>
            <Col>
              <div style={centered}> Fulano de tales</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderNav;
