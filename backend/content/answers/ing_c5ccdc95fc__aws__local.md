---
qid: ing_c5ccdc95fc__aws__local
question: 'Explain: GoRoutines and CPU Stats'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 423
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:18-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science squad at my previous company, we built a real‑time fraud‑detection pipeline that ingested ~2 M events/sec. The existing single‑threaded Go service was CPU bound and had 15 % error rate due to throttling. My goal: reduce latency by 30 % while keeping cost < $1k/month.

**Action (Dive Deep + Ownership)**  
I refactored the pipeline to use **goroutines** for parallel feature extraction and model inference, leveraging Go’s lightweight threads. Each event was wrapped in a `context` with a timeout to avoid runaway CPU. I instrumented CPU usage via `/proc/stat`, exposed metrics to CloudWatch (`CPUUtilization`, `GoroutineCount`) and set alarms at 70 % utilization.

On AWS I deployed the service as an **AWS Fargate** task (v2) in a private subnet, using **Amazon ECS**. To scale automatically, I attached an Application Auto Scaling policy that spun up to 10 tasks when `CPUUtilization > 80 %`. For cost control, I enabled Spot Instances for non‑critical batch jobs.

**Result (Deliver Results)**  
- Latency dropped from 250 ms to **165 ms** (34 % improvement).  
- CPU utilization stabilized around **55 %**, keeping the error rate < 1 %.  
- Monthly cost fell from $2.3k to **$0.9k** due to Spot usage and autoscaling.

**Learnings & Bar‑raiser cues**  
I documented failure modes (e.g., goroutine leaks) in a post‑mortem, added guardrails (context cancellation), and shared the design with peers—showing ownership, depth, and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
