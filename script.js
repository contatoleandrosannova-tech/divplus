const $ = (id) => document.getElementById(id);
const PADRAO = {
  valor: "",
  p_dca: 40,
  p_caixa: 25,
  p_fgcp: 10,
  p_salario: 25,
  p_sal_despesas: 60,
  p_sal_re: 15,
  p_sal_saude: 10,
  p_sal_lazer: 15,
  p_dca_int: 20,
  p_dca_acoes: 20,
  p_dca_fiis: 20,
  p_dca_cripto: 15,
  p_dca_etf: 15,
  p_dca_put: 10,
};
const num = (v) =>
  parseFloat((v || "").replace("%", "").replace(",", ".")) || 0;
const moeda = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const pct = (id) => num($(id).value) / 100;
function calc() {
  const V = num($("valor").value);
  const r_dca = V * pct("p_dca"),
    r_caixa = V * pct("p_caixa"),
    r_fgcp = V * pct("p_fgcp"),
    r_sal = V * pct("p_salario");
  $("r_dca").textContent = moeda(r_dca);
  $("r_caixa").textContent = moeda(r_caixa);
  $("r_fgcp").textContent = moeda(r_fgcp);
  $("r_salario").textContent = moeda(r_sal);
  $("pct_total_f1").textContent =
    (
      (pct("p_dca") + pct("p_caixa") + pct("p_fgcp") + pct("p_salario")) *
      100
    ).toFixed(0) + "%";
  $("r_sal_despesas").textContent = moeda(r_sal * pct("p_sal_despesas"));
  $("r_sal_re").textContent = moeda(r_sal * pct("p_sal_re"));
  $("r_sal_saude").textContent = moeda(r_sal * pct("p_sal_saude"));
  $("r_sal_lazer").textContent = moeda(r_sal * pct("p_sal_lazer"));
  $("pct_total_sal").textContent =
    (
      (pct("p_sal_despesas") +
        pct("p_sal_re") +
        pct("p_sal_saude") +
        pct("p_sal_lazer")) *
      100
    ).toFixed(0) + "%";
  $("r_dca_int").textContent = moeda(r_dca * pct("p_dca_int"));
  $("r_dca_acoes").textContent = moeda(r_dca * pct("p_dca_acoes"));
  $("r_dca_fiis").textContent = moeda(r_dca * pct("p_dca_fiis"));
  $("r_dca_cripto").textContent = moeda(r_dca * pct("p_dca_cripto"));
  $("r_dca_etf").textContent = moeda(r_dca * pct("p_dca_etf"));
  $("r_dca_put").textContent = moeda(r_dca * pct("p_dca_put"));
  $("pct_total_dca").textContent =
    (
      (pct("p_dca_int") +
        pct("p_dca_acoes") +
        pct("p_dca_fiis") +
        pct("p_dca_cripto") +
        pct("p_dca_etf") +
        pct("p_dca_put")) *
      100
    ).toFixed(0) + "%";
}
document
  .querySelectorAll("input")
  .forEach((el) => el.addEventListener("input", calc));
document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});
$("reset").onclick = () => {
  Object.keys(PADRAO).forEach((id) => {
    $(id) && ($(id).value = id === "valor" ? "" : PADRAO[id] + "%");
  });
  calc();
};
Object.keys(PADRAO).forEach((id) => {
  $(id) && ($(id).value = id === "valor" ? "" : PADRAO[id] + "%");
});
calc();
