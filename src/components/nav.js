import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import styles from './nav.module.css'



export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="faded" light expand="md">
          <NavbarBrand className={styles.brand} href="/">
            My Pet Jumping Spider
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              

              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  Basic
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="/getting-started">
                    Getting Started
                  </DropdownItem>

                   <DropdownItem href="/food">
                    Food
                  </DropdownItem>

                  <DropdownItem href="/enclosure">
                    Enclosures
                  </DropdownItem>

                  <DropdownItem href="/spider">
                    Obtaining a spider
                  </DropdownItem>
     
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  Advanced
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="/spiderlings">
                    Raising spiderlings
                  </DropdownItem>

                   <DropdownItem href="/medicine">
                    Helping a sick spider
                  </DropdownItem>

                  <DropdownItem href="/appendix">
                    Appendix
                  </DropdownItem>
     
                </DropdownMenu>
              </UncontrolledDropdown>


              <NavItem>
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/community">Community</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
