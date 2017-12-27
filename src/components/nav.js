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
                  Menu
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="/getting-started">
                    Getting Started
                  </DropdownItem>
     
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="https://www.facebook.com/profile.php?id=1620188578256853">Community</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
