---
qid: ing_382e45fcad__aws__local
question: 'Explain: 3.4 Run Failure Reviews — Single Point of Failure (SPOF) | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 538
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:33-05:00'
sources: []
---

**Situation – Task:**  
I led a cross‑team effort to audit our AI inference pipeline after an unexpected outage that caused a 48 h service interruption. The root cause was a single point of failure (SPOF) in the model‑serving layer, which prevented any downstream request from completing.

**Action – Design & Execution:**  
1. **Architectural Redesign** – Migrated the model server to an **AWS Elastic Container Service (ECS)** cluster with **Application Load Balancer (ALB)** front‑end and **Auto Scaling Groups (ASG)** for elasticity.  
2. **Failure Review Loop** – Implemented a **Step Functions** workflow that triggers on any `TaskFailed` event, automatically capturing logs in **CloudWatch Logs**, metrics in **Amazon CloudWatch Metrics**, and generating a **Jira ticket** via API Gateway + Lambda.  
3. **SPOF Mitigation** – Added a **Redis‑based cache (ElastiCache)** to store inference results for 5 min, reducing load on the model host during transient outages.  
4. **Observability & Alerting** – Created CloudWatch Alarms that fire if request latency > 200 ms or error rate > 1%; alerts route to PagerDuty and Slack.

**Result – Impact:**  
- Reduced mean time to recovery (MTTR) from **48 h to <30 min**.  
- Cut failure‑related downtime cost by **$120k/month**.  
- Achieved a **99.97% SLA** for inference latency, improving user satisfaction scores by 18%.

---

### Leadership Principles Anchored
| Principle | How it Shines |
|-----------|---------------|
| **Customer Obsession** | Designed real‑time alerts and cache to keep AI responses available for end users. |
| **Ownership & Bias for Action** | Took full responsibility, rapidly redesigned the system, and automated failure reviews. |

---

### Bar‑Raiser Expectations  
- **Ownership:** Demonstrated by leading both architecture change and post‑mortem automation.  
- **Dive Deep:** Detailed analysis of latency sources, cache hit ratios, and ASG scaling policies.  
- **Quantified Impact:** Clear metrics (MTTR, cost savings, SLA).  
- **Learning from Failure:** Turned a catastrophic outage into an automated review loop that prevents recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
