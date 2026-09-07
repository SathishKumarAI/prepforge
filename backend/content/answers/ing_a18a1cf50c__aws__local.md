---
qid: ing_a18a1cf50c__aws__local
question: 'Explain: Summary — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 485
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:26-05:00'
sources: []
---

**Scenario (S)**  
I was tasked with building a real‑time recommendation engine for an e‑commerce platform that had to ingest millions of click events per day, process them through a ML pipeline, and push personalized offers to users in under 200 ms.

**Task (T)**  
Design a fault‑tolerant message‑queueing layer that guarantees at‑least‑once delivery while keeping latency low enough for the recommendation service to stay responsive.

**Action (A)**  
1. **Requirements & trade‑offs** – We needed *durability*, *exactly‑once processing* for model updates, and *low tail latency*.  
2. **Design** –  
   - **Amazon SQS Standard** for event ingestion (fan‑out to workers) because it scales elastically with no provisioned throughput limits and guarantees high availability.  
   - **AWS Lambda + Kinesis Data Streams** for the heavy ML inference stage; Lambda scales in milliseconds while Kinesis provides ordered, replayable streams.  
   - **SQS FIFO** for critical control messages (e.g., model roll‑outs) where ordering is required.  
3. **Scalability & Availability** – SQS automatically replicates across AZs; Lambda auto‑scales to 10 000 concurrent executions with provisioned concurrency for the hot path, ensuring <200 ms latency.  
4. **Cost** – Using pay‑per‑message (SQS) and pay‑per‑invocation (Lambda) keeps spend tied directly to traffic, eliminating idle capacity.

**Result (R)**  
The system processed 12 M click events/day with a 99.9% success rate; recommendation latency dropped from 350 ms to 180 ms, boosting conversion by **7%** within the first month.  

> **Leadership Principles:** *Customer Obsession* – delivered faster, more accurate offers; *Ownership* – drove end‑to‑end design and cost control.  
> **Bar‑raiser cues:** Demonstrated ownership, deep dive into AWS services, quantified business impact, and a lesson learned—initially over‑provisioned Lambda concurrency, leading to higher costs that we later optimized with spot instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
