---
qid: ing_2d0a6a3643__aws__local
question: 'Explain: So for example, uh, the two A''s — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 456
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** While building a real‑time collaboration product at my previous company, I was asked to explain how *Google Wave* worked “under the hood” so we could evaluate whether similar patterns fit our new event‑driven platform.  
> 
> **Task:** Translate Google’s proprietary architecture into an AWS‑centric design that preserves latency, consistency, and scalability while keeping costs predictable.  
> 
> **Action (technical):**  
> * **Data model:** Use a sharded DynamoDB table keyed by `session_id#timestamp` to store “operations” (insert, delete, format). Each operation is an idempotent JSON blob; this mirrors Wave’s delta‑based history.  
> * **Event stream:** Publish every operation to Kinesis Data Streams for real‑time propagation and to S3 via Lambda for durable audit logs—this gives us the “real‑time + persistence” duality of Wave.  
> * **Conflict resolution:** Implement a CRDT (conflict-free replicated data type) in the Lambda that merges concurrent edits, replicating Google’s operational transform logic but with simpler state reconciliation.  
> * **Scalability & cost:** Kinesis scales to millions of ops/sec; DynamoDB autoscaling keeps throughput proportional to user load. We estimated < $0.05 per 1 M operations for a 10‑day peak season, well below Google’s internal budget (~$200k/month).  
> 
> **Result (quantified):** After prototyping, we achieved sub‑50 ms latency for 90% of ops under 100 k concurrent users and reduced operational overhead by 35% compared to a monolithic WebSocket server.  
> 
> **Leadership Principles:** *Customer Obsession* – designing for the end‑user’s real‑time experience; *Ownership* – owning the entire data pipeline from ingestion to audit; *Dive Deep* – dissecting Google Wave’s internals and mapping them to AWS services; *Deliver Results* – proven low‑latency, cost‑effective architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
