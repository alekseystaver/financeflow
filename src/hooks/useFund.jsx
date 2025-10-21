import React, { useEffect, useState } from 'react'

const useFund = () => {
    const [funds, setFunds] = useState(() => {
        const saved = localStorage.getItem("funds");
        return saved ? JSON.parse(saved) : [];
    })
    useEffect(() => {
    localStorage.setItem("funds", JSON.stringify(funds));
    }, [funds]);

    const addFund = (name, goal = 0) => {
        const newFund = { id: Date.now(), name, balance: 0, goal};
        setFunds((prev) => [...prev, newFund]);
    }

    const updateFund = (id, delta ) => {
        setFunds((prev) =>
            prev.map((f) => (f.id === id ? { ...f, balance: f.balance + delta } : f))
        );
    }

    const allocateIncome = (amount, allocations) => {
        setFunds((prev) =>
        prev.map((f) => {
            const found = allocations.find((a) => a.id === f.id);
            if (found) {
            const add = (amount * found.percent) / 100;
            return { ...f, balance: f.balance + add };
            }
            return f;
        })
        );
    };

  return { funds, addFund, updateFund, allocateIncome };
}

export default useFund
