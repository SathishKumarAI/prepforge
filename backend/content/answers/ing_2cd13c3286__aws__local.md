---
qid: ing_2cd13c3286__aws__local
question: 'Explain: Monitoring and Alerting — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 458
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:23-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to replace a legacy “monitor‑and‑restart” loop that ran on dozens of ML inference containers in ECS. The system failed under sudden traffic spikes, causing >15 % SLA degradation during peak hours.

**Action**  
I built an end‑to‑end monitoring pipeline anchored on **Amazon CloudWatch Metrics & Alarms**, **EventBridge**, and a lightweight **Lambda** orchestrator:

1. **Metrics** – Each container pushes latency, error rate, CPU/Memory to CloudWatch via the ECS Agent.  
2. **Alarms** – Thresholds set at 95th‑percentile latency > 200 ms & error rate > 0.5 % trigger EventBridge rules.  
3. **Auto‑Recovery** – An EventBridge rule invokes a Lambda that queries ECS for unhealthy tasks, stops them, and launches new ones with *spot* capacity.  
4. **Alerting** – CloudWatch Alarms fan‑out to an SNS topic that writes to an SQS queue; a consumer aggregates events per hour and posts a concise Slack message (≈ 5 lines).  

**Result**  
- 30 % reduction in mean time to recover (MTTR) from 12 min to 3.4 min.  
- SLA compliance rose from 93 % to > 99.8 %.  
- Cost savings of $2k/month by leveraging spot instances for auto‑scaled pods.

**Amazon Leadership Principles**  
- **Customer Obsession** – Ensured uninterrupted inference service for end users.  
- **Ownership & Dive Deep** – Diagnosed root causes, built a self‑healing system, and quantified impact.

**Bar‑raiser takeaways** – The solution shows deep technical grasp, clear ownership of metrics, quantifiable business value, and a learning loop that continuously refines thresholds based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
