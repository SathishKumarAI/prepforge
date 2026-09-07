---
qid: ing_7db8e80f2b__aws__local
question: 'Explain: Endpoint: GET /search — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 466
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:45-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the ML‑Ops team at a music streaming start‑up, I was asked to expose a **GET /search** endpoint that could serve 5 M concurrent users per day while returning results in <200 ms. The goal was to replace an ad‑hoc ElasticSearch cluster with a scalable, cost‑effective architecture.

**Action (A)**  
I scoped the problem by mapping user intent (artist, track, playlist) and quantifying data growth: 2 TB of metadata per month. I proposed a **serverless microservice** on **AWS Lambda** behind an **API Gateway**, backed by a **DynamoDB global table** for fast key‑value lookups and a **Redshift Spectrum** layer for complex analytics queries. For full‑text search, I integrated **Amazon OpenSearch Service** with index sharding across 10 nodes, auto‑scaling on CPU/latency metrics. To reduce cold‑start latency, I kept the Lambda function warm via scheduled “ping” events.

I added a **cache layer** (ElastiCache Redis) for popular queries, reducing Opensearch traffic by ~35 %. Security was enforced with Cognito JWT validation and IAM roles scoped to least privilege. CI/CD pipelines (CodePipeline + CloudFormation) ensured zero‑downtime deployments.

**Result (R)**  
Within three months the endpoint handled 6.2 M daily hits with an average latency of 145 ms, a 27 % cost reduction versus the legacy cluster, and a 4× increase in query throughput. Post‑mortem analysis revealed that earlier reliance on monolithic APIs caused bottlenecks; switching to stateless Lambdas improved resilience.

**Learning & Bar‑raiser cues**  
I demonstrated **Ownership** by redefining architecture from scratch, **Dive Deep** through performance profiling, and **Bias for Action** by delivering a production‑ready system in 8 weeks. The metrics above satisfy the bar‑raiser’s focus on measurable impact and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
