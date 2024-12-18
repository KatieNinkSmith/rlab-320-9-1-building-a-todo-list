# React + Vite

Requirements
After reading through the requirements below, it is recommended you start with a mockup and follow the steps described in "Thinking in React" to complete your application. Remember, stay organized!

Your todo list application must have:

A heading labeling it as a "todo list."
A list of "todo" items, which are strings listing activities to be accomplished (e.g. "find that missing sock"). Each "todo" item should have:

A checkbox next to it which indicates whether it is "complete."
A "delete" button next to it which removes it from the list.

The "delete" button should be disabled unless the todo is complete!
An "edit" button that replaces the todo string with a text input used to edit the todo.

Hint: bind the value of this text input to a piece of state so that it is always accurate, even when first displayed!
When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save" button should appear. The "save" button should save any changes made to the todo within the text input.
An input element that creates new todo items and adds them to the list.
New todos should be added to the top of the list visually; the oldest todos should be at the bottom.
Here is a simple example of what your application might look like upon completion:

You can use this as a mockup if you would like, or design your own. We encourage you to be a bit more ambitious with your layout and styling, but functionality comes first.

As an additional piece of starting information, below is an example of what your todo list data could look like. It does not need to conform to this structure if you would like to format it differently, but this is a good starting point.

This data is taken from the JSONPlaceholder API, which includes a /todos resource. As an additional stretch goal, try fetching your initial state data from this API (if you've finished all of your other requirements and given your application a good bit of style!).

While you could also update the API to match your local state or use the API to work with an external "server state," this goes far beyond the scope of what we've covered so far, and will be discussed in detail during later lessons. There are many powerful tools that aid in these tasks.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# rlab-320-9-1-building-a-todo-list
