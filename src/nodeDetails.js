import { default as React } from 'react';
require('./App.css')
import JSONTree from 'react-json-tree'

class NodeDetails extends React.Component {

    constructor(props) {
        super(props);
        this.theme = {
            scheme: 'monokai',
            author: 'wimer hazenberg (http://www.monokai.nl)',
            base00: '#272822',
            base01: '#383830',
            base02: '#49483e',
            base03: '#75715e',
            base04: '#a59f85',
            base05: '#f8f8f2',
            base06: '#f5f4f1',
            base07: '#f9f8f5',
            base08: '#f92672',
            base09: '#fd971f',
            base0A: '#f4bf75',
            base0B: '#a6e22e',
            base0C: '#a1efe4',
            base0D: '#FF0000',
            base0E: '#ae81ff',
            base0F: '#cc6633'
        }
        this.state = {
            nodeDetails: '',
            isVisible: false
        }
    }

    hideNodeDetails() {
        this.setState({ isVisible: false });
    }

    showNodeDetails(nodeJson) {
        this.setState({ isVisible: true, nodeDetails: nodeJson });
    }

    render() {
        let data = this.state.nodeDetails;
        if (!this.state.isVisible) {
            return (<div></div>)
        }
        return (
            <div className="nodeDetails">
                <div className="closebutton" onClick={this.hideNodeDetails.bind(this)}>
                    <span>x</span>
                </div>
                <div className="jsondetails">
                    <JSONTree data={data} theme={{
                        extend: this.theme
                    }} />
                </div>
            </div>
        )
    }
}

export default NodeDetails;