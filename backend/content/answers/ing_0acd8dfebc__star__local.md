---
qid: ing_0acd8dfebc__star__local
question: 'Explain: 1.1. Requirements Notation and Conventions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 436
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:26-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a fraud‑detection pilot for a mid‑size fintech client. The data science team had built several models, but the product owner kept pushing “improve accuracy” without any concrete metrics or acceptance criteria, so our devs were guessing what to ship.

**Task** – My job was to formalise the ML requirements using a standard notation so that every stakeholder—data scientists, engineers, and compliance officers—could see exactly what the models needed to deliver. I had to capture data sources, feature constraints, performance thresholds, explainability rules, and regulatory audit trails in one living document.

**Action** – I introduced an extended UML use‑case diagram coupled with a lightweight domain‑specific language (DSL) for ML requirements. Each model was represented as a “Use‑Case Actor” that consumed a data stream; the DSL annotated inputs (e.g., “score must be derived from 10 features, each ≤ 1 M rows”), outputs (e.g., “F1 ≥ 0.78, ROC‑AUC ≥ 0.92”), and constraints (e.g., “latency < 200 ms”, “explainability via SHAP values”). I held a workshop to map legacy feature names to the DSL terms, then used automated scripts to validate that any new model complied with the notation before it entered CI/CD.

**Result** – The shared notation cut the time from requirement gathering to production deployment by 35 %. We shipped three models in two weeks instead of six months. Accuracy met all thresholds (F1 = 0.81, ROC‑AUC = 0.94), and audit logs were automatically generated from the DSL annotations. I learned that a clear, machine‑readable requirements format turns vague “improvements” into measurable deliverables, keeping everyone aligned and speeding up iterative ML development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
