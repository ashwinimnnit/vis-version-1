import { default as React } from 'react';
const vis = require('vis');
const uuid = require('uuid');
import NodeDetails from './nodeDetails'
require('./App.css')

class Graph extends React.Component {

    constructor(props) {
        super(props);
        const {identifier} = this.props;
        this.updateGraph = this.updateGraph.bind(this);
        this.network = null;
        this.state = {
            hierarchicalLayout: true,
            identifier: identifier ? identifier : uuid.v4(),
            graphData: this.props.graph
        };
    }

    componentDidMount() {
        this.nodeDeatilsInstance = this.refs.nodeDetails
        this.updateGraph();
    }

    componentDidUpdate() {
        this.updateGraph();
    }



    graphEventListener(networkInstance) {
        networkInstance.addEventListener('click', (params) => {
            if (!(params && params.nodes.length)) {
                return;
            }
            const nodeId = params.nodes[0];
            const nodeJson = this.state.graphData.nodes.find(x => x.id === nodeId).nodeData;
            this.nodeDeatilsInstance.showNodeDetails(nodeJson);
        });

        this.network.on('zoom', (e) => {
            console.log('zoom scale', this.network.getScale())
            console.log('event', e, this.network);
            const scale = this.network.getScale();
            if (scale < 0.1 || scale > 5) {
                console.log('zoom value not allowed');
            }
        })

        networkInstance.on("hoverNode", (params)  => {
            console.log('hoverNode Event:', params);
        });

        this.network.on("hoverEdge", function (params) {
            console.log('hoverEdge Event:', params);
        });
    }

    updateGraph() {
        let container = document.getElementById(this.state.identifier);
        let options = {
            interaction: {
                dragNodes: true,
                dragView: true,
                hideEdgesOnDrag: false,
                hideNodesOnDrag: false,
                hover: true,
                hoverConnectedEdges: true,
                keyboard: {
                    enabled: true,
                    speed: { x: 10, y: 10, zoom: 0.02 },
                    bindToWindow: true
                },
                multiselect: true,
                navigationButtons: true,
                selectable: true,
                selectConnectedEdges: true,
                tooltipDelay: 300,
                zoomView: true
            },
            edges: {
                color: {
                    color: '#000000',
                    highlight: 'red'
                },
                arrows: {
                    to: { enabled: true, scaleFactor: 0.5, type: 'arrow' },
                },
                width: 0.5,
                length: 1,
            },
            nodes: {
                borderWidth: 1,
            },

            physics: {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95,
                    springConstant: 0.04,
                    damping: 0.09,
                    avoidOverlap: 0
                },
                /*barnesHut: {
                 avoidOverlap: 0.7
                 },*/

            }
        };
        this.network = new vis.Network(container, this.state.graphData, options);
        this.graphEventListener(this.network)
    }

    render() {
        const {identifier} = this.state;
        return (
            <div className="canvas-container">
                <NodeDetails ref='nodeDetails' />
                <div id={identifier}
                    className='canvas'>
                </div>
            </div >
        )
    }
}

Graph.defaultProps = {
    graph: {}
};

export default Graph;
