export default function FundList({ funds, onUpdate }) {
  return (
    <div className="fund-list">
      {funds.length === 0 ? (
        <p className="fund-empty">Фондов пока нет</p>
      ) : (
        funds.map((f) => (
          <div key={f.id} className="fund-card">
            <div className="fund-card-header">
              <h3 className="fund-title">{f.name}</h3>
              {f.goal > 0 && (
                <span className="fund-goal">Цель: {f.goal} BYN</span>
              )}
            </div>

            <div className="fund-balance">
              Баланс: <strong>{f.balance.toFixed(2)} BYN</strong>
              {f.goal > 0 && (
                <span className="fund-progress">{((f.balance / f.goal) * 100).toFixed(1)}%</span>
              )}
            </div>

            <form
              className="fund-tx-form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const amountInput = form.querySelector('input[name="amount"]');
                const typeSelect = form.querySelector('select[name="type"]');
                const raw = Number(amountInput.value || 0);
                const amount = Math.max(1, Math.floor(raw));
                const type = typeSelect.value;
                const delta = type === 'income' ? amount : -amount;
                onUpdate && onUpdate(f.id, delta);
                form.reset();
              }}
            >
              <input name="amount" type="number" min="1" step="1" placeholder="Сумма" />
              <select name="type" defaultValue="income">
                <option value="income">Пополнить</option>
                <option value="expense">Списать</option>
              </select>
              <button type="submit">Добавить</button>
            </form>
          </div>
        ))
      )}
    </div>
  );
}
