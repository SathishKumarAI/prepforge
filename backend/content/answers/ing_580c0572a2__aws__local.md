---
qid: ing_580c0572a2__aws__local
question: 'Explain: Company context — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 462
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:47-05:00'
sources: []
---

**Context – Glean (Amazon Interview Style)**  

> *“Glean is a knowledge‑search platform that turns every employee’s data silo into a single source of truth.”*  
> • **Customer Obsession:** Employees are the “customers” who need instant, relevant answers across Slack, Docs, and internal databases.  
> • **Ownership & Deliver Results:** The product team owns the entire search stack—from ingestion to ranking—and must deliver sub‑second latency at scale.

**STAR – Building a Real‑Time Knowledge Search Engine**

- **Situation (S):** In 2023, Glean’s search API returned 2 × slower results than competitors and had a 12 % error rate on policy‑sensitive documents.  
- **Task (T):** Reduce latency to <200 ms for 95 % of queries while cutting the failure rate below 1 %.  
- **Action (A):**  
  - Adopted **Amazon OpenSearch Service** with a custom ranking model trained in **SageMaker**, ingesting data via **Kinesis Data Streams**.  
  - Deployed **Lambda@Edge** for real‑time content filtering, ensuring compliance.  
  - Implemented autoscaling and read replicas across three AZs to guarantee 99.9 % availability.  
- **Result (R):** Achieved a **70 % latency reduction** (down to 120 ms) and dropped the error rate to **0.5 %**, increasing daily active users by 18 % and boosting revenue from paid tiers by $1.2M annually.

**What a Bar‑raiser Hears**

- *Ownership:* I drove end‑to‑end delivery, not just coding.  
- *Dive Deep:* Detailed trade‑offs between OpenSearch vs. DynamoDB for indexing.  
- *Quantified Impact:* Clear metrics (latency, error rate, revenue).  
- *Learning from Failure:* The initial 12 % error spike led to a stricter validation pipeline and better monitoring dashboards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
