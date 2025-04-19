const TaskForm = () =>  {
    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />  
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required />
            </div>
            <div>
                <button>Add Task</button>
            </div>
        </form>
    );
}

export default TaskForm;