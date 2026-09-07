---
qid: ing_c5f11c06cd__aws__local
question: 'Explain: 4.1 SQL vs NoSQL — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 480
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:34-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a distributed job scheduler for an e‑commerce platform that needed to queue, prioritize and run millions of background jobs (inventory syncs, recommendation updates, email campaigns) with SLA ≤ 5 min. The system had to survive node failures, scale horizontally, and be cost‑effective.

**Action – Design & Technical Choices**  
- **Data store:** Chose DynamoDB (NoSQL) for its single‑digit latency, automatic sharding, and strong eventual consistency for job metadata.  
- **Queueing:** Used Amazon SQS FIFO queues to guarantee order per priority group; each queue had a `VisibilityTimeout` tuned to the longest expected run time.  
- **Workers:** EC2 Spot instances behind an Auto Scaling Group were spun up on demand by an EventBridge rule triggered when a job was enqueued. Workers poll SQS, lock the job in DynamoDB (`OptimisticLocking`), and run it.  
- **Scaling & Availability:** Leveraged DynamoDB’s auto‑scaling to handle 10 M writes/second during peak sales; SQS provided built‑in redundancy across AZs.  
- **Cost trade‑off:** Spot instances reduced compute cost by ~70% versus on‑demand, while using Reserved Instances for the 20 % of long‑running jobs ensured reliability.

**Result**  
Within three months, the scheduler processed 12 M jobs with a success rate of 99.8%, and SLA violations dropped from 3.5 % to <0.1 %. The system cost $18k/month compared to an estimated $60k for a monolithic solution.

---

### Leadership Principles Anchored  
- **Customer Obsession:** Delivered reliable, fast background processing that directly improved user experience (faster product updates, timely emails).  
- **Ownership & Dive Deep:** Took full ownership of design, deeply analyzed failure modes, and iterated on lock strategy to eliminate race conditions.  

**Bar‑raiser Takeaway**  
A strong answer shows ownership, dives into data consistency choices, quantifies impact, and reflects on learning (e.g., why DynamoDB over RDS).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
