---
qid: ing_903239e8c0__faang__local
question: 'Explain: Defense-in-Depth Architecture — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:34-05:00'
sources: []
---

**Defense‑in‑Depth Architecture – Safety & Governance (AI)**  
*(FAANG interview style, 170 words)*  

| Step | What I’ll do |
|------|--------------|
| **Clarify** | We’re asked to explain how a layered “defense‑in‑depth” strategy protects AI systems. Assume we’re dealing with enterprise‑grade models (LLMs, vision pipelines) that must meet privacy, fairness, and compliance requirements. |
| **Approach** | 1️⃣ *Data layer*: sanitise & label training data; 2️⃣ *Model layer*: use robust architectures + adversarial training; 3️⃣ *Runtime layer*: monitor predictions & drift; 4️⃣ *Governance layer*: audit trails, access control, policy engines. |
| **Depth** | • **Data**: automated provenance checks, differential privacy guarantees (ε‑DP). <br>• **Model**: weight regularisation + ensembling to mitigate overfitting; use explainability tools (SHAP) for bias detection.<br>• **Runtime**: real‑time anomaly detectors, rate limiting, and sandboxed inference. <br>• **Governance**: immutable audit logs, role‑based access, policy‑as‑code (e.g., Open Policy Agent). Complexity is O(n log n) for data vetting, linear for runtime monitoring; trade‑offs involve latency vs safety. |
| **Edge Cases** | • Data poisoning attacks that bypass sanitisation → add adversarial example detection.<br>• Model drift after deployment → schedule periodic re‑training and concept‑drift alerts.<br>• Policy updates lagging behind regulations → continuous compliance pipelines. |
| **Optimize & Communicate** | Use a micro‑service architecture to isolate layers, enabling independent scaling and rollback. Narrate the flow: “Data enters the pipeline, passes through vetting; the vetted data trains a regularised model; the model is wrapped in a sandbox with runtime guards; all actions are logged and checked against policy.” This shows clear separation of concerns, measurable KPIs (latency, false‑positive rate), and a path to auditability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
