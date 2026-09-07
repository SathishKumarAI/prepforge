---
qid: ing_85d6c92fc9__aws__local
question: 'Explain: Um how much you personalize the search — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 460
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:27-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that redesigned the recommendation engine for a global e‑commerce platform. The goal was to shift from static, rule‑based personalization to real‑time, model‑driven search results, improving conversion by 15 % and reducing cart abandonment.

**Action (Design & Tech)**  
* **Requirements** – Low latency (<50 ms), high cardinality (>10M users), compliance with GDPR.  
* **Architecture** – A multi‑model pipeline on **Amazon SageMaker** for training nightly, **SageMaker Neo** to compile models for edge inference on **AWS Lambda@Edge** (CLOUDFRONT).  Real‑time feature enrichment via **Kinesis Data Streams** feeding a **DynamoDB** cache.  
* **Scalability & Availability** – Auto‑scaling groups behind an ALB, cross‑region replication with DynamoDB Global Tables, and *Multi-AZ RDS Aurora* for transactional data.  
* **Cost** – Spot Instances + Savings Plans reduced compute spend by 30 %. Lambda concurrency limits were fine‑tuned to stay within the free tier while keeping a 99.99 % success rate.

**Result**  
Within three months, personalized search lifted average order value from $78 to $89 (14 % lift) and increased conversion by 18 %, exceeding our target. We also cut data processing time from 12 h to 30 min, freeing engineers for feature work.

**Leadership Principles Reflected**  
* **Customer Obsession** – Delivering a faster, more relevant search directly improved user satisfaction.  
* **Ownership & Dive Deep** – I drove the entire stack redesign, performed root‑cause analysis on latency spikes, and iterated on model accuracy until the KPI threshold was met.

**Bar‑raiser takeaway**  
Showed ownership of end‑to‑end delivery, deep technical trade‑offs (e.g., Lambda@Edge vs. EC2), quantified impact, and a learning loop that turned failures into faster iterations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
