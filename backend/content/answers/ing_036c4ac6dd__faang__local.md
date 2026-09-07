---
qid: ing_036c4ac6dd__faang__local
question: 'Explain: Engineering processes need to be rebuilt for agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 460
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:44-05:00'
sources: []
---

**Clarify**  
The interviewer asks why traditional ML engineering pipelines must evolve when deploying *agents*—systems that perceive, decide, and act in dynamic environments. I’ll assume the agents run online, interact with users or other systems, and must adapt in real‑time.

**Approach**  
1. Identify the core differences: *feedback loops*, *non‑stationarity*, *safety & explainability*.  
2. Map each difference to a process change (e.g., continuous monitoring, automated retraining).  
3. Discuss tooling that supports these changes (MLOps platforms, policy‑based governance).

**Depth**  
- **Feedback Loop**: Agents generate data they act on; we need *online learning* or *offline replay buffers*. Pipelines must ingest and label this stream in near‑real‑time, with versioned datasets.  
- **Non‑stationarity**: Concept drift requires scheduled evaluation against hold‑out streams and adaptive model selection.  
- **Safety & Explainability**: Incorporate policy enforcement (e.g., OpenAI’s safety layers) and audit trails; enforce *counterfactual explanations* for each decision.  
- **Deployment**: Use blue/green or canary releases to mitigate catastrophic failures, coupled with automated rollback triggers.  
Complexity grows from O(n log n) batch ETL to O(1) latency inference + O(k) drift detection per request.

**Edge Cases**  
- Data sparsity for rare actions → use simulated replay or importance sampling.  
- Regulatory constraints (GDPR) on data retention → implement differential privacy in the pipeline.  
- Adversarial inputs → adversarial training and runtime anomaly detection.

**Optimize & Communicate**  
Highlight that rebuilding pipelines is a *continuous* practice: automated metrics dashboards, CI/CD for models, and governance APIs. Explain trade‑offs—higher latency vs. safety guarantees—and how we prioritize based on domain risk. This structured narrative demonstrates problem understanding, technical depth, and practical system design, key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
