
import React, { useState } from 'react';

const TodoItem = ({ task, completed, dueDate, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setEditedDueDate(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={editedTask} onChange={handleChange} />
          <input
            type="date"
            value={editedDueDate}
            onChange={handleDueDateChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </span>
          <span> | Due Date: {dueDate}</span>
          <button onClick={onToggle}>{completed ? 'Undo' : 'Complete'}</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;

