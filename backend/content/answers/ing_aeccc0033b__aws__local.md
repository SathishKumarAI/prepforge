---
qid: ing_aeccc0033b__aws__local
question: 'Explain: Mixture of Agents (MoA) — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 379
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:00:55-05:00'
sources: []
---

**Situation / Task** – While leading a fraud‑detection team at a fintech startup, we hit a plateau: our single‑model accuracy hovered at **92 %**, yet the false‑positive rate spiked during peak trading hours.  
**Action** – I proposed a *Mixture of Agents (MoA)* ensemble: three specialized models—(1) Gradient Boosting on transaction metadata, (2) LSTM on user behavior sequences, and (3) Graph Neural Network on account linkages—each trained independently. We built a lightweight **AWS Lambda** orchestrator that routes incoming events to the agents in parallel, aggregates their logits via a weighted soft‑max, and caches intermediate results in **ElastiCache Redis** for 1 s latency.  
We leveraged **SageMaker Pipelines** for CI/CD, enabling rapid re‑training every 12 hrs on fresh data, and used **CloudWatch metrics** to auto‑scale Lambda concurrency by 2× during market open.  
**Result** – Accuracy rose to **96 %**, false positives dropped from 8 % to 3 %, reducing manual review time by **45 %** (≈$120k/yr). The ensemble cost $0.03 per inference, within our budget.  
**Leadership Principles** – *Customer Obsession* (improved user experience), *Ownership* (architected end‑to‑end pipeline), *Dive Deep* (profiled latency and cost trade‑offs).  

Bar‑raiser focus: clear ownership of the MoA architecture, depth in profiling Lambda/Redis trade‑offs, quantifiable uplift, and lessons from initial false‑positive spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
