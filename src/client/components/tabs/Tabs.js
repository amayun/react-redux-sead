import classnames from 'classnames'
import Education from '../education/Education'
import Names from '../names/Names'
import React from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabs = ['Имя', 'Образование', 'Опыт работы', 'Результаты']

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: 0
    }
  }

  render() {
    return (
        <div className="cv-tabs">
          <Nav tabs>
            {this.tabs.map((tab, idx) => (
                <NavItem
                    key={tab}
                    className={classnames({active: this.state.activeTab === idx})}>
                  <NavLink
                      onClick={()=>this.toggle(idx)}>
                    {tab}
                  </NavLink>
                </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId={0}>
              <Names/>
            </TabPane>
            <TabPane tabId={1}>
              <Education/>
            </TabPane>
          </TabContent>
        </div>
    )
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
}
