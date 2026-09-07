---
qid: ing_b5cc01c440__aws__local
question: 'Explain: 4.2 Requirement 2: Health Monitoring — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 476
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:15:18-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent project I led the redesign of our ML inference pipeline. The requirement was to add *Health Monitoring* to the Load Balancer that fronts the model serving tier. **Leadership Principles:** *Ownership* – I took full responsibility for the end‑to‑end design; *Dive Deep* – I dissected every metric and failure mode before committing a solution.

**Situation / Task**  
Our existing ELB only routed traffic based on CPU usage, but we needed real‑time health checks that reflected model latency, error rate, and data drift. The goal was to reduce SLA violations from 2 % to <0.1 % while keeping cost below $5k/month.

**Action**  
1. **AWS Services** – I added an *Application Load Balancer (ALB)* with target groups for each inference container.  
2. **Health Checks** – Configured *HTTP health checks* that hit `/healthz` endpoints returning JSON: `{latency_ms, error_rate, drift_flag}`.  
3. **Lambda@Edge / CloudWatch Alarms** – A Lambda function parsed the metrics and updated the target group's *healthy threshold* in real time (using `RegisterTargets`/`DeregisterTargets`).  
4. **Auto‑Scaling** – Integrated with ECS Service Auto Scaling using CloudWatch alarms on latency > 300 ms or error_rate > 1 %.  

**Result**  
- SLA violations dropped from 2 % to **0.05 %** within one month.  
- Monthly cost increased by only **$350 (7 %)** due to the additional Lambda invocations, staying well under budget.  
- The system now self‑heals in <30 s when a model container drifts or crashes.

**Bar‑raiser takeaway** – I demonstrated ownership by driving the change from concept to production, dove deep into metric granularity, quantified impact with real numbers, and learned that lightweight health checks (JSON payload) outperformed binary pings for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
