
  var w = 590,
      h = 120,
      piece = 11;

  var svg = d3.select("#title").append("svg");
  svg.attr('width', w)
      .attr('height', h);

  //x,y pairs that contain coordiantes to each square
  //will also contain color attributes
  // G
  var coordinates = [
      //g
      {x: 2*piece, y: 2*piece, color: "#B0E2FF", i:42}, 
      {x: 3*piece, y: 2*piece, color: "#B0E2FF", i:43}, {x: 4*piece, y: 2*piece, color: "#B0E2FF", i:43},
      {x: 5*piece, y: 2*piece, color: "#BFEFFF", i:44}, {x: 6*piece, y: 3*piece, color: "#B0E2FF", i:45},
      {x: 1*piece, y: 3*piece, color: "#BFEFFF", i:46}, {x: 1*piece, y: 4*piece, color: "#BFEFFF", i:47},
      {x: 1*piece, y: 5*piece, color: "#BFEFFF", i:48}, {x: 1*piece, y: 6*piece, color: "#BFEFFF", i:49},
      {x: 1*piece, y: 7*piece, color: "#B0E2FF", i:50}, {x: 1*piece, y: 8*piece, color: "#B0E2FF", i:51},
      {x: 2*piece, y: 9*piece, color: "#B0E2FF", i:52}, {x: 3*piece, y: 9*piece, color: "#B0E2FF", i:53},
      {x: 4*piece, y: 9*piece, color: "#B0E2FF", i:54}, {x: 5*piece, y: 9*piece, color: "#B0E2FF", i:55},
      {x: 6*piece, y: 8*piece, color: "#B0E2FF", i:56}, {x: 6*piece, y: 7*piece, color: "#B0E2FF", i: 57},
      {x: 6*piece, y: 6*piece, color: "#A4D3EE", i:58}, {x: 5*piece, y: 6*piece, color: "#A4D3EE", i: 59},
      {x: 4*piece, y: 6*piece, color: "#A4D3EE", i:60}, {x: 5*piece, y: 6*piece, color: "#A4D3EE", i:61},

      //a
      {x: 8*piece, y: 9*piece, color: "#A4D3EE", i:35}, {x: 8*piece, y: 8*piece, color: "#A4D3EE", i:34},
      {x: 8*piece, y: 7*piece, color: "#A4D3EE", i:33}, {x: 8*piece, y: 6*piece, color: "#A4D3EE", i:32},
      {x: 8*piece, y: 5*piece, color: "#63D1F4", i:31}, {x: 8*piece, y: 4*piece, color: "#63D1F4", i:30},
      {x: 9*piece, y: 3*piece, color: "#63D1F4", i: 29}, {x: 10*piece, y: 2*piece, color: "#63D1F4", i: 28},
      {x: 11*piece, y: 2*piece, color: "#63D1F4", i: 27}, {x: 12*piece, y: 3*piece, color: "#63D1F4", i: 27},
      {x: 13*piece, y: 4*piece, color: "#63D1F4", i: 26}, {x: 13*piece, y: 5*piece, color: "#63D1F4", i: 26},
      {x: 13*piece, y: 6*piece, color: "#00BFFF", i: 25}, {x: 13*piece, y: 7*piece, color: "#00BFFF", i: 24},
      {x: 13*piece, y: 8*piece, color: "#00BFFF", i:23}, {x: 13*piece, y: 9*piece, color: "#00BFFF", i: 23},
      {x: 9*piece, y: 6*piece, color: "#00BFFF", i: 27}, {x: 10*piece, y: 6*piece, color: "#00BFFF", i: 26},
      {x: 11*piece, y: 6*piece, color: "#00BFFF", i: 25}, {x: 12*piece, y: 6*piece, color: "#00BFFF", i:24}, 

      //m
      {x: 15*piece, y: 9*piece, color: "#00BFFF", i:22}, {x: 15*piece, y: 8*piece, color: "#00BFFF", i:22},
      {x: 15*piece, y: 7*piece, color: "#00BFFF", i:20}, {x: 15*piece, y: 6*piece, color: "#00BFFF", i:21},
      {x: 15*piece, y: 5*piece, color: "#00B2EE", i:18}, {x: 15*piece, y: 4*piece, color: "#00B2EE", i:19},
      {x: 15*piece, y: 3*piece, color: "#00B2EE", i: 17}, {x: 16*piece, y: 2*piece, color: "#00B2EE", i: 18},
      {x: 17*piece, y: 2*piece, color: "#00B2EE", i:16}, {x: 18*piece, y: 3*piece, color: "#00B2EE", i: 16},
      {x: 18*piece, y: 4*piece, color: "#00B2EE", i: 14}, {x: 18*piece, y: 5*piece, color: "#00B2EE", i: 15},
      {x: 19*piece, y: 2*piece, color: "#0099CC", i:13}, {x: 20*piece, y: 2*piece, color: "#0099CC", i : 14},
      {x: 21*piece, y: 3*piece, color: "#0099CC", i: 11}, {x: 21*piece, y: 4*piece, color: "#0099CC", i: 12},
      {x: 21*piece, y: 5*piece, color: "#0099CC", i: 9}, {x: 21*piece, y: 6*piece, color: "#0099CC", i: 10},
      {x: 21*piece, y: 7*piece, color: "#0099CC", i: 7}, {x: 21*piece, y: 8*piece, color: "#0099CC", i: 8},
      {x: 21*piece, y: 9*piece, color: "#0099CC", i : 7},

      //e
      {x: 23*piece, y: 2*piece, color: "#0099CC", i: 5}, {x: 23*piece, y: 3*piece, color: "#0099CC", i: 6},
      {x: 23*piece, y: 4*piece, color: "#0099CC", i:4}, {x: 23*piece, y: 5*piece, color: "#00688B", i:4},
      {x: 23*piece, y: 6*piece, color: "#00688B", i:3}, {x: 23*piece, y: 7*piece, color: "#00688B", i: 4},
      {x: 23*piece, y: 8*piece, color: "#00688B", i: 2}, {x: 23*piece, y: 9*piece, color: "#00688B", i: 2},
      {x: 24*piece, y: 2*piece, color: "#00688B", i: 1}, {x: 25*piece, y: 2*piece, color: "#00688B", i: 1},
      {x: 26*piece, y: 2*piece, color: "#00688B", i: 2}, {x: 27*piece, y: 2*piece, color: "#00688B", i: 3},
      {x: 24*piece, y: 5.5*piece, color: "#00688B", i: 3}, {x: 25*piece, y: 5.5*piece, color: "#00688B", i: 4}, 
      {x: 26*piece, y: 5.5*piece, color: "#0099CC", i: 5}, {x: 27*piece, y: 5.5*piece, color: "#0099CC", i: 6},
      {x: 24*piece, y: 9*piece, color: "#0099CC", i:6}, {x: 25*piece, y: 9*piece, color: "#0099CC", i:7}, 
      {x: 26*piece, y: 9*piece, color: "#0099CC", i:8}, {x: 27*piece, y: 9*piece, color: "#0099CC", i:9}, 

      //j 
      {x: 32*piece, y: 7*piece, color: "#0099CC", i: 7}, {x: 32*piece, y: 8*piece, color: "#0099CC", i: 7},
      {x: 33*piece, y: 9*piece, color: "#009ACD", i: 8}, {x: 34*piece, y: 9*piece, color: "#009ACD", i: 9},
      {x: 35*piece, y: 9*piece, color: "#009ACD", i: 10}, {x: 36*piece, y: 9*piece, color: "#33A1C9", i:11},
      {x: 37*piece, y: 8*piece, color: "#00B2EE", i: 12}, {x: 37*piece, y: 7*piece, color: "#00B2EE", i: 13},
      {x: 37*piece, y: 6*piece, color: "#00B2EE", i: 13}, {x: 37*piece, y: 5*piece, color: "#00B2EE", i:14},
      {x: 37*piece, y: 4*piece, color: "#00B2EE", i: 14}, {x: 37*piece, y: 3*piece, color: "#00BFFF", i:15},
      {x: 37*piece, y: 2*piece, color: "#00BFFF", i:16}, 

      // //a 
      {x: 39*piece, y: 9*piece, color: "#00BFFF", i:16}, {x: 39*piece, y: 8*piece, color: "#00BFFF", i: 17},
      {x: 39*piece, y: 7*piece, color: "#00BFFF", i: 17}, {x: 39*piece, y: 6*piece, color: "#00BFFF", i: 18},
      {x: 39*piece, y: 5*piece, color: "#00BFFF", i: 19}, {x: 39*piece, y: 4*piece, color: "#00BFFF", i: 20},
      {x: 40*piece, y: 3*piece, color: "#63D1F4", i: 21}, {x: 41*piece, y: 2*piece, color: "#63D1F4", i: 22},
      {x: 42*piece, y: 2*piece, color: "#63D1F4", i: 23}, {x: 43*piece, y: 3*piece, color: "#63D1F4", i: 24},
      {x: 44*piece, y: 4*piece, color: "#63D1F4", i: 25}, {x: 44*piece, y: 5*piece, color: "#63D1F4", i: 26},
      {x: 44*piece, y: 6*piece, color: "#63D1F4", i: 27}, {x: 44*piece, y: 7*piece, color: "#63D1F4", i: 28},
      {x: 44*piece, y: 8*piece, color: "#A4D3EE", i: 29}, {x: 44*piece, y: 9*piece, color: "#A4D3EE", i: 30},
      {x: 40*piece, y: 6*piece, color: "#A4D3EE", i: 20}, {x: 41*piece, y: 6*piece, color: "#A4D3EE", i: 21},
      {x: 42*piece, y: 6*piece, color: "#A4D3EE", i: 22}, {x: 43*piece, y: 6*piece, color: "#A4D3EE", i: 23}, 

      // //m 
      {x: 46*piece, y: 9*piece, color: "#A4D3EE", i: 24}, {x: 46*piece, y: 8*piece, color: "#A4D3EE", i:25},
      {x: 46*piece, y: 7*piece, color: "#A4D3EE", i: 26}, {x: 46*piece, y: 6*piece, color: "#A4D3EE", i:26},
      {x: 46*piece, y: 5*piece, color: "#A4D3EE", i: 27}, {x: 46*piece, y: 4*piece, color: "#A4D3EE", i:28},
      {x: 46*piece, y: 3*piece, color: "#B0E2FF", i: 29}, {x: 47*piece, y: 2*piece, color: "#B0E2FF", i:30},
      {x: 48*piece, y: 2*piece, color: "#B0E2FF", i: 31}, {x: 49*piece, y: 3*piece, color: "#B0E2FF", i:32},
      {x: 49*piece, y: 4*piece, color: "#B0E2FF", i: 32}, {x: 49*piece, y: 5*piece, color: "#B0E2FF", i:33},
      {x: 50*piece, y: 2*piece, color: "#B0E2FF", i: 34}, {x: 51*piece, y: 2*piece, color: "#B0E2FF", i:35},
      {x: 52*piece, y: 3*piece, color: "#BFEFFF", i: 36}, {x: 52*piece, y: 4*piece, color: "#BFEFFF", i:37},
      {x: 52*piece, y: 5*piece, color: "#BFEFFF", i: 38}, {x: 52*piece, y: 6*piece, color: "#BFEFFF", i:39},
      {x: 52*piece, y: 7*piece, color: "#BFEFFF", i: 40}, {x: 52*piece, y: 8*piece, color: "#BFEFFF", i:41},
      {x: 52*piece, y: 9*piece, color: "#BFEFFF", i: 41}
  ];

  svg.selectAll("rect").data(coordinates)
    .enter().append("rect")
    .attr("x", function(d){
      return d.x;
    })
    .attr("y", function(d){
      return d.y;
    })
    .attr("fill", function(d){
      return d.color;
    })
    .attr("rx", 0)
    .attr("ry", 0)
    .attr("width", piece)
    .attr("height", piece)
    .attr("stroke", "none")
    .style("opacity", 0);

    svg.selectAll("rect")
        .transition()
        .delay(function(d, i) {
          return  i * 15;
        })
        .ease("elastic").duration(10000)
        .attr("width", piece)
        .attr("height", piece)
        .attr("stroke", "#000000")
        .attr("fill", "#00688B")
        .style('opacity', 0.9);
