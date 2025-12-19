function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

/* ABAS */
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab, .tab-content")
      .forEach((el) => el.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

/* ===== GERAL ===== */
function calcularGeral() {
  const total = Number(valorTotal.value) || 0;

  const dca = total * ((Number(p_dca.value) || 0) / 100);
  const caixa = total * ((Number(p_caixa.value) || 0) / 100);
  const fgcp = total * ((Number(p_fgcp.value) || 0) / 100);

  r_dca.textContent = formatar(dca);
  r_caixa.textContent = formatar(caixa);
  r_fgcp.textContent = formatar(fgcp);

  atualizarDCA(dca);
}

/* ===== SALÁRIO ===== */
function calcularSalario() {
  const total = Number(valorSalario.value) || 0;

  r_sd.textContent = formatar(total * ((Number(p_sd.value) || 0) / 100));
  r_ss.textContent = formatar(total * ((Number(p_ss.value) || 0) / 100));
  r_ssa.textContent = formatar(total * ((Number(p_ssa.value) || 0) / 100));
  r_sl.textContent = formatar(total * ((Number(p_sl.value) || 0) / 100));
}

/* ===== DCA ===== */
function atualizarDCA(valor) {
  r_da.textContent = formatar(valor * ((Number(p_da.value) || 0) / 100));
  r_df.textContent = formatar(valor * ((Number(p_df.value) || 0) / 100));
  r_dc.textContent = formatar(valor * ((Number(p_dc.value) || 0) / 100));
  r_de.textContent = formatar(valor * ((Number(p_de.value) || 0) / 100));
  r_do.textContent = formatar(valor * ((Number(p_do.value) || 0) / 100));
}

/* EVENTOS */
[valorTotal, p_dca, p_caixa, p_fgcp, p_da, p_df, p_dc, p_de, p_do].forEach(
  (el) => el.addEventListener("input", calcularGeral)
);

[valorSalario, p_sd, p_ss, p_ssa, p_sl].forEach((el) =>
  el.addEventListener("input", calcularSalario)
);

/* RESET */
document.getElementById("reset").addEventListener("click", () => {
  valorTotal.value = "";
  valorSalario.value = "";

  [
    r_dca,
    r_caixa,
    r_fgcp,
    r_sd,
    r_ss,
    r_ssa,
    r_sl,
    r_da,
    r_df,
    r_dc,
    r_de,
    r_do,
  ].forEach((el) => (el.textContent = "R$ 0,00"));
});
