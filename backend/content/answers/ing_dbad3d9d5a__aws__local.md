---
qid: ing_dbad3d9d5a__aws__local
question: 'Explain: Beyond Prediction: Solving the Multiple Knapsack Problem at Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:18-05:00'
sources: []
---

**Situation** – While leading a data‑science team for a global e‑commerce platform, we needed to optimize ad placement budgets across thousands of campaigns. The classic “knapsack” model (maximizing ROI under budget limits) was insufficient because each campaign had multiple bid‑levels and constraints that made it a *Multiple Knapsack Problem* (MKP).  

**Task** – Deliver an end‑to‑end, scalable solution that could run daily for 10 k campaigns, return a near‑optimal allocation in <5 min, and be auditable by finance.  

**Action** –  
1. **Modeling**: Formulated MKP as an Integer Linear Program (ILP) with binary variables per bid level.  
2. **Infrastructure**: Deployed the ILP solver (Google OR‑Tools) inside a Docker container on AWS Fargate, orchestrated by Amazon ECS to auto‑scale based on queue depth.  
3. **Data pipeline**: Ingested campaign data via Kinesis Data Streams → Lambda → DynamoDB for real‑time state; results persisted in S3 and visualized with QuickSight.  
4. **Cost & availability**: Spot instances (30 % savings) + reserved capacity for critical runs; health checks + retries ensured 99.9 % uptime.  

**Result** – Reduced manual allocation effort by 95 %, increased ad‑ROI by 12 pp, and cut daily spend waste from $1.2M to $0.8M (≈33 % cost saving).  

*Leadership Principles*: **Customer Obsession** (improved ROI for advertisers), **Ownership** (built a fully automated, auditable pipeline), **Dive Deep** (ILP formulation & AWS cost tuning).  
Bar‑raiser notes: ownership of end‑to‑end system, depth in algorithmic choice, quantified impact, and post‑deployment A/B testing to learn from any suboptimal runs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
