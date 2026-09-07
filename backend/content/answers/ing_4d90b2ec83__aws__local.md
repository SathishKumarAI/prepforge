---
qid: ing_4d90b2ec83__aws__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 567
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:50-05:00'
sources: []
---

**Situation (S)**  
I was asked to redesign a real‑time analytics pipeline for an ad‑tech startup that needed to ingest click streams from browsers and mobile apps while keeping latency under 50 ms. The existing solution used UDP sockets, which caused packet loss and data corruption when traffic spiked.

**Task (T)**  
Show the trade‑offs between TCP and UDP for web/API ingestion, propose a robust architecture on AWS, and demonstrate how to meet SLAs with minimal cost.

**Action (A)**  

1. **Requirements & Dive Deep** – I mapped out *throughput* (≈ 5 M events/s), *latency*, *data integrity*, and *fault tolerance*.  
2. **Design** –  
   - Use **Amazon API Gateway + Lambda** for HTTP endpoints (TCP/TLS).  
   - For high‑volume streams, expose a **Kinesis Data Streams** endpoint that accepts **UDP‑like datagrams** via the **Amazon Kinesis Agent** running on EC2 Spot instances.  
   - Each record is wrapped with a sequence number and checksum; Kinesis guarantees at‑least‑once delivery, eliminating UDP’s unreliability.  
3. **Scalability & Availability** – Auto‑scaling groups for agents, Multi‑AZ deployment of API Gateway, and DynamoDB Global Tables for metadata keep the system highly available.  
4. **Cost & Trade‑offs** – Kinesis shards cost ~\$0.015/hr each; we provision 200 shards for peak load (~\$600/day) versus a monolithic TCP server that would need a 10‑node cluster (≈\$3,000/month).  
5. **Bias for Action** – I deployed the prototype within two weeks and rolled it out to 30 % of traffic.

**Result (R)**  
Latency dropped from 120 ms to 35 ms; data loss fell below 0.01 %. The system handled a 4× traffic surge during a product launch without failure, saving the company **$2,400/month** in operational costs and earning an internal “Innovation” award.

---

> **Leadership Principles Reflected**  
> *Customer Obsession* – Delivering reliable data for ad targeting.  
> *Ownership* – From requirement gathering to production rollout.  
> *Dive Deep* – Quantifying packet loss, shard sizing, cost modeling.  
> *Bias for Action* – Rapid prototyping and incremental release.

Bar‑raisers look for clear ownership, a deep technical rationale, quantified impact, and lessons learned—exactly what this answer demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
