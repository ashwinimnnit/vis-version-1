edgesCustomColor(currentNode){
    let networkEdges= this.state.graphData.edges
    let nodeId = currentNode.nodes[0].trim()
    let edges = []
    currentNode.edges.map(function(nodeName){
        let temp = nodeName.split('$')
        if(temp[0].trim() === nodeId){
            edges.push(nodeName)
        }
    })
    edges.map(function(edgeId){

        for(let edge in networkEdges){
            if (networkEdges[edge].id === edgeId){
                if (networkEdges[edge].hasOwnProperty('color')) {
                    if (networkEdges[edge]['color'].hasOwnProperty('highlight')) {
                        networkEdges[edge]['color']['highlight'] = 'yellow'
                    }
                }else{
                    networkEdges[edge]['color'] ={}
                    networkEdges[edge]['color']['highlight'] = 'yellow'
                }
            }
        }
    })
    let tempState = this.state.graphData
    tempState.edges = networkEdges
    this.setState({graphData: tempState})
}