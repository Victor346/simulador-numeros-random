import React from 'react';
import { Col, Row, Typography } from 'antd';
import SideMenu from '../components/sidemenu/SideMenu';
import CentrosCuadradosForm from '../components/centros_cuadrados/CentrosCuadradosForm';

const { Title } = Typography;

const CentrosCuadradosPage = () => {
  return (
    <Row>
      <SideMenu />
      <Col flex="auto">
        <Row justify="center">
          <Title>Metodo de Centros Cuadrados</Title>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <CentrosCuadradosForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CentrosCuadradosPage;
