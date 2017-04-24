import React from 'react';

import Button from './components/Button';
import Header from './components/Header';

const pages = [
  {
    title: 'Discovery',
    component: Button,
  },
  {
    title: 'Settings',
    component: Button,
  },
];

export default class MainView extends React.Component{
  constructor(props){
    super(props);
    this.switchTab = this.switchTab.bind(this);
    this.state = {
      activeTab: 0,
    };
  }

  switchTab(ev) {
    this.setState({
      activeTab: Number(ev.target.id),
    });
  }

  renderTabs() {
    const tabs = [];
    let  index, props;

    for(let page of pages){
      index = pages.indexOf(page);
      props = {
        key: page.title,
        className: this.state.activeTab === index
          ? 'active'
          : '',
      };

      tabs.push(
        <li {...props}>
          <a href="#" onClick={this.switchTab} id={index}>{page.title}</a>
        </li>
      );
    }
    return tabs;
  }

  renderPage() {
    return pages[this.state.activeTab].component;
  }

  render() {
    const Page = this.renderPage();

    return(
      <div>
        <Header />
        <div className="container">
          <ul className="nav nav-tabs nav-justified">
            {this.renderTabs()}
          </ul>
          <div className="tab-content">
            <Page style="primary">Hiii</Page>
          </div>
        </div>
      </div>
    );
  }
}
