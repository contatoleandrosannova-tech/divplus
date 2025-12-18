const $ = (id) => document.getElementById(id);
const moeda = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function soma(ids) {
  return ids.reduce((t, i) => t + (+$(i).value || 0), 0);
}

function calc() {
  const total = +$("valorTotal").value || 0;

  const dca = (total * $("p_dca").value) / 100;
  const salario = (total * $("p_salario").value) / 100;

  $("r_dca").textContent = moeda(dca);
  $("r_caixa").textContent = moeda((total * $("p_caixa").value) / 100);
  $("r_fgcp").textContent = moeda((total * $("p_fgcp").value) / 100);
  $("r_salario").textContent = moeda(salario);

  $("r_sd").textContent = moeda((salario * $("p_sd").value) / 100);
  $("r_ss").textContent = moeda((salario * $("p_ss").value) / 100);
  $("r_ssa").textContent = moeda((salario * $("p_ssa").value) / 100);
  $("r_sl").textContent = moeda((salario * $("p_sl").value) / 100);

  $("r_da").textContent = moeda((dca * $("p_da").value) / 100);
  $("r_df").textContent = moeda((dca * $("p_df").value) / 100);
  $("r_dc").textContent = moeda((dca * $("p_dc").value) / 100);
  $("r_de").textContent = moeda((dca * $("p_de").value) / 100);
  $("r_do").textContent = moeda((dca * $("p_do").value) / 100);

  $("total_geral").textContent =
    "Total: " + soma(["p_dca", "p_caixa", "p_fgcp", "p_salario"]) + "%";
  $("total_salario").textContent =
    "Total: " + soma(["p_sd", "p_ss", "p_ssa", "p_sl"]) + "%";
  $("total_dca").textContent =
    "Total: " + soma(["p_da", "p_df", "p_dc", "p_de", "p_do"]) + "%";
}

document
  .querySelectorAll("input")
  .forEach((i) => i.addEventListener("input", calc));

document.getElementById("reset").onclick = () => location.reload();

/* ABAS */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.onclick = () => {
    document
      .querySelectorAll(".tab,.tab-content")
      .forEach((e) => e.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

calc();
