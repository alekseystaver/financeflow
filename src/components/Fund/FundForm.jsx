import React, { useState } from 'react'

const FundForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name, Number(goal));
        setName("");
        setGoal("");
    };

  return (
    <form onSubmit={handleSubmit} className="fund-form">
      <input
        type="text"
        placeholder="Название фонда (например, Море)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Цель (необязательно)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button type="submit">Добавить фонд</button>
    </form>
  )
}

export default FundForm
