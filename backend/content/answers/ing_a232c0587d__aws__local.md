---
qid: ing_a232c0587d__aws__local
question: 'Explain: Job Store — Design a Distributed Job Scheduler - System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:31:45-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of an on‑prem batch engine (≈ 5k jobs/day) into a cloud‑native platform for a global retailer. The goal was to build a *distributed job store* that could schedule, retry and scale 20× more jobs while keeping cost < 30% of legacy spend.

**Action – Architecture & AWS Services**  
- **Data layer:** DynamoDB (partition key = `queueId`, sort key = `runAt`) for ACID inserts/updates; provisioned throughput tuned to peak 200k ops/s.  
- **Queueing:** Amazon SQS FIFO per queueId to guarantee ordering and deduplication.  
- **Processing:** AWS Fargate tasks (CPU‑optimized) triggered by `SQS Event Source Mapping`. Each task pulls a batch of jobs, processes them in parallel using *DynamoDB Streams* for “at‑least‑once” visibility.  
- **Retry & Dead‑Lettering:** Lambda functions update job status and schedule exponential back‑off via CloudWatch Events; DLQs capture permanently failed jobs for manual triage.  
- **Observability:** CloudWatch Metrics (`jobs_succeeded`, `jobs_failed`, `queue_depth`) + X-Ray tracing for end‑to‑end latency.  

**Result**  
- 95 % of jobs completed within SLA (≤ 30 min) versus 78 % previously.  
- Cost dropped from $120k/month to $38k/month (68 % savings).  
- Autoscaling reduced idle Fargate capacity by 45 %.  

**Reflection & Bar‑raiser notes**  
I took *ownership* of end‑to‑end latency and *dive deep* into DynamoDB throughput to avoid hot partitions. The biggest learning was that a single SQS queue per tenant prevented “thundering herd” spikes; switching back to a shared queue later caused SLA regressions, highlighting the importance of iterative testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
