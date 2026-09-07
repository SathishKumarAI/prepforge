---
qid: ing_60ef02bab3__aws__local
question: 'Explain: Sort Search Results — Searchquery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 625
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:51-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with adding a “Sort by Relevance” feature for the product search API that served 12 M monthly active users. The existing system returned raw hits from Amazon OpenSearch; customers complained that irrelevant items appeared at the top, hurting conversion.

**Task (T)**  
Implement an ML‑driven ranking model that re‑orders results in real time while keeping latency under 200 ms and cost below $0.02 per query.

**Action (A)**  
1. **Data & Feature Engineering** – Pulled click‑through logs from S3, enriched with product metadata in DynamoDB, and created feature vectors (price, rating, recency).  
2. **Model Training** – Used SageMaker’s built‑in XGBoost to train a Lambda Rank model on 10 M training examples; performed hyper‑parameter tuning via SageMaker Experiments.  
3. **Deployment & Inference** – Deployed the model as a SageMaker Endpoint with *Multi‑Model* containers for zero‑downtime updates. Wrapped the endpoint in an AWS Lambda function that receives OpenSearch hits, scores each item, and returns a sorted list.  
4. **Scalability & Cost** – Leveraged Lambda’s burst concurrency to handle spikes; set the endpoint to use on‑demand instances (c5.large) with auto‑scaling based on CloudWatch metrics. Estimated cost: $0.015/query → ~$180k/month, a 30 % reduction from the previous manual ranking engine.  
5. **Monitoring** – Implemented CloudWatch dashboards for latency and accuracy (NDCG@10), and automated retraining every 24 h using SageMaker Pipelines.

**Result (R)**  
Within two weeks of launch, NDCG@10 improved from 0.62 to 0.78, translating into a **12 % lift in conversion** (+$3.5M ARR) and a **15 % drop in support tickets** for search relevance.  

---

### Leadership Principles

- **Customer Obsession** – Built the feature directly around user‑reported pain points, validating with A/B tests.  
- **Ownership** – Handled end‑to‑end pipeline (data prep → model training → deployment) and maintained 99.9 % uptime.

### What a Bar‑raiser Hears

- Clear ownership of the entire ML lifecycle.  
- Quantified impact (conversion lift, cost savings).  
- Deep dive into trade‑offs: chosen SageMaker for rapid prototyping vs. custom inference; Lambda for low‑latency scaling.  
- Demonstrated learning from an earlier failed attempt that used a static rule‑based sorter—pivoted to data‑driven ranking and documented the shift in our post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
