import './App.css';
import { Bar, Line } from 'react-chartjs-2';
import { Row, Col, Container } from 'react-bootstrap';
import { Button,ButtonGroup, ToggleButton,ToggleButtonGroup } from 'react-bootstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import React, { useEffect, useState } from "react";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  let array = [{ "MERCADO": "Primario Privado", "CODIGO_MERCADO": "p", "TIPO_RENTA": "F", "TIPO_TITULO": "P", "MONTO": "3000000", "MONTO_ANTERIOR": "1949387.82", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "pP1" }, { "MERCADO": "Registro Operaciu00f3n Intl. Pu00fablico", "CODIGO_MERCADO": "i", "TIPO_RENTA": "F", "TIPO_TITULO": "PC", "MONTO": "3120000", "MONTO_ANTERIOR": "0", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "iPC1" }, { "MERCADO": "Registro Operaciu00f3n Intl. Renta Variable", "CODIGO_MERCADO": "i", "TIPO_RENTA": "V", "TIPO_TITULO": "P", "MONTO": "1134700", "MONTO_ANTERIOR": "51955.16", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "iP5" }, { "MERCADO": "Reportos Privado", "CODIGO_MERCADO": "r", "TIPO_RENTA": "F", "TIPO_TITULO": "P", "MONTO": "538636.04", "MONTO_ANTERIOR": "29840.32", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "rP1" }, { "MERCADO": "Reportos Pu00fablico", "CODIGO_MERCADO": "r", "TIPO_RENTA": "F", "TIPO_TITULO": "PC", "MONTO": "1991400.07", "MONTO_ANTERIOR": "383203.47", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "rPC1" }, { "MERCADO": "Secundario Privado", "CODIGO_MERCADO": "s", "TIPO_RENTA": "F", "TIPO_TITULO": "P", "MONTO": "8396170.83", "MONTO_ANTERIOR": "1230994", "FECHAANTERIOR": "11/11/2020", "FECHAACTUAL": "03 Diciembre", "TIP_MERCA": "sP1" }];
  let myTemp = [0,0,303923.00,5,"830000",0,0,"668180.99",868847.55,0,0,0];
  console.log(myTemp)

  let array1 = [{"MERCADO":"Primario Privado","CODIGO_MERCADO":"p","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"4000000","MONTO_ANTERIOR":"1949387.82","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"pP1"},{"MERCADO":"Registro Operaciu00f3n Intl. Pu00fablico","CODIGO_MERCADO":"i","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"1220000","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"iPC1"},{"MERCADO":"Registro Operaciu00f3n Intl. Renta Variable","CODIGO_MERCADO":"i","TIPO_RENTA":"V","TIPO_TITULO":"P","MONTO":"1134700","MONTO_ANTERIOR":"51955.16","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"iP5"},{"MERCADO":"Reportos Privado","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"538636.04","MONTO_ANTERIOR":"29840.32","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"rP1"},{"MERCADO":"Reportos Pu00fablico","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"2591400.07","MONTO_ANTERIOR":"383203.47","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"rPC1"},{"MERCADO":"Secundario Privado","CODIGO_MERCADO":"s","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"4396170.83","MONTO_ANTERIOR":"1230994","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"sP1"},{"FECHAACTUAL":"03 Diciembre"},{"FECHAACTUAL":"03 Diciembre"},{"FECHAACTUAL":"03 Diciembre"},{"FECHAACTUAL":"03 Diciembre"},{"FECHAACTUAL":"03 Diciembre"}];
  let myTemp2 = [29815.00,0,3066587.50,371000.00,0,0,456141.73,943367.25,703195.71,0,0];
  console.log(myTemp2)


  const genData = () => ({
    labels: array.map((dt => { return (dt.FECHAACTUAL) })),
    labels: array1.map((dt => { return (dt.FECHAACTUAL) })),
    datasets: [
      {
        type: 'line',
        label: 'Variación',
        borderColor: '#129048',
        backgroundColor: '#ffff',
        borderWidth: 2,
        fill: false,
        data: myTemp,
      },
      {
        type: 'line',
        label: 'Por día en Millones de USD',
        backgroundColor: '#d8ebe0',
        data: myTemp2,
        borderColor: 'blue',
        fill: true,
        borderWidth: 2,
      }
    ],
  })

  const options2 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  const onClicAcumulado = ()=>{
    document.getElementById("tabla1").style.display = "none";
    document.getElementById("tabla2").style.display = "";
    document.getElementById("grafico1").style.display = "none";
    document.getElementById("grafico2").style.display = "";
  }

  const onClicdelDia = ()=>{
    document.getElementById("tabla1").style.display = "";
    document.getElementById("tabla2").style.display = "none";
    document.getElementById("grafico1").style.display = "";
    document.getElementById("grafico2").style.display = "none";
  }

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '', value: '1' },
    { name: '', value: '2' },
  ];

  return (
    <div className="App">
      <header className="App-header" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1></h1>
        <div style={{ border: '1px solid #E0E0E0', width: '768px', height: '436px', padding: 15 }}>
          <Container>
            <Row>
              <Col xs={2} md={2} lg={2} className="col-align-izq"><span className="sec-cerrada">Sesión cerrada</span></Col>
              <Col xs={7} md={7} lg={7} className="col-align-izq"><span className="open-sesion">Falta 1 días 7 horas 1 minutos para abrir la sesión|Hora actual 01:29am</span></Col>
              <Col xs={3} md={3} lg={3} className="col-align-der"><span><Button className="button-table"  variant="success">VER TABLA COMPLETA</Button></span></Col>
            </Row>
            <Row style={{ background: "#fbfbfb", borderRadius: "13px" }}>
              <Col id="grafico1"><Bar data={genData} options={options2} /></Col>
              <Col id="grafico2" style={{display:'none'}}>*****<Bar data={genData} options={options2} style={{display:'none'}}/>  </Col>
            </Row>
          </Container>
        </div>
        <hr></hr>
        <>
        <Container style={{ border: '1px solid #E0E0E0', width: '768px', height: 'auto', padding: 15 }}>
          <div>
            <Row>
            <Col className="col-align-izq col-md-auto"><span><Button className="button-enable" onClick={onClicdelDia}>Del dia</Button></span></Col>
            <Col className="col-align-izq col-md-auto"><span><Button className="button-enable" onClick={onClicAcumulado}>Acumulado</Button></span></Col>
            <Col className="col-align-izq col-md-auto"><span><Button className="button-enable">Mas negociados</Button></span></Col>
            <Col className="col-align-izq col-md-auto"><span><Button className="button-enable">Mercado integrado</Button></span></Col>
            <Col className="col-align-izq col-md-auto"><span><Button className="button-enable">Reajustes de tasas</Button></span></Col>
            <Col xs={3} md={3} lg={3} className="col-align-der" style={{ paddingLeft: 112 }}>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1} className="active-chk"><TrendingUpIcon /></ToggleButton>
              <ToggleButton value={3} className="active-chk-2"><ClearAllIcon /></ToggleButton>
              </ToggleButtonGroup>
            </Col>
            </Row>
            
          </div>
          <div id="tabla1" style={{ display: '' }}>
              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4}></Col>
                <Col xs={4} md={4} lg={4} style={{ fontSize: 10, fontWeight: 'bold' }}>18/12/2020</Col>
                <Col style={{ fontSize: 10, fontWeight: 'bold' }}>21/12/2020</Col>
                <Col style={{ fontSize: 10, fontWeight: 'bold' }}>Variación</Col>
              </Row>
              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Registro Operación Intl. Renta Variable</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0</Col>
                <Col className="colgris3">$29.815,00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Registro Operación Intl. Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0</Col>
                <Col className="colgris3">$0</Col>
                <Col className="colgris4" style={{ backgroundColor: '#FFDEDE', textAlign: 'right' }}><span style={{ color: '#EB5757', fontSize: 10 }}>-5% <FontAwesomeIcon icon={faCaretDown} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Registro Operación Intl. Público</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$303,923.00</Col>
                <Col className="colgris3">$3,066,587.50</Col>
                <Col className="colgris4" style={{ backgroundColor: '#D9E9FF', textAlign: 'right' }}><span style={{ color: '#002B98', fontSize: 10 }}>0% <FontAwesomeIcon icon={faCaretRight} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$5,830,000.00</Col>
                <Col className="colgris3">$371,000.00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Público</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0.00</Col>
                <Col className="colgris3">$0.00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Renta Variable Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0.00</Col>
                <Col className="colgris3">$0.00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Reportos Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$668,180.99</Col>
                <Col className="colgris3">$456,141.73</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Reportos Público</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$868,847.55</Col>
                <Col className="colgris3">$943,367.25</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Secundario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0.00</Col>
                <Col className="colgris3">$703,195.71</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Secundario Público</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0.00</Col>
                <Col className="colgris3">$0.00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Secundario Renta Variable Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$0.00</Col>
                <Col className="colgris3">$0.00</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

            </div>

            <div id="tabla2" style={{ display: 'none' }}>
              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4}></Col>
                <Col xs={4} md={4} lg={4} style={{ fontSize: 10, fontWeight: 'bold' }}>Semana 1(USD $)</Col>
                <Col style={{ fontSize: 10, fontWeight: 'bold' }}>Semana 2(USD $)</Col>
                <Col style={{ fontSize: 10, fontWeight: 'bold' }}>Variación</Col>
              </Row>
              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$15,000,000</Col>
                <Col className="colgris3">$15,000,000</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$15,000,000</Col>
                <Col className="colgris3">$15,000,000</Col>
                <Col className="colgris4" style={{ backgroundColor: '#FFDEDE', textAlign: 'right' }}><span style={{ color: '#EB5757', fontSize: 10 }}>-5% <FontAwesomeIcon icon={faCaretDown} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 10, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$15,000,000</Col>
                <Col className="colgris3">$15,000,000</Col>
                <Col className="colgris4" style={{ backgroundColor: '#D9E9FF', textAlign: 'right' }}><span style={{ color: '#002B98', fontSize: 10 }}>0% <FontAwesomeIcon icon={faCaretRight} /></span></Col>
              </Row>

              <Row className="justify-content-md-center" style={{ marginBottom: 3, paddingLeft: 15, paddingRight: 15 }}>
                <Col xs={4} md={4} lg={4} className="colgris">Primario Privado</Col>
                <Col xs={4} md={4} lg={4} className="colgris2">$15,000,000</Col>
                <Col className="colgris3">$15,000,000</Col>
                <Col className="colgris4" style={{ backgroundColor: '#E2F9ED', textAlign: 'right' }}><span style={{ color: '#139148', fontSize: 10 }}>5% <FontAwesomeIcon icon={faCaretUp} /></span></Col>
              </Row>

            </div>
          
            <br></br>
          <div>
            <Row>
            <Col xs={4} md={4} lg={4}><strong>Total</strong></Col>
            <Col xs={3} md={3} lg={3}><span><Button className="button-enable">000 000 000</Button></span></Col>
            <Col xs={2} md={2} lg={2}><span><Button className="button-enable">000 000 000</Button></span></Col>
            <Col className="col-align-der" xs={3} md={3} lg={3}><span><Button style={{ width: "55px" }} className="button-prt">15%</Button></span></Col>
            </Row>
          </div>
          </Container>
        </>
        <br></br>
      </header>
    </div>
  );
}

export default App;
