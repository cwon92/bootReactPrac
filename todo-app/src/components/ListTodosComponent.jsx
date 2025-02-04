function ListTodosComponent(){
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 
                              today.getMonth, today.getDay())
  const todos = [
    {id: 1, description: 'learn AWS', done: false, targetDate: targetDate},
    {id: 2, description: 'learn asd', done: false, targetDate: targetDate},
  ]
  

  return(
    <div className="container">
      <h1>ListTodosComponent</h1>

      <div>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
              <td>is done</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {
              todos.map( todos => (
                <tr key={todos.id}>
                  <td>{todos.id}</td>
                  <td>{todos.description}</td>
                  <td>{todos.done.toString()}</td>
                  <td>{todos.targetDate.toDateString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListTodosComponent;