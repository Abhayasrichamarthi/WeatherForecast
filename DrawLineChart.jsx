import {React, Component} from 'react';
import * as d3 from 'd3';

class DrawLineChart extends Component{

    componentDidMount(){
        this.drawChart(); //accessing it whereever we want using .current
        
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        if (prevProps.data !== this.props.data) {
          this.drawChart();
        }
      }

    drawChart(){

         
        d3.select(`#${this.props.id}`)
        .select('svg')
        .remove();
    
       
        const height  = this.props.height;
        const color = this.props.color;
        const width = this.props.width;
        const DailyTemp = this.props.DailyTemp;
        const HourlyTemp = this.props.HourlyTemp;
        let data =[]; 
        
        if(HourlyTemp){
             data = this.props.data.hourlyGraphData;
        }else{
             data = this.props.data.dailyGraphData; 
        }
        
       
        const margin = ({top: 20, right: 30, bottom: 30, left: 40})
        

        const svg = d3.select(`#${this.props.id}`).append('svg')        
        .attr('width', width)
        .attr('height', height )
        .style('overflow','visible')

        
        const  xScale=  d3.scalePoint().domain(data.map((d)=> d.title)).range([margin.left, width - margin.right])

        const yScale = d3.scaleLinear().domain([0,d3.max( data,  (d) => { return d.temp; })]).range([height - margin.bottom, margin.top]).nice();

        // Title

        if(this.props.DailyTemp){
            svg.append('text')
        .attr('x', margin.left+width/2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .style('font-family', 'sans-serif')
        .style('font-size', 18)
        .style('font-weight', 'bold')
        .style('color','white')
        .text("Daily Temperature for next 8 days");
        }else{

            svg.append('text')
        .attr('x', margin.left+width/2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .style('font-family', 'sans-serif')
        .style('font-size', 18)
        .style('font-weight', 'bold')
        .style('color','white')
        .text("Hourly Temperature for next 12 Hours");
        }
        
        
        //setting the axes

        const xAxis = d3.axisBottom(xScale)
        .ticks(data.length)
        .tickFormat(i => i);

        const yAxis =  d3.axisLeft(yScale).ticks(10);

        svg.append('g')
        .call(xAxis)
        .attr('transform' ,`translate(0,${height - margin.bottom})`);


        svg.append('g')
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis);

        svg.selectAll("line")
        .style("stroke", "white");
    
        svg.selectAll("path")
        .style("stroke", "white");
    
        svg.selectAll("text")
        .style("stroke", "white");

      
        const valueLine = d3.line()
        .x((d)=> xScale(d.title))
        .y( (d)=>yScale(d.temp) )
        .curve(d3.curveMonotoneX)



        svg.selectAll("myCircles")
        .data(data)
        .enter()
        .append("circle")
          .attr("fill", "white")
          .attr("stroke", "none")
          .attr("cx", function (d) { return xScale(d.title); } )
          .attr("cy", function (d) { return yScale(d.temp); } )
          .attr("r", 3)
        
       svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueLine)
        .attr('fill','none')
        .attr('stroke','white');  
    }


    render(){
        return <div id={"#" + this.props.id} >

        
        <h2 className="flex items-center text-white">{this.props.title}</h2>
        </div> 
    }
}

export default DrawLineChart;