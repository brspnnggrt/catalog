import logo from './logo.svg';
import img_tx2_40 from './tx2-40.jpg';
import img_tx2_90 from './tx2-90.jpg';
import pdf_tx2_40 from './tx2-40.pdf';
import pdf_tx2_90 from './tx2-90.pdf';
import { List, Space } from 'antd';
import React from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Document, Page, pdfjs } from 'react-pdf';


import './App.css';

const data = [
  {
    title: 'TX2-40',
    image: img_tx2_40,
    specs: pdf_tx2_40
  },
  {
    title: 'TX2-90',
    image: img_tx2_90,
    specs: pdf_tx2_90
  }
];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class App extends React.Component {

  constructor(props) {
    super(props);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    this.state = {
      showSpecTx2_40: false,
      showSpecTx2_90: false
    };
  }

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
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{'height': '100px'}}/>
          <div className="App">
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={data}
              renderItem={item => (
                <List.Item
                style={{'background-color': 'white'}}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                  <img width='200' height='200' style={{'mix-blend-mode': 'multiply'}} src={item.image} />
                }
                >
                  {/* <Card title={item.title} style={{'background-color': 'white'}}>
                    Card content
                  </Card> */}
                  <List.Item.Meta
                    title={<a onClick={this.showSpecTx2_40.bind(this)}>{item.title}</a>}
                  />
                  { this.state.showSpecTx2_40 && 
                    <Document file={item.specs}>
                      <Page pageNumber={2} width={400} scale={1}/>
                    </Document> 
                  }
                </List.Item>
              )}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
