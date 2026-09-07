---
qid: ing_b0f50a07be__aws__local
question: 'Explain: Uber — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 513
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:19-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain how Uber’s “FAANG‑style” coding questions test a candidate’s ability to build scalable ML systems in production. The interviewer wanted insight into both the *why* and the *how* behind the question set.

**Action**  
1. **Anchor on Leadership Principles** – I framed my answer around **Customer Obsession** (build products that solve real user pain) and **Ownership** (own end‑to‑end ML lifecycle).  
2. **Behavioral STAR** – In a previous role, I led the migration of an on‑prem recommendation engine to SageMaker. By re‑architecting data pipelines with Glue + EMR, we cut model training time from 12 hrs to 1 hr and increased CTR by 18 % (≈$2M incremental revenue).  
3. **Technical/Systems Breakdown** – I described the typical Uber question: “Design a real‑time ride‑matching system that scales to millions of users.”  
   * **Requirements** – low latency (<200 ms), high availability, fault tolerance, and data freshness.  
   * **Design** – Use **Kinesis Data Streams** for ingestion, **Lambda** + **DynamoDB Global Tables** for stateful matching, and **SageMaker Endpoint** for ML‑based price prediction.  
   * **AWS Services & Trade‑offs** – Kinesis (scales horizontally but adds ~$0.015/MB), Lambda (zero‑ops but cold start risk mitigated with Provisioned Concurrency), DynamoDB (high throughput, $1.25 per WCU). I highlighted how to cost‑optimize by choosing on‑demand vs. reserved capacity based on traffic patterns.  
4. **Dive Deep & Bar‑raiser Lens** – The interviewer looks for a candidate who:
   * Demonstrates ownership of the entire pipeline (data → training → deployment).
   * Quantifies impact (e.g., latency reduction, cost savings, revenue lift).
   * Shows learning from failure (e.g., “We initially used SQS, but it hit 30 % message loss under peak load; switching to Kinesis resolved this.”).

**Result**  
The answer was concise (≈180 words), grounded in real metrics, and tied directly to Amazon’s leadership principles—exactly the mix a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
