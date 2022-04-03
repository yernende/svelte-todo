<h1>TODO</h1>
<div class="todos-left-notice">
  There is {todos.length} todos left.
</div>
<form on:submit|preventDefault={submitTodo} id="todoForm" class="form-todo">
  <input bind:value={newTodo.text} type="text">
  <input bind:value={newTodo.priority} type="text">
  <input type="submit" value="OK" disabled={newTodo.text.length == 0}>
</form>
<div class="todos-grid">
  {#each todosSorted as todo (todo.id)}
    <div class="todo-text">{todo.text}</div>
    <div class="todo-priority">{todo.priority}</div>
    <div class="todo-controls"><button on:click={() => removeTodo(todo.id)}>done</button></div>
  {/each}
</div>

<script>
  let newTodo = {
    text: "",
    priority: 0,
    id: 0
  };

  let todos = [];
  $: todosSorted = todos.sort((a, b) => a.priority - b.priority);

  function submitTodo() {
    if (!newTodo.text) return;

    todos = [...todos, Object.assign({}, newTodo)];
    newTodo.text = "";
    newTodo.id++;
  }

  function removeTodo(id) {
    todos = todos.filter((todo) => todo.id != id);
  }
</script>
