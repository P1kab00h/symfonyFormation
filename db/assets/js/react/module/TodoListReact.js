import React from "react";

function List({remove, completed, info, data})
{
    return <>{data.map((todo, key) => {
        return <li key={key} >{todo}
            <button key={key + '_remove'} data-key={key} data-info={info} onClick={remove}>supprime</button>

            <button key={key + '_completed'} data-key={key} data-info={info} onClick={completed}>{info === 'todo' ? "fait" : "à faire"}</button>
        </li>;
    })
    }
    </>;
}

class ListBis extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <>{this.props.data.map((todo, key) => {
            return <li key={key} >{todo}
                <button key={key + '_remove'} data-key={key} data-info={this.props.info} onClick={this.props.remove}>supprime</button>

                <button key={key + '_completed'} data-key={key} data-info={this.props.info} onClick={this.props.completed}>{this.props.info === 'todo' ? "fait" : "à faire"}</button>
            </li>;
        })
        }
        </>;
    }
}

export default class TodoList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            todoField: '',
            liste: [],
            listeFaite: []
        };
    }

    add = (task, info) =>
    {
        if("todo" === info) {
            let liste = this.state.liste.slice();
            liste.push(task);

            this.setState({
                liste,
                todoField: ''
            });
        } else {
            let listeFaite = this.state.listeFaite.slice();
            listeFaite.push(task);

            this.setState({
                listeFaite,
                todoField: ''
            });
        }
    }

    addSubmit = (e) =>
    {
        e.preventDefault();

        if(this.state.todoField.length) {
            this.add(this.state.todoField, "todo");
        }
    }

    changeTodoField = (e) =>
    {
        this.setState({todoField: e.target.value});
    }

    removeTask = (liste, index) => liste.filter((val, key) => key != index);

    removeTaskBt = (e) =>
    {
        if("todo" === e.target.dataset.info) {
            let tmp = this.state.liste.slice();

            let liste = this.removeTask(tmp, e.target.dataset.key);
            this.setState({liste});
        } else {
            let tmp = this.state.listeFaite.slice();

            let listeFaite = this.removeTask(tmp, e.target.dataset.key);
            this.setState({listeFaite});
        }
    }

    completedTask= (e) =>
    {
        if("todo" === e.target.dataset.info) {
            let tmp = this.state.liste.slice();

            let task = tmp[e.target.dataset.key];

            let liste = this.removeTask(tmp, e.target.dataset.key);
            this.setState({liste});

            this.add(task, "fait");
        } else {
            let tmp = this.state.listeFaite.slice();

            let task = tmp[e.target.dataset.key];

            let listeFaite = this.removeTask(tmp, e.target.dataset.key);
            this.setState({listeFaite});

            this.add(task, "todo");
        }

    }

    render()
    {
        return <>
            <form action="" method="post" onSubmit={this.addSubmit}>
                <input name="todo" value={this.state.todoField} onChange={this.changeTodoField} />

                <button type="submit" >Ajouter</button>
            </form>

            <p>{this.state.liste.length ? "Tache à faire" : ""}</p>
            <ul>
                <ListBis remove={this.removeTaskBt} completed={this.completedTask} info="todo" data={this.state.liste}/>
            </ul>

            <p>{this.state.listeFaite.length ? "Tache faite" : ""}</p>
            <ul>
                <List remove={this.removeTaskBt} completed={this.completedTask} info="fait" data={this.state.listeFaite}/>
            </ul>
        </>
    }
}
//
// ReactDOM.render(<TodoList />, document.getElementById('todoList'));