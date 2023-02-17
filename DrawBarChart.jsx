import {React, Component} from 'react';
import * as d3 from 'd3';

class DrawBarChart extends Component{

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
    
        const margin = ({top: 20, right: 20, bottom: 30, left: 20})
        const height  = this.props.height;
        let data =[]; 
        const color = this.props.color;
        const width = this.props.width;
        const DailyTemp = this.props.DailyTemp;
        const HourlyTemp = this.props.HourlyTemp;


        if(DailyTemp ){
             data = this.props.data.dailyGraphData;
        }else{
             data = this.props.data.hourlyGraphData;
        }

        const scaleX = d3.scaleBand()
        .domain(data.map(({ title }) => title))
        .range([margin.left, width - margin.right])
        .padding(0.5);
        
        
        const scaleY = d3.scaleLinear()
        .domain([0,d3.max( data,  (d) => { return d.temp; })])
        .range([height - margin.bottom, margin.top]).nice();
       
        
        const svg = d3.select(`#${this.props.id}`).append("svg").attr("width",this.props.width).attr("height",height)
        .style( "stroke","#FFFFFF");

        const xAxis = d3.axisBottom(scaleX)
        .ticks(data.length)
        .tickFormat(i => i);

        const yAxis =  d3.axisLeft(scaleY).ticks(10);

        svg.append('g')
        .call(xAxis)
        .attr('transform' ,`translate(0,${height - margin.bottom})`);

        svg.append('g')
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis);

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
        
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x",(d) => scaleX(d.title))
        .attr("y",(d)=> scaleY(d.temp))
        .attr("width",20)
        .attr("height", ((d)=> height-margin.bottom - scaleY(d.temp)))
        .attr("fill","white");

        svg.selectAll("line")
        .style("stroke", "white");
    
        svg.selectAll("path")
        .style("stroke", "white");
    
        svg.selectAll("text")
        .style("stroke", "white");

    }


    render(){
        return 
        
        <div id={"#" + this.props.id}></div> //assigning the ref to the node property that we want to expose
    }
}

export default DrawBarChart;
