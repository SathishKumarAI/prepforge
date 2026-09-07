---
qid: ing_23eb5f9c6c__faang__local
question: 'Explain: F7: Judge model deprecation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 513
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:07:46-05:00'
sources: []
---

**Clarify**  
You’re asking about *F7: Judge Model Deprecation – Eval‑Gated CI/CD*.  
We need to confirm that the focus is on (1) detecting when a deployed ML model becomes stale or unsafe, and (2) automatically blocking new deployments until evaluation passes.  

Assumptions:  
- Models are versioned in a registry.  
- A continuous integration/continuous deployment pipeline exists for model serving.  
- There’s an “eval‑gate” that runs metrics tests before promotion.

**Approach**  
1. **Metric collection** – track drift, accuracy, latency, and bias on a per‑model basis.  
2. **Threshold engine** – define business‑critical limits (e.g., 5 % drop in F1).  
3. **Gate enforcement** – CI/CD pipeline queries the registry; if any metric breaches a threshold, the build is marked *degraded* and cannot be promoted.  
4. **Remediation workflow** – alert data scientists, trigger rollback or retraining automatically.

**Depth**  
- Use a feature‑store to stream real‑time predictions and ground truth for online evaluation.  
- Compute metrics in micro‑batch jobs (e.g., every 30 min) and store them in a time‑series DB.  
- The gate is implemented as a lightweight HTTP service that the CI job calls; if it returns *FAIL*, the pipeline aborts with an informative message.  
- Complexity: O(1) per metric check; overall latency added to deployment ≈ 200 ms, negligible compared to model inference.

**Edge Cases**  
- Data sparsity (few samples in a window) → use confidence intervals or fallback to historical averages.  
- Sudden spikes due to seasonality – implement smoothing or seasonal decomposition before flagging.  
- Distributed training errors may cause false positives; include a manual override with audit trail.

**Optimize & Communicate**  
- Cache recent metric summaries to avoid repeated DB hits.  
- Expose the gate as an API so other services (e.g., feature‑store, monitoring) can query status in real time.  
- Document thresholds and rollback policies in README for transparency.  

This structured design satisfies FAANG interviewers: clear problem restatement, logical plan, technical depth with complexity, edge‑case awareness, and communication of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
