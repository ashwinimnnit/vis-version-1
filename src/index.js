import React from 'react';
import ReactDOM from 'react-dom';
import Graph from './vis';
import Flow from './flow'

var nodeList = [];
var nodeEdges = [];
var urlList = [];
var urlEdges = [];
createNodes();
for (let keys in Flow.schema.nodes) {
    var nodeName = Flow.schema.nodes[keys];
    if (nodeName.hasOwnProperty("messages")) {
        let messageObject = Array.isArray(nodeName.messages) ? nodeName.messages[0] : nodeName.messages
        let actionList = messageObject.actions
        if (Array.isArray(nodeName.messages))
            actionBuilder(keys, actionList);
        else {
            if (nodeName.messages.data.type == "text" || !nodeName.messages.data.hasOwnProperty("type"))
                actionBuilder(keys, actionList);
            else if (nodeName.messages.data.type == "gallery") {
                galleryNodesBuilder(nodeName, keys)
            }
        }
    }
    else
        conditionalNodesBuilder(nodeName, keys)
}

function createNodes() {
    let initialNode = Flow.schema.initialNode;
    for (let key in Flow.schema.nodes) {
        const node = Flow.schema.nodes[key];
        const visnode = { nodeData: Flow.schema.nodes[key] };
        if (key === initialNode) {
            nodeList.push({ ...visnode, "id": key, "label": key, shape: "box", color: "#F39A18", x: 0, y: 0, physics: false, fixed: true })
        } else if (node && node.type === 'conditional') {
            nodeList.push({ ...visnode, "id": key, "label": key, shape: "box", color: "lightgreen" })
        } else {
            nodeList.push({ ...visnode, "id": key, "label": key, shape: "box" })
        }
        //nodeList.push({"id":key, "label": key,shape:"box"});
    }
}
function addWeightToEdge(actionListAction, keys, label) {
    let actionNodeId = keys + "#" + label
    actionNodesPush(actionNodeId, label, actionListAction)
    nodeEdges.push({ "from": keys, "to": actionNodeId , 'id':keys+'$'+actionNodeId})
    let weight = 1;
    for (var nextNode in actionListAction.nextNodes) {
        nodeEdges.push({
            "from": actionNodeId,
            "to": actionListAction.nextNodes[nextNode],
            label: weight,
            color:{highlight:'green'},
            'id': actionNodeId+'$'+actionListAction.nextNodes[nextNode]
        })
        weight++;
    }
    weight = 1;
}

function addActionNodesAndEdges(actionListAction, keys, label) {
    if (actionListAction.type === "quicktext") {
        label = actionListAction.label[0]
    }
    else {
        label = actionListAction.label
    }
    let actionNodeId = keys + "#" + label + "#" + actionListAction.nextNodes[0]
    actionNodesPush(actionNodeId, label, actionListAction)
    //pushing action edges
    nodeEdges.push({ "from": keys, "to": actionNodeId , color:{highlight:'green'}, 'id':keys+'$'+actionNodeId}, {
        "from": actionNodeId,
        "to": actionListAction.nextNodes[0],
        'id': keys+'$'+actionListAction.nextNodes[0]
    })
}

function createEdges(actionListAction, keys, label, action) {
    if (actionListAction.nextNodes.length > 1)
        addWeightToEdge(actionListAction, keys, label)
    else
        addActionNodesAndEdges(actionListAction, keys, label)
}

function actionBuilder(keys, actionList) {
    for (var textActions in actionList) {
        var actionNodeId;
        let label;
        if (actionList[textActions].type === "quicktext") {
            label = actionList[textActions].label[0]

        }
        else {
            label = actionList[textActions].label
        }
        createEdges(actionList[textActions], keys, label, textActions)

    }
}
function galleryNodesBuilder(nodeName, keys) {
    let galleryActionNodeId;
    let galleryActionList = nodeName.messages.data.value.items
    for (var galleryItems in galleryActionList) {
        let galleryActionNodes = galleryActionList[galleryItems].actions
        for (var galleryAction in galleryActionNodes) {
            if (galleryActionNodes[galleryAction].hasOwnProperty("url"))
                galleryUrlBuilder(keys, galleryActionNodes[galleryAction])

            if (galleryActionNodes[galleryAction].hasOwnProperty("nextNodes")) {

                galleryActionNodeId = keys + "#" + galleryActionNodes[galleryAction].label + "#" + galleryActionNodes[galleryAction].nextNodes[0];
                actionNodesPush(galleryActionNodeId, galleryActionNodes[galleryAction].label, galleryActionNodes[galleryAction])
                nodeEdges.push({ "from": keys, "to": galleryActionNodeId , color:{highlight:'green'}, 'id': keys+'$'+galleryActionNodeId}, {
                    "from": galleryActionNodeId,
                    "to": galleryActionNodes[galleryAction].nextNodes[0],
                    'id': galleryActionNodeId+'$'+galleryActionNodes[galleryAction].nextNodes[0]
                })
            }
        }
    }
}
function galleryUrlBuilder(keys, galleryNodeActions) {
    let galleryActionNodeId = keys + "#" + galleryNodeActions.label + "#" + galleryNodeActions.url;
    urlList.push({
        "id": galleryActionNodeId,
        "label": galleryNodeActions.label,
        color: { background: 'white' }
    })
    urlEdges.push({ "from": keys, "to": galleryActionNodeId })
    for (var node in nodeList) {
        if (nodeList[node].id === keys)
            Object.assign(nodeList[node], { "color": { "border": 'red', background: '#97C2FC' } });
    }
}
function conditionalNodesBuilder(nodeName, keys) {
    for (let condition in nodeName.conditions) {
        let nextNodes = nodeName.conditions[condition].nextNodes[0];
        nodeEdges.push({ "from": keys, "to": nextNodes, "id": keys+"$"+nextNodes})
    }
}
function actionNodesPush(id, label, action) {
    nodeList.push({
        "id": id,
        "label": label,
        color: { background: 'white' },
        nodeData: action
    });
}


console.log("List", nodeList);
//console.log("edge",nodeEdges);

var data = {
    nodes: nodeList,
    edges: nodeEdges
};
ReactDOM.render(
    <div className="canvas-container"><Graph graph={data} /></div>,
    document.getElementById('root')
);

