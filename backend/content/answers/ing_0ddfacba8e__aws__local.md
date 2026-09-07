---
qid: ing_0ddfacba8e__aws__local
question: 'Explain: And so with that, hopefully you get — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 478
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:00-05:00'
sources: []
---

**Situation / Task**  
I was the lead of a cross‑functional team tasked with migrating an on‑prem data lake to AWS for a fintech client that needed real‑time fraud detection. The core requirement was to store millions of events per second, support ad‑hoc queries for analysts, and provide low‑latency reads for the ML inference service.

**Action (Design)**  
I evaluated DynamoDB, Amazon Aurora Serverless with PostgreSQL JSONB, and Amazon DocumentDB (MongoDB compatible).  
* **DynamoDB** – NoSQL key/value with auto‑scaling, 1 µs read latency, built‑in TTL.  
* **Aurora Serverless** – Relational with ACID guarantees, but higher cold‑start costs and slower reads for unstructured JSON.  
* **DocumentDB** – MongoDB API compatibility, but throughput throttling at high scale.

I chose **DynamoDB** because it matched our event ingestion rate (≈ 2 M ops/sec) and the query patterns (partition key = user_id + timestamp). I enabled **Global Tables** for multi‑region availability, used **Streams** to trigger a Lambda that pushes data into an S3 lake for batch ML training, and applied **DAX** for caching hot keys.  

**Result**  
- Latency dropped from 200 ms (on‑prem) to < 5 ms read.  
- Throughput scaled to 10× without provisioning changes.  
- Cost reduced by 35% YoY versus the legacy solution.  

**Leadership Principles Highlighted**  
* **Ownership** – I took full responsibility for the migration architecture and drove it from concept to production.  
* **Dive Deep** – Conducted a micro‑benchmark of each service, analyzed cost models, and quantified trade‑offs.  
* **Deliver Results** – Achieved measurable performance gains and cost savings while meeting SLA requirements.

**Bar‑raiser takeaway**  
The interviewers will look for evidence that you own the problem, dig into metrics, choose the right AWS service, and quantify impact. Show how you learn from a failed pilot (e.g., initial Aurora attempt) and pivot to the optimal solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
