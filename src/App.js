import logo from './logo.svg';
// import img_tx2_40 from './tx2-40.jpg';
// import img_tx2_90 from './tx2-90.jpg';
// import pdf_tx2_40 from './tx2-40.pdf';
// import pdf_tx2_90 from './tx2-90.pdf';
import { List, Space, Button, Modal } from 'antd';
import React from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Document, Page, pdfjs } from 'react-pdf';

import './App.css';

const test_data = {
  Products: [
    {
        "Id": 569,
        "Name": "Installation TX2_140 / CS9",
        "Description": "",
        "LongDescription": "",
        "Price": "€0.00",
        "ProductTypeId": 44,
        "ProductTypeName": "9999 - To Be Defined",
        "ImageUrl": "/Cached/v-637672150210000000/mt/NOTIONEDGEFRANCE_TST/images/productimages/TX2 140.PNG/",
        "AlternativeText": "",
        "CategoryId": 147,
        "CategoryName": "STAUBLI Catalog",
        "CanAddToQuote": false,
        "CanAlterQuantity": false,
        "CanConfigure": true,
        "PartNumberExistInPricebook": true,
        "ProductFavoritesInfo": {
            "FavoriteId": 0,
            "FavoriteName": "",
            "IsFavoriteShared": false,
            "IsFavoriteVisible": false
        },
        "EndStatus": 0,
        "UPC": "",
        "IsInPromotion": false,
        "IsSubscriptionBillingProduct": false,
        "HasRatePlanForMarket": false,
        "ErrorMessage": "Price not available",
        "CanConfigureProductWithoutQuote": false,
        "ShouldShowRecurringPrice": false
    },
    {
        "Id": 570,
        "Name": "Installation TX2_40 / CS9",
        "Description": "",
        "LongDescription": "",
        "Price": "€0.00",
        "ProductTypeId": 42,
        "ProductTypeName": "1402 - Final assembly",
        "ImageUrl": "/Cached/v-637672150530000000/mt/NOTIONEDGEFRANCE_TST/images/productimages/TX2 40.PNG/",
        "AlternativeText": "",
        "CategoryId": 147,
        "CategoryName": "STAUBLI Catalog",
        "CanAddToQuote": false,
        "CanAlterQuantity": false,
        "CanConfigure": true,
        "PartNumberExistInPricebook": true,
        "ProductFavoritesInfo": {
            "FavoriteId": 0,
            "FavoriteName": "",
            "IsFavoriteShared": false,
            "IsFavoriteVisible": false
        },
        "EndStatus": 0,
        "UPC": "",
        "IsInPromotion": false,
        "IsSubscriptionBillingProduct": false,
        "HasRatePlanForMarket": false,
        "ErrorMessage": "Price not available",
        "CanConfigureProductWithoutQuote": false,
        "ShouldShowRecurringPrice": false
    },
    {
        "Id": 7081,
        "Name": "Installation TX2_90 / CS9 / CR ISO2",
        "Description": "",
        "LongDescription": "",
        "Price": "",
        "ProductTypeId": 42,
        "ProductTypeName": "1402 - Final assembly",
        "ImageUrl": "/Cached/v-637673990110000000/mt/NOTIONEDGEFRANCE_TST/images/productimages/TX2 CR ISO2 Normal.png/",
        "AlternativeText": "",
        "CategoryId": 54,
        "CategoryName": "API Default Category",
        "CanAddToQuote": false,
        "CanAlterQuantity": false,
        "CanConfigure": true,
        "PartNumberExistInPricebook": true,
        "ProductFavoritesInfo": {
            "FavoriteId": 0,
            "FavoriteName": "",
            "IsFavoriteShared": false,
            "IsFavoriteVisible": false
        },
        "EndStatus": 0,
        "UPC": "",
        "IsInPromotion": false,
        "IsSubscriptionBillingProduct": false,
        "HasRatePlanForMarket": false,
        "ErrorMessage": "",
        "CanConfigureProductWithoutQuote": true,
        "ShouldShowRecurringPrice": false
    },
    {
        "Id": 7079,
        "Name": "Installation TX2_90 / CS9 / Standard",
        "Description": "",
        "LongDescription": "",
        "Price": "",
        "ProductTypeId": 42,
        "ProductTypeName": "1402 - Final assembly",
        "ImageUrl": "/Cached/v-637673911240000000/mt/NOTIONEDGEFRANCE_TST/images/productimages/TX2 Standard Normal.png/",
        "AlternativeText": "",
        "CategoryId": 54,
        "CategoryName": "API Default Category",
        "CanAddToQuote": false,
        "CanAlterQuantity": false,
        "CanConfigure": true,
        "PartNumberExistInPricebook": true,
        "ProductFavoritesInfo": {
            "FavoriteId": 0,
            "FavoriteName": "",
            "IsFavoriteShared": false,
            "IsFavoriteVisible": false
        },
        "EndStatus": 0,
        "UPC": "",
        "IsInPromotion": false,
        "IsSubscriptionBillingProduct": false,
        "HasRatePlanForMarket": false,
        "ErrorMessage": "",
        "CanConfigureProductWithoutQuote": true,
        "ShouldShowRecurringPrice": false
    }
]
};

// const images_map = {
//   569: './tx2-40.jpg',
//   570: './tx2-40.jpg',
//   7081: './tx2-90.jpg',
//   7079: './tx2-90.jpg'
// }

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const infoModal = (item) => {
  Modal.info({
    title: 'Datasheet',
    
    width: '90%',
    style: {top: '25px'},
    content: (
      <Document file={require(`./${item.Id}.pdf`).default}>
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
      data: {Products : []},
      isModalVisible: false
    };
    window.addEventListener("message", this.onMessageReceived, false);
    this.requestData();
  }

  onMessageReceived = event => {
    if (event.data.taskId === this.state.taskIdRequestData) this.update(event);
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
                  <img width='200' height='200' src={require(`./${item.Id}.jpg`).default} />
                  <Button type="secondary" disabled={!item.CanConfigure} onClick={() => infoModal(item)}>Datasheet</Button>
                  <Button type="primary" disabled={!item.CanConfigure} href={`/Configurator.aspx?pid=${item.Id}&cid=${item.CategoryId}`}>Configure</Button>
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
