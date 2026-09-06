---
qid: ing_f51f2ce9c1__fp__local
question: 'Explain: Q98: A customer wants to reduce their $50K/month frontier-model
  spend by distilling a custom model for their workload. Quote a distillation project
  as a budgeted line item - costs, payback, re-distillation cadence.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 529
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:40:33-05:00'
sources: []
---

**Distillation Project – Budgeted Line Item**

| Item | Cost (USD) | Pay‑back | Re‑distillation Cadence |
|------|------------|----------|------------------------|
| 1️⃣ **Model selection & data prep** | $12 k | – | – |
| 2️⃣ **Fine‑tuning & validation** | $18 k | – | – |
| 3️⃣ **Hardware (GPU hours)** | $8 k | – | – |
| 4️⃣ **Monitoring & drift detection** | $5 k | – | – |
| **Total upfront** | **$43 k** | – | – |

*Projected savings*: 50 % of the current frontier‑model spend → **$25 k/month**.  
*Payback*: ≈ **1–2 months** (monthly saving / total cost).  

### Why this works

The customer’s workload is *stable but large*. A distilled model reduces inference FLOPs by 4×–10× while preserving ≥95 % accuracy, because the teacher’s soft labels encode inter‑class relationships that hard labels miss. The distillation objective  
\[
L = \alpha\,H(y,\hat y_{\text{student}}) + (1-\alpha)\,T^2\,KL(\sigma_T(z_{\text{teacher}}),\sigma_T(z_{\text{student}}))
\]
balances task loss and knowledge transfer; the temperature \(T\) is tuned to match the teacher’s confidence distribution, ensuring the student learns the *geometry* of the decision boundary rather than just the labels.

### Non‑obvious insight

**Drift detection is cheaper than re‑distillation.** If you monitor calibration (e.g., Expected Calibration Error) and trigger a lightweight fine‑tune only when drift exceeds 5 %, you avoid full re‑distill cycles, saving ~30 % on hardware costs. Re‑distillation cadence should therefore be **trigger‑based**, not time‑based: e.g., once per quarter *or* when validation accuracy drops below 93 %.  

By treating distillation as an optimization problem that preserves the teacher’s information geometry while cutting compute, the customer recoups their investment in a month and keeps future maintenance lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
