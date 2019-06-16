import React from "react";
import ReactDOM from "react-dom";
import Raphael from "raphael";

import "./styles.css";

Raphael.el.red = function() {
  this.attr({ fill: "#f00" });
};
Raphael.st.red = function() {
  this.forEach(function() {
    this.red();
  });
};

class App extends React.Component {
  componentDidMount() {
    var x, y;
    var r = Raphael(10, 50, 320, 200);
    var circle = r.circle(50, 40, 10);
    var cclone = circle.clone();
    cclone
      .attr({ fill: "#f3f3f3", r: 55, cx: 100, cy: 100 })
      .toBack()
      .red();

    cclone.onDragOver(() => {
      console.log(1);
    });
    var rect = r
      .rect()
      .attr(cclone.getBBox())
      .rotate(34);
    console.log(cclone.getBBox());
    // circle.drag();
    var set = r.set(cclone, rect).drag(
      function(dx, dy) {
        this.attr({
          cx: x + dx,
          cy: y + dy
        });
        // this.glow();
      },
      function() {
        x = this.attr("cx");
        y = this.attr("cy");
      }
    );
    set.attr({ stroke: "#454fff" });
    console.log(cclone.getSubpath(0, 100));
    // r.path
    //   .attr(cclone.getSubpath(0, 150))
    //   .attr({ stroke: "yellow", strokeWidth: 6 });
    //   var set = r.set(
    //     r.rect(10, 10, 50, 50),
    //     r.rect(40, 40, 50, 50, 10)
    // ).hover(function () {
    //     set.stop().animate({stroke: "#f00"}, 600, "<>");
    // }, function () {
    //     set.stop().animate({stroke: "#fff"}, 600, "<>");
    // });
  }
  render() {
    return (
      <div className="App">
        <div id="canvas" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// test
