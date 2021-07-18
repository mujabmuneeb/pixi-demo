import React from "react";
import ReactDOM from "react-dom";
import { Graphics, Stage } from "@inlet/react-pixi";
import Viewport from "./Viewport";
import personImg from "./sprite.png";
import bunnyImg from "./bunny.png";
import Draggable from "./Draggable";

const Tiles = () => {

  const draw = React.useCallback(graphics => {

    // graphics.beginFill(0xe3e3e3);
    // graphics.lineStyle(1, 0xc0c0c0);    
    // graphics.drawRect(0, 0, 100, 100);
  
    graphics.lineStyle(1, 0xdcdcdc)
    graphics.beginFill(0xf0f0f0);
    for (var i = 0; i < window.innerWidth / 100 ; i++) {
      graphics.drawRect(i * 100, 0, 100, 100);
      for (var j = 0; j < window.innerHeight / 100 ; j++) {
        graphics.drawRect(i * 100, j * 100, 100, 100);
      }
    }
  }, [])

  return (

    <Graphics draw={draw}/>
    
  );
};

const App = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div>
      <Stage
        width={width}
        height={height}
        options={{ backgroundColor: 0xe3e3e3, resolution: 1 }}
      >
    
        <Tiles />

        <Viewport width={width} height={height}>
          <Draggable image={personImg} x={200} y={200}/>
          <Draggable image={personImg} x={1000} y={200} />
          <Draggable image={personImg} x={200} y={500} />
          <Draggable image={bunnyImg} x={200} y={500} />
          <Draggable image={personImg} x={1000} y={500} />
          <Draggable image={personImg} x={500} y={250} />
        </Viewport>
      </Stage>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
