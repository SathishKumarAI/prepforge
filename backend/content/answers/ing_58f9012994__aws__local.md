---
qid: ing_58f9012994__aws__local
question: 'Explain: Twitter Search — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 511
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:43-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* I was asked to redesign the “Twitter Search” feature for a client that saw a 30 % drop in engagement during peak traffic (8 k queries/s).  
> *Task:* Deliver a system that scales to 50 k qps, keeps latency <200 ms, and reduces operational cost by 20 %.  
> *Action:*  
> 1. **Requirements & Dive Deep** – Parsed the user journey: search → keyword match → relevance scoring → result list. Identified bottlenecks (Lucene index refresh, hot‑spot shard reads).  
> 2. **Design** –  
>    - **Data layer:** Amazon OpenSearch Service for full‑text indexing; shards auto‑scaling with *index state management* to keep hot shards under 1 GB.  
>    - **Scoring engine:** AWS Lambda (Python) + SageMaker endpoint for a lightweight BERT model, cached top‑10 results in Amazon ElastiCache Redis (partitioned by query prefix).  
>    - **Orchestration:** API Gateway → Step Functions to route search request through OpenSearch, caching layer, and scoring Lambda.  
>    - **Observability:** CloudWatch metrics + X-Ray tracing; automated alerting on latency >200 ms.  
> 3. **Cost & Availability** – Leveraged Spot Instances for SageMaker training, reserved instances for OpenSearch clusters, and multi‑AZ deployments to achieve 99.99 % availability while cutting infra spend by 22 %.  
> *Result:* Within two weeks of rollout, peak latency dropped from 350 ms to 140 ms, search click‑through increased 18 %, and cost savings hit 24 % YoY.

**What a bar‑raiser hears:**  

- **Ownership:** I took end‑to‑end responsibility, even retraining the ML model after an initial false‑positive spike.  
- **Dive Deep:** Detailed shard metrics led to targeted index state changes.  
- **Quantified Impact:** 18 % engagement lift & 24 % cost reduction are clear business outcomes.  
- **Learning from Failure:** Post‑mortem on the first Lambda run revealed cold start latency; I added provisioned concurrency, which reduced mean execution time by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
