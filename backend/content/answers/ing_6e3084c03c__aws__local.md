---
qid: ing_6e3084c03c__aws__local
question: 'Explain: Independent Scaling — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 482
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:06-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked to redesign a real‑time recommendation engine that ingested 4 M events per day from user interactions. The existing monolith throttled during traffic spikes and caused SLA breaches (99.5% latency > 2 s). My goal: decouple ingestion, processing, and storage so each component could scale independently while keeping costs < $30k/month.

**Action & Design**  
I introduced a *message‑queue* pattern using **Amazon SQS FIFO** for event capture and **SNS** to fan‑out to multiple consumer services. Each consumer ran as a **Lambda** pool behind an **Application Load Balancer**, auto‑scaling based on queue depth (SQS metrics). Processed payloads were stored in **DynamoDB** with partition keys derived from user ID, ensuring linear scalability and 99.9% availability.  
- **Scalability:** SQS scales to millions of messages per second; Lambda concurrency can be burst‑scaled automatically.  
- **Availability:** All services are multi‑AZ by default; DynamoDB provides built‑in replication.  
- **Cost:** We moved from a fixed EC2 fleet ($18k) to an event‑driven model (~$12k), saving 33%.  
- **Trade‑offs:** Added slight latency (average 150 ms) due to queueing, but acceptable for recommendation use‑case.

**Result & Reflection**  
After rollout, we achieved 99.9% throughput compliance and reduced latency from 2.3 s to 0.45 s during peak hours— a **70% performance gain**. I documented the failure modes (e.g., queue backlogs) and instituted automated alerts, learning that *ownership* means anticipating downstream bottlenecks.  

> **Leadership Principles:**  
> • **Customer Obsession** – delivering fast, reliable recommendations.  
> • **Ownership & Dive Deep** – redesigning architecture from scratch, quantifying impact, and iterating on failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
