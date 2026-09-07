---
qid: ing_360f275db8__aws__local
question: 'Explain: Pub-Sub — Grokking System Design Interview: Patterns & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 531
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:59-05:00'
sources: []
---

**Scenario (S)**  
While leading the data‑engineering team at a media startup, we needed to move from a monolithic batch pipeline to a real‑time event system that could ingest user interactions and feed ML models for personalized recommendations.

**Task (T)**  
Design a publish‑subscribe architecture that guarantees *at least once* delivery, scales to millions of events per second, and keeps costs under $5k/month.

**Action (A)**  
1. **Event ingestion** – Front‑end emits events to **Amazon SNS** topics (`user.click`, `video.watch`).  
2. **Durable queueing** – Each topic fan‑out to an **SQS FIFO** queue per consumer service, ensuring ordering for time‑sensitive models.  
3. **Processing & ML inference** – Lambda functions poll SQS; on receipt they trigger **Amazon SageMaker Runtime** endpoints for inference and write results to DynamoDB.  
4. **Back‑pressure & retries** – Dead‑letter queues capture failures; CloudWatch alarms trigger auto‑scaling of Lambda concurrency.  
5. **Observability** – All events go to **CloudTrail** + **X-Ray** for latency tracing.

**Result (R)**  
- Reduced end‑to‑end latency from 30 s to <200 ms.  
- Achieved 99.9% availability during a peak traffic surge of 5M events/day.  
- Cut operational cost by 40% vs the legacy batch solution ($7k → $4.2k/month).

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant personalization, boosting click‑through rate by 18%.  
- **Ownership** – Took full responsibility for reliability and cost control.

### Bar‑Raiser Signals
- Demonstrated *deep dive* into SNS/SQS trade‑offs (e.g., FIFO vs standard).  
- Quantified impact with real metrics.  
- Reflected on a failure case where a Lambda timeout caused data loss, leading to the decision to enable DLQs and increase timeout settings.

This design balances **scalability**, **availability**, and **cost** while keeping the system simple and maintainable—exactly what Amazon expects from a candidate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
