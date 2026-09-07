---
qid: ing_4f254eb99e__aws__local
question: 'Explain: Distributed Job Queue — Design a Distributed Job Scheduler - System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 564
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:24:10-05:00'
sources: []
---

**Leadership Principles:** *Ownership*, *Dive Deep*  

**Situation (S)** – I led a cross‑functional team that needed to process 10 M video transcriptions per day for our media service. The existing single‑node scheduler stalled at ~200 jobs/sec, causing SLA breaches and a 12% revenue dip.

**Task (T)** – Build a fault‑tolerant Distributed Job Scheduler that scales linearly with workload while keeping latency < 5 s and cost ≤ $0.15 per job.

**Action (A)**  
1. **Requirements & Architecture** –  
   *Decouple* producers from workers using an *Amazon SQS FIFO* queue (dedup + ordering).  
   *Worker fleet* runs on **ECS Fargate Spot** with auto‑scaling based on `ApproximateNumberOfMessagesVisible`.  
   *Job state* stored in **DynamoDB** (partition key = jobId, GSI for status) to guarantee at‑least‑once processing and easy retries.  
2. **Scalability** – Each Fargate task processes 50 jobs/second; with a target of 200 k jobs/sec we spin up ~4k tasks—managed automatically by ECS service scheduler.  
3. **Availability & Cost** – SQS provides >99.9% durability; Spot pricing cuts compute cost by 70%. DynamoDB on-demand tables keep latency < 2 ms.  
4. **Observability** – CloudWatch metrics (`QueueDepth`, `TaskSuccessRate`) trigger SNS alerts and auto‑scaling thresholds.

**Result (R)** – In production, throughput grew from 200 to **250k jobs/sec**, SLA hit 99.95%, revenue stabilized (+$1.2 M/month), and compute cost dropped 68% compared with the legacy scheduler.

---

### What a bar‑raiser looks for  
- **Ownership**: I owned the end‑to‑end design, from queueing to billing.  
- **Dive Deep**: I quantified latency, throughput, and cost trade‑offs, and iterated on DynamoDB GSI partitioning after noticing hot spots.  
- **Quantified Impact**: 250k jobs/sec vs. 200, 99.95% SLA, $1.2 M/month revenue lift.  
- **Learning from Failure**: Early prototype over‑provisioned Fargate tasks; we switched to Spot and added a retry policy after observing 3× higher failure rates on-demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
