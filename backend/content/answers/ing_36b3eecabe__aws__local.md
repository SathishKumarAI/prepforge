---
qid: ing_36b3eecabe__aws__local
question: 'Explain: 3.1.2 Document Parsing and Graph Construction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 436
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:20-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the migration of our legacy PDF‑to‑knowledge pipeline to a fully serverless solution. The goal was to parse unstructured loan documents and build an entity graph that could be queried by our risk engine, cutting manual review time from 4 hrs per file to under 30 seconds.

**Action (Design & Tech)**  
1. **Parsing** – *Amazon Textract* extracted text + layout; *Comprehend* identified entities (borrower, address, amounts).  
2. **Graph Construction** – A *Step Functions* workflow invoked a *Lambda* that mapped entities to nodes and relationships, then persisted them in *Amazon Neptune* (property graph) for fast traversal.  
3. **Scalability & Cost** – The entire flow is stateless; each document triggers an S3 event → Lambda, so we pay only per invocation (~$0.20/100 000 calls). Neptune’s read replicas support 10k QPS with <1 ms latency.  
4. **Availability** – All services are region‑wide, and the Step Functions state machine retries on transient failures, guaranteeing >99.9% success.

**Result**  
- Throughput increased to 3,000 docs/day (×15).  
- Manual review time dropped from 4 hrs to 30 s, freeing 120 FTE hours/month.  
- Cost fell by 40 % compared to the on‑prem stack.

**Reflection**  
I owned every layer, diving deep into Textract’s OCR confidence scores to fine‑tune entity extraction thresholds—an iterative learning loop that improved precision from 82 % to 94 %. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
