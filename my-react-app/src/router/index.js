import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Example extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li>
                            <Link to="/netfix">Netfix</Link>
                        </li>
                        <li>
                            <Link to="/yahoo">Yahoo</Link>
                        </li>
                        <li>
                            <Link to="/order/asc">OrderASC</Link>
                        </li>
                    </ul>
                    <Route path="/:id" component={Child}/>
                    <Route path="/order/:direction(asc|desc)" component={componentWithRegular}/>
                </div>
            </Router>
        );
    }
}
function Child({match}) {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )
}
function componentWithRegular({match}) {
    return (
        <div>
            <h3>only asc/desc are allowed: {match.params.direction}</h3>
        </div>
    )
}
export default Example;