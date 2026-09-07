---
qid: ing_e1215e1991__aws__local
question: 'Explain: Pull — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 575
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:37-05:00'
sources: []
---

**Scenario – Building a real‑time inference pipeline**

*Situation:*  
Our recommendation service had to process millions of user events per day and deliver predictions in <50 ms. The existing pull‑based worker farm caused high latency spikes during traffic surges.

*Task:*  
Redesign the event ingestion layer so that workers scale elastically, queue backlogs shrink, and overall cost stays below $15k/month.

*Action:*  
I chose **Amazon SNS (Pub/Sub)** + **Amazon SQS** with dead‑letter queues. Each event publisher (mobile SDK) publishes to an SNS topic; multiple SQS subscriptions fan out the payload to parallel Lambda workers. Workers run on Fargate, auto‑scaling based on queue depth. I added CloudWatch metrics and a Lambda that aggregates backlogs every 5 min to trigger scaling events.

*Result:*  
- Latency dropped from 120 ms (pull) to **35 ms** average.  
- Queue depth never exceeded 200 messages, eliminating backlog stalls.  
- Cost fell by **32%** because we pay only for consumed messages and compute time.  
- The system handled a 4× traffic spike during a promotion without manual intervention.

---

### Amazon Leadership Principles

| Principle | How I Showed It |
|-----------|-----------------|
| **Customer Obsession** | Delivered sub‑50 ms predictions, improving user engagement by 18%. |
| **Ownership & Dive Deep** | Investigated the pull bottleneck, quantified latency, and engineered a scalable Pub/Sub solution. |

---

### Technical Highlights

*AWS Services:* SNS (pub/sub), SQS (buffering), Lambda/Fargate (compute), CloudWatch/Step Functions (monitoring).  
*Scalability:* Fan‑out decouples producers from consumers; auto‑scaling keeps cost predictable.  
*Availability:* Each component is multi‑AZ by default; SQS guarantees at‑least‑once delivery.  
*Cost:* Pay‑per‑message model plus serverless compute; no overprovisioned EC2 instances.

---

### Bar‑Raiser Signals

1. **Ownership:** Took full responsibility for latency and cost, not just surface fixes.  
2. **Dive Deep:** Measured queue depth, worker metrics, and traced backpressure origins.  
3. **Quantified Impact:** Presented clear before/after numbers (latency, cost).  
4. **Learning from Failure:** After a brief period of high error rates, I added DLQs and retrigger logic—turning a failure into an automated resilience feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
