import './App.css';
import { Bar, Line } from 'react-chartjs-2';
import { Row, Col, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


function App() {
  let array = [{"MERCADO":"Primario Privado","CODIGO_MERCADO":"p","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"6000000","MONTO_ANTERIOR":"1949387.82","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"pP1"},{"MERCADO":"Registro Operaciu00f3n Intl. Pu00fablico","CODIGO_MERCADO":"i","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"3120000","MONTO_ANTERIOR":"0","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"iPC1"},{"MERCADO":"Registro Operaciu00f3n Intl. Renta Variable","CODIGO_MERCADO":"i","TIPO_RENTA":"V","TIPO_TITULO":"P","MONTO":"1134700","MONTO_ANTERIOR":"51955.16","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"iP5"},{"MERCADO":"Reportos Privado","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"538636.04","MONTO_ANTERIOR":"29840.32","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"rP1"},{"MERCADO":"Reportos Pu00fablico","CODIGO_MERCADO":"r","TIPO_RENTA":"F","TIPO_TITULO":"PC","MONTO":"1991400.07","MONTO_ANTERIOR":"383203.47","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"rPC1"},{"MERCADO":"Secundario Privado","CODIGO_MERCADO":"s","TIPO_RENTA":"F","TIPO_TITULO":"P","MONTO":"8396170.83","MONTO_ANTERIOR":"1230994","FECHAANTERIOR":"11/11/2020","FECHAACTUAL":"03 Diciembre","TIP_MERCA":"sP1"}];
  let myTemp = array.map((dt => { return (dt.MONTO) }));
  console.log(myTemp)


  const genData = () => ({
    labels: array.map((dt => { return (dt.FECHAACTUAL) })),
    datasets: [
      {
        type: 'line',
        label: 'Variación',
        borderColor: '#129048',
        borderWidth: 2,
        fill: false,
        data: myTemp,
      },
      {
        type: 'bar',
        label: 'Por día en Millones de USD',
        backgroundColor: '#012b99',
        data: myTemp,
        borderColor: 'white',
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

  return (
    <div className="App">
      <header className="App-header" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1>Demo Gráfico ChartJS</h1>
        <div style={{ border: '1px solid darkgray', width: '100%', height: '100%', padding: 15 }}>
          <Container>
            <Row>
              <Col xs={3} md={3} lg={3}><span style={{ fontSize: 12, color: "red" }}>Sesión cerrada</span></Col>
              <Col xs={6} md={6} lg={6}><span style={{ fontSize: 10 }}>Falta 1 días 7 horas 1 minutos para abrir la sesión|Hora actual 01:29am</span></Col>
              <Col xs={3} md={3} lg={3}><span><Button style={{ fontSize: 10 }} variant="success">VER TABLA COMPLETA</Button></span></Col>
            </Row>
            <Row>
              <Col><Bar data={genData} options={options2} /></Col>
            </Row>
          </Container>
        </div>

        <>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Julio 24(USD $)</th>
                  <th>Julio 25(USD $)</th>
                  <th>Variacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-active">Primario Privado</td>
                  <td className="table-active">$15,000,000</td>
                  <td className="table-secondary">$15,000,000</td>
                  <td className="table-success">5% <spam><ArrowDropUpIcon /></spam></td>
                </tr>
                <tr>
                  <td className="table-active">Primario Privado</td>
                  <td className="table-active">$15,000,000</td>
                  <td className="table-secondary">$15,000,000</td>
                  <td className="table-danger">-5% <spam><ArrowDropDownIcon /></spam></td>
                </tr>
                <tr>
                  <td className="table-active">Primario Privado</td>
                  <td className="table-active">$15,000,000</td>
                  <td className="table-secondary">$15,000,000</td>
                  <td className="table-primary">0%<spam><ArrowRightIcon /></spam></td>
                </tr>
                <tr>
                  <td className="table-active">Primario Privado</td>
                  <td className="table-active">$15,000,000</td>
                  <td className="table-secondary">$15,000,000</td>
                  <td className="table-success">5% <spam><ArrowDropUpIcon /></spam></td>
                </tr>
              </tbody>
            </table>

          </div>
        </>
      </header>
    </div>
  );
}

export default App;
