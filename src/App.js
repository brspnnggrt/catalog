import { List, Button, Modal } from 'antd';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './App.css';

const infoModal = (item) => {
  Modal.info({
    title: 'Datasheet',
    width: '90%',
    style: {top: '25px'},
    content: (
      <Document file={require(`./${item.Name.replace(/\//g, '-')}.pdf`).default}>
        <Page pageNumber={2} scale={1} width={800}/>
      </Document> 
    ),
    onOk() {},
  });
}

class App extends React.Component {

  constructor(props) {
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const id = 'antd-staubli-catalog';
    this.state = {
      loading: true,  // TODO: set to true
      id: id,
      taskIdRequestData: `${id}-requestData`,
      taskIdProductsChangeEvent: `${id}-productsChangeEvent`,
      data: {Products : []},
      isModalVisible: false
    };
    window.addEventListener("message", this.onMessageReceived, false);
    this.requestData();

    window.parent.postMessage({
      runScript: true,
      script: `
                cpq.models.catalog.products.subscribe(() => {
                  let attributeChangeEvent = {
                    taskId: '${this.state.taskIdProductsChangeEvent}'
                  };
                  let iframe = document.getElementById('${this.state.id}');
                  iframe.contentWindow.postMessage(attributeChangeEvent, "https://brspnnggrt.github.io/");
                });
              `
    }, "https://eusb.webcomcpq.com/");
  }

  onMessageReceived = event => {
    if (event.data.taskId === this.state.taskIdRequestData) this.update(event);
    if (event.data.taskId === this.state.taskIdProductsChangeEvent) this.requestData(event);
  };

  showSpecTx2_40(){
    this.setState({
      showSpecTx2_40: true,
      showSpecTx2_90: false
    });
  }

  showSpecTx2_90(){
    this.setState({
      showSpecTx2_40: false,
      showSpecTx2_90: true
    });
  }

  requestData = () => {
    window.parent.postMessage({
      iframe: this.state.id,
      taskId: this.state.taskIdRequestData,
      query: [{
        api: '/api/rd/v1/Catalog',
        function: 'getInitData',
        arguments: [{
          'fakekey': 'fakevalue'
        }]
      }],
      response: [],
      status: 'request'
    }, "https://eusb.webcomcpq.com/");
  };

  update = event => {
    // prepare data
    let model = event.data.response.find(r => r.api === '/api/rd/v1/Catalog' && r.function === 'getInitData');

    // update state if data available
    this.setState({
      loading: false,
      data: model.data
    });
  };

  showModal = () => {
    this.setState({isModalVisible: true});
  };

  handleExit = () => {
    this.setState({isModalVisible: false});
  };

  configureProduct = (item) => {
    window.parent.postMessage({
      runScript: true,
      script: `window.location.replace('/Configurator.aspx?pid=${item.Id}&cid=${item.CategoryId}');`
    }, "https://eusb.webcomcpq.com/");
  }

  getImage = (item) => {
    try {
      let importedImage = require(`./${item.Name.replace(/\//g, '-')}.png`);
      return importedImage.default;
    }
    catch {
      return null;
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-content">
          {this.state.loading &&
            <span>loading data...</span>
          }
          {!this.state.loading &&
            <List dataSource={this.state.data.Products} grid={{ gutter: 0, column: 4 }}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={item.Name} />
                  <img width='200' height='200' src={this.getImage(item)} />
                  <Button type="secondary" disabled={!item.CanConfigure} onClick={() => infoModal(item)}>Datasheet</Button>
                  <Button type="primary" disabled={!item.CanConfigure} onClick={() => this.configureProduct(item)}>Configure</Button>
                </List.Item>
              )}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
