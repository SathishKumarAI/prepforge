---
qid: ing_20543bed6b__aws__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 566
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:18-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the revamp of a 30‑node Spark cluster that scheduled nightly ETL jobs for a retail analytics platform. The job‑failure rate was 18 % per week, causing downstream dashboards to be stale and SLA breaches. I had to design a *distributed job scheduler* that could detect failures, retry intelligently, and keep the system highly available.

**Action**  
I architected an **AWS‑native pipeline**:

| Component | AWS Service | Role |
|-----------|-------------|------|
| Job definition & state | **DynamoDB** (partition key = `jobId`) | Persist status (`PENDING`, `RUNNING`, `FAILED`, `SUCCESS`), retry count, back‑off schedule |
| Scheduling & orchestration | **Amazon EventBridge + Step Functions** | Trigger jobs on a cron or event; orchestrate retries with exponential back‑off |
| Execution | **AWS Fargate/ECS** (or Lambda for small jobs) | Run containers in isolated VPCs, auto‑scales by job queue length |
| Failure detection | **CloudWatch Alarms + CloudWatch Logs** | Monitor container exit codes; push alerts to SNS & EventBridge |
| Notification | **SNS** + **Slack webhook** | Notify ops on persistent failures |

I added a *watchdog microservice* that polls DynamoDB for `FAILED` jobs exceeding the retry budget and automatically reschedules or escalates. The design is fully serverless‑friendly, eliminating single points of failure.

**Result**  
Within 6 weeks:  
- Failure rate dropped from **18 % → <2 %** per week.  
- Mean time to recovery fell by **70 %** (from 90 min to 27 min).  
- Cost decreased by **15 %** due to Fargate’s pay‑per‑second model and reduced idle capacity.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end flow, *dove deep* into retry logic, quantified impact with real metrics, and iterated after a failed job that exposed race conditions in DynamoDB writes—prompting me to add conditional updates. This showcases ownership, data‑driven results, and continuous learning—all key for an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
