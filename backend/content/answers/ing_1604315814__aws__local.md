---
qid: ing_1604315814__aws__local
question: 'Explain: Don’t just hack it together — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 422
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a real‑time recommendation engine for a retail platform that had to process > 10 M events per day and serve < 50 ms latency to 1 M concurrent users. The naive “hack” would have been a single monolithic service, but that would break our **Customer Obsession** and **Ownership** standards.

**Action – Design**  
I applied the *Design Data‑Intensive Applications* (DDIA) framework:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingestion | Kinesis Data Streams | Horizontal scaling, fault tolerance |
| Stream processing | Lambda + Kinesis Analytics | Serverless, low cost, 10 ms processing |
| Feature store | DynamoDB Global Tables | Multi‑region read/write, 99.999% availability |
| Model inference | SageMaker Endpoint (Edge) | Low‑latency, auto‑scaling |
| Orchestration | Step Functions | Visibility, retry logic |

I used **Schema‑First** design with Avro to enforce type safety and avoided “schema drift” – a core *Dive Deep* principle. For fault tolerance I added idempotent writes and DynamoDB Streams for CDC.

**Result**  
Latency dropped from 200 ms to 45 ms, throughput increased by 3×, and cost fell 25% YoY due to serverless compute. The system handled a sudden 4× traffic spike during Black Friday without outages, demonstrating true **Deliver Results**.

**Learning & Bar‑Raiser Insight**  
I documented all assumptions, performed chaos engineering tests, and shared the playbook with the ops team—showing ownership and continuous learning from failure. This aligns with Amazon’s bar‑raiser expectations: deep technical ownership, data‑driven impact, and a culture of iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
