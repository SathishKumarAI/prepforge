---
qid: ing_d937f95932__aws__local
question: 'Explain: Scaling Depends on the Layer — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 353
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:08-05:00'
sources: []
---

**Situation & Task**  
When launching a recommendation engine for our e‑commerce platform, we had to decide how to scale the ML pipeline from 10 k requests/day to 5 M+ without sacrificing latency (<200 ms).  

**Action – Vertical vs Horizontal**  
I led a cross‑functional sprint and mapped each layer (data ingestion, feature store, model inference) to its scaling profile.  
* **Vertical scaling** was optimal for the *feature store*—a Redis cluster that benefits from larger memory per node; we moved from 4 GiB to 64 GiB nodes, cutting cache miss rates from 18 % to <2 %.  
* **Horizontal scaling** was mandatory for the *inference tier*. Using Amazon SageMaker endpoints behind an Application Load Balancer, we auto‑scaled 20 containers per node. This reduced average CPU utilization from 85 % to ~45 %, keeping latency below 150 ms even during flash sales (spikes of 200×).  

**Result**  
The combined strategy delivered a 4× throughput increase at <30 % cost growth, and we maintained SLA compliance during the Black Friday campaign.  

**Learning & Ownership**  
I built a “scaling playbook” that now guides new ML services—capturing assumptions, trade‑offs (e.g., memory vs. I/O), and automated health checks. This demonstrates ownership, deep dive into metrics, and bias for action—all core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
