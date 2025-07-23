function numIslands(grid) {
    const visited = grid.map(row => row.map(col => false))
    let islandCount = 0;


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            console.log(grid[i], grid[i][j])
        }
    }
}

let input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

numIslands(input)