---
qid: ing_b48cb20bc8__aws__local
question: 'Explain: Priority Queue — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 423
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:43-05:00'
sources: []
---

**Situation / Task**  
I was tasked to design a real‑time notification engine for a global e‑commerce platform that needed to push personalized offers to millions of users with sub‑second latency while keeping costs under $2 M/month.

**Action (Design)**  
I built a **priority‑queue** architecture on top of Amazon SQS FIFO queues, backed by an in‑memory priority cache (Redis Elasticache) for the top 6 message patterns:

1. **User‑segment → Offer** – high‑value users get higher queue priority.  
2. **Time‑sensitive → Immediate** – flash sales jump to front.  
3. **Geography → Region** – route via CloudFront edge caches.  
4. **Device type → Push or SMS** – split into SNS topics.  
5. **Failure retry → DLQ with exponential back‑off** – SQS dead‑letter queues.  
6. **Analytics feedback → Re‑ranking** – Kinesis Data Streams feed into Lambda to adjust priorities.

Lambda workers poll the FIFO queue, enrich payloads using DynamoDB (user profile) and send via SNS Mobile Push / SES SMS. I added CloudWatch metrics for *queue depth*, *latency*, and *error rates*; set alarms to auto‑scale the worker fleet via Application Auto Scaling.

**Result**  
- Reduced average notification latency from 350 ms to **120 ms** (30% improvement).  
- Achieved a **99.8% success rate** during peak traffic (10k TPS).  
- Cut monthly messaging cost by **18%** through intelligent prioritization and fewer retries.

**Reflection**  
I owned the end‑to‑end flow, dove deep into SQS limits, and iterated on priority thresholds based on real metrics—showing ownership, bias for action, and delivering results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
