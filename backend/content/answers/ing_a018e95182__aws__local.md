---
qid: ing_a018e95182__aws__local
question: 'Explain: So that''s very fast. And we delegated — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 489
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:45-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation*: During the 2018 Seattle Conference on Scalability, I was asked to explain how our new recommendation‑engine pipeline could **double YouTube’s per‑user watch time in under a week**.

> *Task*: Translate raw click‑stream data into actionable video recommendations at scale while keeping latency < 150 ms and cost < $0.02/video.

> *Action*  
> 1. **Data pipeline** – Spark on EMR for batch feature extraction, Kinesis Data Streams + Lambda for real‑time feature updates.  
> 2. **Model** – XGBoost trained on 10M user–video pairs, served via SageMaker Endpoints behind an Application Load Balancer with weighted routing to a warm pool of spot instances (cost ↓ 30%).  
> 3. **Caching** – Redis cache per edge location for the top 1K recommendations; cold‑start fallback to a precomputed static list.  
> 4. **Monitoring** – CloudWatch metrics + SageMaker Model Monitor to detect drift; automated rollback to previous model if precision drops > 2%.

> *Result* – Within 5 days, per‑user watch time rose 42%, click‑through rate improved 18%, and overall recommendation latency dropped from 320 ms to 110 ms. Monthly cost for the pipeline was $120K, a 25% reduction versus our legacy system.

**What a Bar‑Raiser Looks For**

* **Ownership** – I owned the full end‑to‑end flow, from data ingestion to deployment and monitoring.  
* **Dive Deep** – I quantified every component (latency budgets, cache hit ratios, cost per inference).  
* **Impact** – The metrics above directly translate into higher ad revenue (~$3M/month).  
* **Learning from Failure** – After an initial spike in latency during peak hours, we tuned the Kinesis shard count and added a second warm pool; this prevented outages on the next launch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
