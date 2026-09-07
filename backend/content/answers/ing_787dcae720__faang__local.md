---
qid: ing_787dcae720__faang__local
question: 'Explain: Golden-set construction and rotation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 440
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:17-05:00'
sources: []
---

**Clarify**

The interview asks for a high‑level explanation of *Golden‑set construction*, *rotation*, and how they’re used in an **Eval‑Gated CI/CD** pipeline for AI models.  
Assumptions:  
1. “Golden set” refers to a vetted, versioned test data set that anchors model validation.  
2. “Rotation” means cyclically swapping or refreshing the golden set to avoid stale bias.  
3. Eval‑Gate is a step in CI/CD that blocks deployment until evaluation metrics meet thresholds.

**Approach**

1. Define the golden set and its role in reproducibility.  
2. Describe rotation mechanics and triggers (time, data drift, new releases).  
3. Explain how the Eval‑gate ties into CI/CD: lint → train → evaluate → gate → deploy.

**Depth**

- **Golden‑set construction:** Curate a stratified sample covering all classes, edge cases, and real‑world distributions; store in a secure, immutable artifact registry with hash verification.  
- **Rotation strategy:** Use *time‑based* (e.g., quarterly) or *drift‑based* triggers; automatically pull fresh data from production logs, apply the same preprocessing pipeline, re‑validate against performance thresholds before replacing the set.  
- **Eval‑Gated CI/CD:** After each training run, run a standardized evaluation script on the current golden set; if accuracy/precision/recall drop below thresholds or drift metrics exceed limits, the gate fails and triggers rollback or retraining.

**Edge Cases**

- Sudden data distribution shifts causing false negatives.  
- Incomplete coverage of rare classes leading to blind spots.  
- Gate lock‑outs due to flaky evaluation scripts.

**Optimize & Communicate**

Iterate on golden set size (balance between statistical power and compute cost) and rotation cadence based on observed drift velocity. Communicate status via dashboards; log gate outcomes for auditability. This structured pipeline ensures reproducibility, early detection of degradation, and controlled AI model deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
