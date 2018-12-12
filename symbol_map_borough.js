
if(!d3.chart) d3.chart = {};

d3.chart.symbol_map = function() {
  var g;
  flag=0;  //0 is all data, 1 is filtered
  var data;
  var width = 400;
  var height = 400;
  var cx = 10;
  var size_scale = 30;
  var dispatch = d3.dispatch("hover", "reset", "click");
  var map;

  function chart(container,mapp) {
    g = container;
    map=mapp;
    isClick="undefined";
    update();


  }
  chart.update = update;

  function update() {
      var x = d3.scaleOrdinal()
      .domain(["0", "1", "2", "3", "4", "5", "6", "7", "8","9", "10", "11", "12", "13", "14", "15", "16", "17","18"])
      .range(["0", "0", "0", "0", "0", "0", "0", "0", "0","1", "1", "2", "3", "4", "6", "8", "10", "15","20"]);

      map.on("click",function(d){
          dispatch.call("click",this,[]);

          d3.select(".isOnClick").attr("class","symbols").style("stroke","").attr("fill", function(d){return color(d.stars);});
      })

    data.forEach(function(d) {
      d.LatLng = new L.LatLng(d.latitude,
                  d.longitude)
    })


     var symbols = g.selectAll("circle")
      .data(data,function(d){return d.business_id;})
      .enter()
      .append("circle")
      .attr("r", x(map.getZoom()))
      .attr("fill", function(d){ return color(d.stars_rank);})
      .style("opacity", 0.6)
      .attr("class", "symbols")
      .on("mouseover", function(d) {
      if(d3.select(this).attr("class")=="isOnClick"){
        return;
      }else{
        d3.select(this).style("stroke", "black").attr("class","isOnMouseOver").style("stroke-width", 3);
      }
      dispatch.call("hover",this,[d])
    })
     .on("click",function(d){
      var c=g.select(".isOnClick");
        if(c.data().length!=0){

          c.style("stroke","").attr("fill", function(d){return color(d.stars_rank);})
          .attr("class","symbols");
        }

         d3.select(this).style("stroke","black").style("stroke-width", 5).attr("fill","#85e085").attr("class","isOnClick");
         dispatch.call("click",this,[d]);
         d3.event.stopPropagation();
       })

    .on("mouseout", function(d) {
      //var c=g.select(".isOnMouseOver");
      //console.log(d3.select(this).class());
      if(d3.select(this).attr("class")!="isOnMouseOver"){
          //console.log("not the same circle");
      }else{
        //console.log("the same circle");
        d3.select(this).style("stroke", "").attr("class","symbols")
        dispatch.call("hover",this,[])
      }

    })
      // console.log(map);
      //
    map.on("viewreset", reset);
    reset();

  }




  function reset(){


    var x = d3.scaleOrdinal()
      .domain(["0", "1", "2", "3", "4", "5", "6", "7", "8","9", "10", "11", "12", "13", "14", "15", "16", "17","18"])
      .range(["0", "0", "0", "0", "0", "0", "0", "0", "0","1", "1", "2", "3", "4", "6", "8", "10", "15","20"]);

      symbols=g.selectAll("circle")
              .data(data, function(d){return d.business_id;})



      symbols.exit().remove();

      symbols
      .attr("r", 70)

          .style("opacity", 0.6)
      .attr("transform",
          function(d) {
          return "translate("+
          map.latLngToLayerPoint(d.LatLng).x +","+
          map.latLngToLayerPoint(d.LatLng).y +")";
        }
      )
      symbols.select(".symbols").attr("fill", function(d){ return color(d.stars_rank);})
      symbols.select(".isOnClick").attr("fill", "#85e085");
      symbols.enter().append("circle")
            .attr("r", 70)
            .attr("fill", function(d){ return color(d.stars_rank);})
            .style("opacity", 0.6)
            .attr("class", "symbols")
            .attr("transform",
                      function(d) {
                      return "translate("+
                      map.latLngToLayerPoint(d.LatLng).x +","+
                      map.latLngToLayerPoint(d.LatLng).y +")";
                    }
                  )
      symbols.append('text')
      .text(function(d){return "Node"})
      .on("mouseover", function(d) {
      if(d3.select(this).attr("class")=="isOnClick"){
        return;
      }else if(d3.select(this).attr("class")=="isOnMouseOver"){
        d3.select(this).style("stroke", "black").style("stroke-width", 3);
      }else{
        d3.select(this).style("stroke", "black").attr("class","isOnMouseOver").style("stroke-width", 3);
      }

      dispatch.call("hover",this,[d])
    })
     .on("click",function(d){
      var c=g.select(".isOnClick");

      console.log(c.data()[0].stars_rank)
        if(c.data().length!=0){
          //console.log("here");
          c.style("stroke","").attr("fill", function(d){return color(d.stars_rank);})
          .attr("class","symbols");
        }

         d3.select(this).style("stroke","black").style("stroke-width", 5).attr("fill","#85e085").attr("class","isOnClick");
         dispatch.call("click",this,[d]);
         d3.event.stopPropagation();})

    .on("mouseout", function(d) {
      //var c=g.select(".isOnMouseOver");
      //console.log(d3.select(this).class());
      if(d3.select(this).attr("class")=="isOnMouseOver"){
        d3.select(this).style("stroke", "").attr("class","symbols")
        dispatch.call("hover",this,[])
      }else if(d3.select(this).attr("class")=="isOnClick"){
        return;
      }

    })




      symbols.exit().remove();

  }


  chart.highlight = function(data) {
        //console.log(data);
        var symbols = g.selectAll("circle.symbol")
        .style("stroke", "")
        .style("stroke-width", "")

        symbols.data(data)
        .style("stroke", "black")
        .style("stroke-width", 3)
    }



  chart.data = function(value) {
    if(!arguments.length) return data;
    var data_1 = [];
    var data_2 = [];
    var data_3 = [];

    var price = treemap.pricestate();
    var categories =treemap.catstate();

     // console.log(1234,categories);

      value.forEach(function(d){
          if(price[d.price-1] != 0){
              data_1.push(d);
          }
      });
      data_1.forEach(function(d) {
          if(d.stars_rank>=treemap.starlevel()){
              // console.log("d.star",d.stars);
              // console.log("starlevel()",treemap.starlevel());
            data_2.push(d)
          }
      });

      if(categories != 0){
      data_2.forEach(function (d) {
              for (i in d.categories) {
                  for (j in categories){
                      if (d.categories[i] == categories[j]) {

                          data_3.push(d);

                      }
                  }

              }

      })
      data = data_3;
      }else{data = data_2;}



      data_1 = [];
      data_2 = [];
      data_3 = [];
    //flag=flag;
    return chart;
  }
  chart.width = function(value) {
    if(!arguments.length) return width;
    width = value;
    return chart;
  }
  chart.height = function(value) {
    if(!arguments.length) return height;
    height = value;
    return chart;
  }

  chart.currenres =function(){
      return current_res;
  }



  return d3.rebind(chart, dispatch, "on");
}
