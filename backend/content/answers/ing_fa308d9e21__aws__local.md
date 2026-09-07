---
qid: ing_fa308d9e21__aws__local
question: 'Explain: AWS Kinesis — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:02-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession, Ownership**  
> *Behavioral → STAR*  

**S**: While leading a fraud‑detection team at my previous company, we needed to decide between Kinesis Data Streams and Kinesis Data Firehose for real‑time alerts.  
**T**: The goal was to process 200 k events/s with < 1 s latency while keeping cost under $5K/month.  
**A**: I compared the two services:  

| Feature | Kinesis Stream (Batch) | Kinesis Firehose (Stream) |
|---------|------------------------|---------------------------|
| **Processing model** | Pull‑based consumer groups; can buffer and batch records before processing. | Push‑to‑S3/Redshift/Elasticsearch; automatically batches and compresses. |
| **Latency** | 0–30 s (depends on shard count & consumer speed). | < 5 s (max). |
| **Cost drivers** | Shard hours + PUT payload bytes + GetShardIterator calls. | Put payload bytes + destination I/O. |
| **Scaling** | Manual shard scaling; auto‑scaling via Lambda. | Automatic scaling, no shards to manage. |

I chose **Kinesis Streams** with 8 shards and a consumer on EC2 Spot that batched 1 k records before invoking SageMaker for inference. This achieved 0.7 s latency and $4.3K/month.  

**R**: The solution reduced fraud loss by 23% YoY, saved $1.5M in manual review costs, and improved customer trust scores. I documented the trade‑offs, shared a playbook for future data‑pipeline decisions, and iterated on shard sizing based on real usage metrics.

> *Bar‑raiser note:* Look for ownership of end‑to‑end cost/latency trade‑offs, deep dive into service internals (shards vs. auto‑scaling), and evidence that the candidate quantified impact and learned from a prior mis‑estimation (e.g., over‑provisioned shards).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
