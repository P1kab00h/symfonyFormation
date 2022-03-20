class TodoReact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskToAdd: '',
            taskToDo: '',
            doneTask: '',

            todoArray: [],
        }
    }


    editForm = (e) => {
        this.setState({
            taskToAdd: e.target.value,


        })
    }


    addTask = () => {
        /*
                array.forEach((todoTask)=>{

                        test.push(
                        <>
                        <li>{todoTask}
                            <button onClick={this.deleteTaskToDo} className="btn btn-danger ms-2 mt-1 mb-1 me-1">Supprimer</button>
                            <button onClick={this.doneTask} className="btn btn-success m-1">Mission Accomplie !</button>
                        </li>
                    </>
                        )

                    console.log(test)



                    this.setState({
                        taskToDo: test
                    })



            });*/

        let testToPushArray = this.state.taskToAdd;

        let testArrayPush = this.state.todoArray;

        let taskToDo = [];


        testArrayPush.push(testToPushArray);
        console.log(testArrayPush);


        for (let i = 0; i < testArrayPush.length; i++) {
            taskToDo =
                <>
                    <li>{testArrayPush[i]}</li>
                </>
        }



/*        let taskToDo = <>
            <li>{this.state.taskToAdd}
                <button onClick={this.deleteTaskToDo} className="btn btn-danger ms-2 mt-1 mb-1 me-1">Supprimer</button>
                <button onClick={this.doneTask} className="btn btn-success m-1">Mission Accomplie !</button>
            </li>
        </>*/

        this.setState({
            taskToDo: taskToDo
        });


//        console.log(this.state.taskToAdd)

    }

    deleteTaskToDo = () => {
        this.setState({
            taskToDo: ''
        })
    }

    deleteTaskDone = () => {
        this.setState({
            doneTask: ''
        })
    }

    doneTask = () => {
        let doneTask = <>
            <li>{this.state.taskToAdd}
                <button onClick={this.deleteTaskDone} className="btn btn-danger ms-2 mt-1 mb-1 me-1">Supprimer</button>
                <button onClick={this.undoDoneTask} className="btn btn-warning m-1">annuler</button>
            </li>
        </>
        this.setState({
            // doneTask: this.state.taskToDo,
            doneTask: doneTask,
            taskToDo: ''
        })

        console.log(this.state.doneTask)
    }

    undoDoneTask = () => {
        let taskToUndone = <>
            <li>{this.state.doneTask}
                {/*                <button onClick={this.deleteTaskToDo} className="btn btn-danger ms-2 mt-1 mb-1 me-1">Supprimer</button>
                <button onClick={this.doneTask} className="btn btn-success m-1">Mission Accomplie !</button>*/}
            </li>
        </>
        this.setState({
            taskToDo: taskToUndone,
            doneTask: ''
        })
        console.log(this.state.doneTask.children.props)
    }


    render() {
        return (
            <div id="todo" className="card">

                <h5 className="card-header">ToDo list</h5>
                <div className="card-body">

                    <div className="col-sm-2"></div>
                    <span className="container-sm">
                    <h6>Nouvelle tâche</h6>
                    <div className="col-sm-2">
                        <form action="" method="post">
                            <input className="form-control" id='taskToDo' name='taskToDo' value={this.state.taskToAdd}
                                   onChange={this.editForm}/>
                        </form>
                    </div>
                    <button onClick={this.addTask} className="btn btn-primary mt-3 mb-3">Ajouter</button>
                    <h6 className="to-do-title">Tâche(s) à réaliser</h6>
                    <ul id="toDoList">{this.state.taskToDo}</ul>
                    <div className="done-task">
                        <h6>Tâche(s) réalisée(s)</h6>
                    </div>
                    <ul>
{/*                        <li>test2
                            <button className="btn btn-danger ms-2 mt-1 mb-1 me-1">Supprimer</button>
                            <button className="btn btn-warning m-1">annuler</button>
                        </li>*/}
                        {this.state.doneTask}
                    </ul>
                </span>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<TodoReact/>, document.getElementById('todoList'));