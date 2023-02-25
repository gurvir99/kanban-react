import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const drag = (e)=>{
  e.preventDefault();
  e.target.classList.add("drag-item");
}

const endDrag = (e)=>{
  e.preventDefault();
  e.target.classList.remove("drag-item");
}

const put = (e)=>{
  e.preventDefault();
  const currentTask = document.querySelector(".drag-item");
  e.target.appendChild(currentTask);
}

function App() {
  return (
    <div className="App">
        <div className="main">
          <div className="all-columns">
            <div className="single-column" id="todo-column" onDragOver={put}>
              <h3 className="heading">To Do</h3>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Create Wireframes
              </p>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Test App
              </p>
            </div>
            <div className="single-column" id="doing-column" onDragOver={put}>
              <h3 className="heading">Doing</h3>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Edit Layout
              </p>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Validate Forms
              </p>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Add Background Picture
              </p>
            </div>
            <div className="single-column" id="done-column" onDragOver={put}>
              <h3 className="heading">Done</h3>
              <p className="task" draggable onDrag={drag} onDragEnd={endDrag}>
                Implement Login
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
