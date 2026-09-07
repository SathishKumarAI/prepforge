---
qid: ing_690a093418__aws__local
question: 'Explain: AI Systems — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 625
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:51-05:00'
sources: []
---

**Scenario (S)**  
While leading the ML inference platform at my last company, we were asked to expose a real‑time recommendation engine to both internal dashboards and external partners. The data stream came from two sources: an analytics pipeline that could tolerate packet loss (Kafka) and a latency‑critical partner feed that required every message (TCP). Our goal was to design a unified ingestion layer that met SLAs for throughput, availability, and cost.

**Task (T)**  
Design the transport layer so that we could ingest both UDP‑style and TCP‑style traffic without compromising data integrity or scaling beyond our budget. I had to decide whether to use **TCP**, **UDP**, or a hybrid approach while keeping in mind Amazon’s *Ownership* and *Dive Deep* principles.

**Action (A)**  
1. **Requirements** – 10 Gbps ingestion, < 50 ms end‑to‑end latency for critical feed, 99.999% availability.  
2. **Design** –  
   - **TCP stream**: Use **Amazon Kinesis Data Streams** with enhanced fan‑out to guarantee ordered delivery and built‑in retries.  
   - **UDP stream**: Wrap the UDP packets in a lightweight **gRPC‑over‑HTTP/2** shim that adds sequence numbers, checksums, and optional acknowledgments. The shim runs on **AWS Fargate**, auto‑scales with CloudWatch metrics, and writes to an S3 “landing zone” for later replay.  
   - Both streams feed into a **Kinesis Data Firehose** delivery stream that transforms data via Lambda (deduplication, enrichment) before landing in **Redshift Spectrum** for analytics.  
3. **Scalability & Availability** – Kinesis offers multi‑AZ replication; Fargate tasks are spread across AZs with an ALB health check.  
4. **Cost** – Using serverless components (Fargate + Lambda) keeps fixed costs low, while Kinesis shard scaling is pay‑per‑use.  

**Result (R)**  
After deployment:  
- Throughput hit 12 Gbps, exceeding the target by 20%.  
- Latency for the critical feed dropped from 120 ms to **42 ms**.  
- Cost savings of 35% compared with a monolithic TCP‑only design.  
The system also logged 99.9999% uptime over six months.

**What the bar‑raiser looks for**  
- *Ownership*: I drove end‑to‑end delivery, not just a component.  
- *Dive Deep*: I quantified latency, throughput, and cost trade‑offs.  
- *Impact*: The new design enabled a 15% increase in partner revenue.  
- *Learning from failure*: Early prototype with raw UDP failed due to packet loss; switching to gRPC shim fixed the issue and provided auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
