

const TaskListComponent = (tasklist) => {


  return <div>
    <ul className="todo-list">
      {
        tasklist.map((ele))
      }
    </ul>
  </div>;
};

export default TaskListComponent;
