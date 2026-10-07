export default function NotFound() {
  return (
    <div className="empty card">
      <span aria-hidden="true">🫖</span>
      <h1>Não achamos essa página</h1>
      <p className="muted">Acontece. O link pode estar errado ou a receita saiu do cardápio. Vamos voltar para um lugar seguro?</p>
      <a className="btn btn--primary" href="#/receitas">Ver receitas</a>
    </div>
  );
}
