---
qid: ing_91dcd3b8cf__aws__local
question: 'Explain: LinkedIn Data Structure Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:42-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of LinkedIn’s “People You May Know” engine for a 200 M‑user base that was experiencing >30 % latency spikes during peak traffic. The goal: reduce query time to <50 ms while maintaining recommendation quality.

**Action – Design & AWS Services**  
I scoped the problem with *Dive Deep* and *Customer Obsession*: logged real‑time click‑through rates (CTR) for each candidate set. I proposed a two‑tier data model:

1. **Cold‑start layer** – Redis‑Cluster + DynamoDB Global Secondary Indexes to store user feature vectors, giving O(1) lookups for new connections.  
2. **Hot‑path layer** – Amazon Neptune graph database with property graphs for real‑time social proximity queries; we used *Gremlin* to traverse friend‑of‑friend subgraphs within 3 hops.

For recommendation scoring I added a lightweight SageMaker batch transform job that runs every 30 min, updating feature weights in S3 and publishing them to an **Elasticache** cache. This decouples compute from latency.

I implemented *Auto Scaling* on the Neptune cluster and leveraged *Provisioned Concurrency* for Lambda functions orchestrating the pipeline, ensuring high availability (99.99 %) while keeping costs under $12k/month.

**Result**  
Post‑deployment, average query latency dropped to **38 ms** (+30 % improvement). CTR rose from 4.2 % to **5.8 %**, translating to an estimated revenue lift of **$3.6M annually** (based on LinkedIn’s ad model). I documented the failure point in our post‑mortem, learned that sharding by geography reduced cross‑region traffic, and incorporated this insight into the next iteration—exemplifying *Bias for Action* and continuous learning.

> **Bar‑raiser cues:** ownership of both latency and business impact; deep dive into graph vs. key‑value trade‑offs; quantifiable metrics; iterative improvement from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
