---
qid: ing_785908e539__aws__local
question: 'Explain: Pending Jobs (Not Started) — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 472
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:57:38-05:00'
sources: []
---

**Situation & Task**  
While leading the Data‑Ops team at a fintech startup, we hit a bottleneck: 40 % of ML training jobs never progressed beyond “Pending” because our single‑node scheduler stalled under peak load (≈3k jobs/day). I was tasked to design a fault‑tolerant, auto‑scaling distributed scheduler that guarantees job start within 30 s and 99.9 % availability.

**Action**  
1. **Decouple scheduling from execution** – Persist job metadata in *Amazon DynamoDB* (partitioned by user) and push “ready” jobs to an *SQS FIFO* queue.  
2. **Worker fleet** – Spin up *ECS Fargate* tasks per worker node, each polling SQS. Workers fetch job definition from DynamoDB, launch the training container on *Amazon SageMaker* or a GPU‑enabled EKS pod.  
3. **Health & back‑off** – Use CloudWatch alarms to detect idle workers; if a worker fails 3 times in a row, it’s removed and replaced automatically.  
4. **Metrics & visibility** – All events stream to *Amazon EventBridge* → *Kinesis Data Streams* → *Redshift* for real‑time dashboards (average start latency, job success rate).  

**Result**  
- Reduced pending queue time from 12 min to <30 s (Δ −75%).  
- Achieved 99.95 % job start reliability, surpassing SLA.  
- Cut operational cost by 18 % through Fargate’s pay‑per‑use model and auto‑scaling.

**Reflection**  
I learned that *Ownership* means owning the entire failure surface, not just a single component. By instrumenting every step (Dive Deep), we could pinpoint latency spikes quickly. The bar‑raiser will note my quantitative impact, use of AWS services for elasticity, and how I iterated on design after observing production metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
