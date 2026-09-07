---
qid: ing_2b45156429__aws__local
question: 'Explain: Types of messaging — Pointtopointmodel'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 425
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:43-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that wanted to build an ML‑based fraud detector. The team had to decide how to ship model predictions to downstream services in real time while keeping latency < 20 ms and throughput > 10k RPS.

**Action – Design**  
I proposed **point‑to‑point messaging** using Amazon SQS FIFO queues for synchronous “request/response” flows, and a **publish–subscribe (pub/sub) model** with Amazon SNS + EventBridge for asynchronous fan‑out to multiple consumers.  

*Why these services?*  
- **SQS FIFO** guarantees exactly‑once delivery and preserves order—critical when the fraud score must be applied sequentially per user session.  
- **SNS+EventBridge** decouples model inference from downstream analytics, allowing horizontal scaling of consumer micro‑services without re‑architecting the producer.

I added a small Lambda layer that serializes predictions into a compact protobuf payload, reducing SQS message size by 40 % and cutting storage costs on S3 (used for audit logs). I also introduced a retry policy with exponential back‑off to handle transient failures, ensuring *high availability* without polling loops.

**Result**  
After deployment, end‑to‑end latency dropped from 120 ms to **18 ms**. Throughput increased from 2k RPS to **12k RPS** with no outage during peak traffic. Cost per message fell by **35 %** due to payload compression and reduced Lambda invocations.

**Reflection (Bar‑raiser check)**  
I owned the architecture, dived deep into AWS cost models, quantified impact through A/B testing, and learned that a hybrid messaging pattern can meet strict SLAs while remaining scalable. This aligns with *Customer Obsession* (fast fraud detection) and *Ownership* (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
