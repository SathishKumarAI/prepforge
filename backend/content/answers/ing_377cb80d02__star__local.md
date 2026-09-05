---
qid: ing_377cb80d02__star__local
question: What safety evals and benchmarks should you know, and what are their limitations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:18-05:00'
sources: []
---

**Situation** – In my last role as a machine‑learning engineer at a fintech startup, we were rolling out an AI‑powered credit scoring model to replace our legacy rule‑based system. Regulators demanded that we prove the model was safe, fair, and robust before launch.

**Task** – I had to select and run appropriate safety evaluations and benchmarks: fairness metrics (Equal Opportunity Difference, disparate impact), robustness tests (adversarial perturbations with CleverHans, data shift detection via KS‑test), interpretability checks (SHAP value consistency across folds), and performance under uncertainty (Monte Carlo dropout calibration). I also needed to document limitations of each benchmark so stakeholders understood the risk profile.

**Action** – I built a CI pipeline that automatically ran these tests on every training iteration. For robustness, I generated adversarial examples with Fast Gradient Sign Method and measured accuracy degradation; for fairness, I stratified by protected attributes and plotted ROC curves side‑by‑side. I used ECE (Expected Calibration Error) to assess confidence calibration. After each run, I produced a concise report highlighting where the model failed or succeeded, along with actionable remediation steps.

**Result** – The pipeline caught a 12% drop in accuracy on a minority group before deployment, prompting feature re‑engineering that raised fairness metrics to <2% disparate impact. Overall, we reduced post‑deployment incidents by 40%, and the team adopted the same safety framework for all new models. I learned that no single benchmark guarantees safety; combining multiple perspectives provides a more realistic risk assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
