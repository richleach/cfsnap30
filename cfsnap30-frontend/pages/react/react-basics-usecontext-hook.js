import { useEffect } from 'react';
import Link from "next/link";
import Head from 'next/head';

function reactBasicsUseContextHook() {
    useEffect(() => {
        Prism.highlightAll();
    })

    return (
        <div className="docs-main">
        <Head>
            <title>React Basics: useContext Hook</title>
          </Head>
            <div className="container">
            <div className="btn btn-primary"><Link href="/react/">Return to posts</Link></div>
            <h2>React Basics: useContext Hook</h2>
            <p>Use case: You have pieces of data that need to be shared globally amongst components (or, not even quite globally, just shared in different places in your application). Props drilling, for what it is... nah. Redux? Well, maybe but what an expensive solution if your application just doesn't need that kind of horsepower....

The useContext hook lets you share data among components as needed, it's easy to set up and from what I hear, it's rather performant. Word on the street is that Redux actually uses useContext hooks internally, but that's just a vicious rumor....
</p>

            <h4>App.js</h4>
            <p>Simple, straightforward page layout that displays a header and a button. Nothing special, except they're different components.</p>
            </div>

            <div className="container">    	
<pre><code>{`//App.js
import React from 'react';
import TopNavbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  
  return (
    <div className="home-page-anchor-div">
      <ThemeContextProvider>
        <Container fluid={true}>
          <TopNavbar />
          <Container className="home-page-toast p-6">
            <Row>
              some content here....
            </Row>
          </Container>
          <ThemeToggle />
        </Container >
        <Footer />
      </ThemeContextProvider>
    </div >
  );
}

export default App;`}
</code></pre><br />


<h4>ThemeContext.js</h4>
            <p>While I won't yet refer to this file as "the store" this IS the file where the data lives that needs to be shared and/or displayed in multiple components.
NOTE: The typical convention for this file is to name it with your subject matter in mind; this file decorates our theme hence "themeContext". If you need a bunch of data about pizza then you might use "pizzaContext" for the name.</p>
<pre><code>{`//ThemeContext.js
import React, 
{ createContext, Component, useState } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: 
        {syntax: 'black', ui: '#ddd', bg: '#61dafb'},
        dark: 
        {syntax: 'white', ui: '#333', bg: 'teal'}
    }
    toggleTheme = () => {
    this.setState({ isLightTheme: 
    !this.state.isLightTheme });
    }
    render() {
        return (
            <ThemeContext.Provider 
            value={{ ...this.state, 
            toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;
`}
</code></pre><br />            


<h4>ThemeToggle.js</h4>
            <p>I isolated the button (that changes the UI color theme) by itself. The actual toggleTheme method (called during onClick() lives in ThemeContext.js)</p>
<pre><code>{`//ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } 
from '../contexts/ThemeContext';

function ThemeToggle() {
    const contextType = 
    useContext(ThemeContext);
    const { toggleTheme } = contextType;
    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    )
}

export default ThemeToggle
`}
</code></pre><br />      

<h4>Navbar.js</h4>
            <p>...standard, regulation navbar kinda' stuff, but I'm using React's context to determine the theme to show. (Note the inline style calls....)</p>
<pre><code>{`//Navbar.js
import React, { useContext } from 'react';
import { Container, Navbar, NavbarBrand, 
Nav, NavItem, NavLink } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';

function TopNavbar() {
    //declare contextType from the imported ThemeContext 
    //file to make the values in state available via context
    const contextType = useContext(ThemeContext);
    //console.log(contextType);
    //destructure values from contextType
    const { isLightTheme, light, dark } = contextType;
    const theme = isLightTheme ? light : dark;
    return (
        <Navbar color="faded" light expand="md" 
        className="home-page-navbar" 
        style=
        {{ background: theme.bg, color: theme.syntax }}>
            <Container 
            className="home-page-navbar-container">
                <NavbarBrand 
                href="/" style=
                {{ color: theme.syntax }}>
                    richleach.com
                </NavbarBrand>
                <Nav 
                className="ml-auto" navbar>
                    <NavItem 
                    className="d-flex align-items-center">
                        <NavLink 
                        className="font-weight-bold" 
                        href="/" 
                        style=
                        {{ color: theme.syntax }}>
                        Nav stuff
                        </NavLink>
                    </NavItem>
                    <NavItem 
                    className="d-flex align-items-center">
                        <NavLink 
                        className="font-weight-bold" 
                        style={{ color: theme.syntax }}>
                            rich@cfsnap.com
                        </NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNavbar;
`}
</code></pre><br />     
            </div>
        </div>

        )
    }    

export default reactBasicsUseContextHook
