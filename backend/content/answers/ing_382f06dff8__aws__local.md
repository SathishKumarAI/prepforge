---
qid: ing_382f06dff8__aws__local
question: 'Explain: Examples of a Publish-Subscribe Mechanism'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 462
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:33-05:00'
sources: []
---

**Situation & Impact**  
At my last role I led a team that needed to deliver real‑time telemetry from IoT devices to analytics dashboards. Our existing polling model caused 30 % latency spikes during peak hours and increased costs by $15k/month.

**Task**  
Design a publish–subscribe (pub/sub) architecture that scales, is highly available, and cuts cost by at least 20 %.

**Action**  
I chose **Amazon SNS + Amazon SQS** for decoupling producers from consumers. Devices publish JSON events to an SNS topic; the topic fan‑out to two SQS queues—one for real‑time dashboards (short retention) and one for batch ML pipelines (longer retention).  

*AWS Services & Rationale*  
- **SNS**: low latency, pay‑per‑publish, built‑in retries.  
- **SQS Standard**: at‑least‑once delivery; FIFO queue for ordering where needed.  
- **Lambda**: triggers on SQS messages to transform and push to DynamoDB Streams → Glue ETL → Redshift Spectrum.  

*Scalability & Availability*  
- SNS scales elastically (10⁶+ msgs/sec).  
- SQS is region‑wide; we enabled cross‑region replication for disaster recovery.  
- All services are multi‑AZ by default, giving 99.9 % SLA.

**Result**  
Latency dropped from 2.5 s to <200 ms (90 % improvement), and monthly cost fell from $15k to $12k—a 20 % savings—while enabling near‑real‑time ML inference on the data lake.

**Learnings & Ownership**  
I iterated on message size (batching 50 events) after a failure that caused Lambda timeouts. I documented the trade‑off between cost and latency, and shared findings with product managers to align on acceptable SLAs. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
