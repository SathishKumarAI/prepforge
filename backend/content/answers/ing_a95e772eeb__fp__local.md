---
qid: ing_a95e772eeb__fp__local
question: Why ML + Rules, Not Just ML? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 434
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:32-05:00'
sources: []
---

### Why “ML + Rules” beats pure ML for fraud detection

Fraud is a *moving target*: attackers constantly craft new schemes to slip through automated nets.  
A purely data‑driven model learns a statistical pattern \(p(y|x)\) from historical transactions, but that distribution can shift dramatically when an adversary introduces a novel tactic. The model’s confidence is then misplaced; its loss surface no longer reflects reality.

**Rules encode invariants—hard constraints derived from domain knowledge (e.g., “no account may be used in two cities 10 min apart”).**  
These constraints are *distribution‑agnostic*: they hold regardless of how the data changes. When combined with a probabilistic ML component, we obtain a hybrid objective

\[
\mathcal{L} = \underbrace{\text{ML loss}}_{\text{captures typical fraud patterns}}
+ \lambda\,\mathbf{1}\!\left(\text{rule violation}\right),
\]

where the penalty term forces any prediction violating a rule to be rejected or heavily down‑weighted. This yields:

* **Robustness** – the model cannot exploit new, unseen patterns that break a rule without incurring an explicit cost.
* **Interpretability** – auditors can trace flagged transactions back to a concrete rule violation, satisfying regulatory audit trails.
* **Efficiency** – rules filter out obvious non‑frauds early, reducing the volume of data fed into expensive ML inference.

A non‑obvious insight: *the penalty weight \(\lambda\) should be tuned not only on past error rates but also on the expected frequency of rule violations under an adversarial attack.* By anticipating how attackers might try to “game” the system (e.g., by generating data that satisfies all rules), we can set \(\lambda\) high enough to deter such manipulation while still letting ML capture subtle, legitimate fraud signals. This blend of statistical learning and hard constraints is why most production fraud systems abandon pure ML in favor of a principled hybrid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
