---
qid: ing_04974e83fc__aws__local
question: 'Explain: Um, it''s not-- but it''s not as — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 559
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:15-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my time as a Cloud Architect at XYZ Corp, I led the migration of an on‑premises real‑time collaboration platform—very similar in spirit to *Google Wave*—to AWS. The goal was to preserve its “under‑the‑hood” event‑driven sync model while improving reliability and cost.

| **Situation** | Our legacy system used a single monolithic Java service that pushed updates over long‑poll HTTP connections. It struggled with 200 k concurrent users, had 99.7 % availability, and incurred $120K/month in VM costs. |
|---|---|
| **Task** | Redesign the sync engine to be event‑driven, horizontally scalable, and cost‑efficient, while keeping end‑user latency < 150 ms. |
| **Action** | 1️⃣ Decomposed the monolith into microservices: **Auth**, **Presence**, **Sync Engine**, **Audit Log**.  
2️⃣ Employed **Amazon API Gateway** + **AWS Lambda** for stateless request handling (10× cost reduction).  
3️⃣ Built a **Kafka‑compatible event bus** with **Amazon MSK** to propagate user edits; each client subscribed via WebSocket (API Gateway + Lambda).  
4️⃣ Persisted state in **DynamoDB** with per‑user shards, enabling O(log n) reads and writes.  
5️⃣ Added **AWS CloudWatch Alarms** + **Auto Scaling** for the sync workers, guaranteeing 99.99 % availability under bursty traffic. |
| **Result** | *Customer Obsession* & *Ownership*: User satisfaction scores rose from 4.1/5 to 4.7/5 (NPS +30).  
*Bias for Action*: Deployed within 6 weeks, cutting latency from 350 ms to 110 ms.  
*Deliver Results*: Cut monthly ops costs by **65%** ($80K/month) while scaling to 500 k concurrent users with zero downtime. |

**Key Learnings**  
- *Dive Deep*: Profiling the legacy service revealed hidden I/O bottlenecks; moving to event‑driven architecture eliminated them.  
- *Bar‑raiser Insight*: The interviewers focused on my ability to quantify impact, justify trade‑offs (e.g., Lambda cold starts vs. MSK throughput), and demonstrate ownership of post‑launch monitoring.

**Relevant AWS Services**: API Gateway, Lambda, MSK, DynamoDB, CloudWatch, Auto Scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
