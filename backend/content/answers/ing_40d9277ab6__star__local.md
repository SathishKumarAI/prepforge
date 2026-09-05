---
qid: ing_40d9277ab6__star__local
question: 'Explain: (upbeat synth music) - Hi, I''m Jeff — AWS re:Invent 2021 - Which
  NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 350
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:15-05:00'
sources: []
---

**Situation:**  
At a fast‑growth fintech startup, we were launching a real‑time fraud detection service that needed to ingest millions of transaction events per day and serve low‑latency queries for risk scoring dashboards.

**Task:**  
I had to pick the right NoSQL database that could handle high write throughput, provide flexible schema for evolving event fields, guarantee 99.999% availability across regions, and keep costs predictable as traffic scaled.

**Action:**  
I began by profiling our workload: 70 % writes, 30 % reads, with a mix of single‑item lookups and secondary index scans. I compared DynamoDB, MongoDB Atlas, and Cassandra. Using the AWS Well‑Architected Tool, I mapped each to the “Performance” and “Operational Excellence” pillars. I ran a cost simulation for 10 M writes/day on DynamoDB’s provisioned capacity vs MongoDB’s on‑prem cluster. The results showed DynamoDB offered lower latency (under 5 ms) and a pay‑per‑request model that avoided overprovisioning. I also tested the built‑in Global Tables feature to ensure cross‑region replication with minimal admin overhead.

**Result:**  
We adopted Amazon DynamoDB, which reduced read/write latency by 40 % and cut our database spend by 25 % compared to a self‑managed cluster. The experience taught me to align database choices tightly with workload patterns, operational constraints, and cost models rather than relying on popularity alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
