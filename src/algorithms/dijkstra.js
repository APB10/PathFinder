// Performs Dijkstra's algorithm; returns *all* nodes in the order
// in which they were visited. Also makes nodes point back to their
// previous node, effectively allowing us to compute the shortest path
// by backtracking from the finish node.

export function dijkstra(grid, starNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);
  while (!!unvisitedNodes.length) {
    sortNodesDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    //If we encounter a wall, we skip it.
    if (closestNode.isWall) continue;
    //If
  }
}
