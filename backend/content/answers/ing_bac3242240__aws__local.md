---
qid: ing_bac3242240__aws__local
question: 'Explain: Two-Stage Pipeline — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 448
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:57-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our recommendation engine for a global e‑commerce platform that served ~3 M active users daily. The existing single‑stage ranking returned noisy results (precision‑@5 = 0.32) and caused a 12 % drop in conversion during peak holiday traffic.

**Action**  
*Architecture:* Implemented a **two‑stage pipeline**—a fast *candidate generator* using Amazon Kinesis Data Streams + Lambda to score items via a lightweight gradient‑boosted model (≈50 ms per request). The *reranker* ran on an autoscaled ECS cluster with SageMaker endpoints, applying a deep transformer that considered user context and item metadata.  
*Reranking strategies:* 1) **Learn‑to‑Rank** with Lambda‑based pairwise loss; 2) **Contextual Bandit** to adaptively explore new items during high‑traffic periods.  
*Scalability & cost:* The generator handled 200 k QPS at <$0.03/hr, while the reranker auto‑scaled between 10–100 EC2 instances (Spot) costing <$0.50/day on average.  

**Result**  
Precision‑@5 rose to **0.48 (+50 %)**, boosting conversion by **9 %** and revenue by **$1.2M/month** during the holiday season. A/B tests validated the 12 % lift in sales attributed directly to the reranker.

**Reflection**  
Ownership: I championed cross‑team ownership of data pipelines. Dive Deep: Continuous monitoring (CloudWatch + Grafana) revealed latency bottlenecks, prompting iterative model compression. Learned from a failed first attempt where batch inference caused >1 s tail latency—shifted to real‑time Lambda and reduced model size by 35 %.  

*Leadership Principles:* **Customer Obsession** (improved user relevance), **Ownership** (end‑to‑end responsibility), **Dive Deep** (profiling, iterative tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
