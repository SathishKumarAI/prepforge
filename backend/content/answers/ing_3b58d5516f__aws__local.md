---
qid: ing_3b58d5516f__aws__local
question: 'Explain: Flat Index (Brute Force) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:25-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a prototype for an AI‑powered recommendation engine that needed to serve millions of users with sub‑second similarity queries. The team debated whether to adopt a specialized vector DB or a simple “flat index” (brute force) approach.

**Action**  
I **owned** the decision, diving deep into the trade‑offs. I benchmarked flat‑index search against an open‑source ANN library and AWS Managed Service for OpenSearch with KNN plugin. Using **SageMaker Ground Truth**, I labeled 1 M vectors (10 k dimensions) and measured latency, accuracy (Recall@10), and cost.

- **Flat index**: linear scan in ~150 ms, 99% recall, but required a 5 TB EBS volume → $12k/month.  
- **OpenSearch KNN**: 15 ms query, 98% recall, 2 TB storage → $4k/month.

I mapped the workload to **Amazon OpenSearch Service** (for elastic scaling), **S3** for immutable training data, and **Lambda** for on‑demand indexing. The design ensured high availability (multi‑AZ) and cost control via spot instances for batch re‑indexing.

**Result**  
We deployed the KNN solution; query latency dropped 90%, user engagement rose 12% within two weeks, and we saved ~$8k/month. Post‑launch, I instituted a quarterly “search health” review to catch regressions early.

> **Leadership Principles**: *Ownership*, *Dive Deep*, *Bias for Action*  
> **Bar‑raiser cues**: quantified impact (latency & cost), depth of analysis, and continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
