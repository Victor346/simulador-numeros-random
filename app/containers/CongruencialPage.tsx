import React from 'react';
import { Col, Row, Typography } from 'antd';
import SideMenu from '../components/tools/sidemenu/SideMenu';
import CongruencialForm from '../components/congruencial/CongruencialForm';

const { Title } = Typography;

const CongruencialPage = () => {
  return (
    <Row>
      <SideMenu />
      <Col flex="auto">
        <Row justify="center">
          <Title style={{ marginTop: '15px' }}>Metodo Congruencial</Title>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <CongruencialForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CongruencialPage;
