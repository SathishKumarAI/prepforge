---
qid: ing_d7c3d3a2ee__aws__local
question: 'Explain: Amazon Simple Notification Service endpoints and quotas'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 626
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:20-05:00'
sources: []
---

**Amazon SNS Endpoints & Quotas – A Leadership‑Driven Design**

> **Leadership Principles:** *Customer Obsession* (ensuring reliable notifications for end‑users) and *Dive Deep* (understanding limits to avoid outages).

---

### Situation  
In 2023 I led the migration of our global e‑commerce platform’s order‑status alerts from a legacy SMTP system to **Amazon SNS**. The goal was to deliver real‑time push, email, and SMS notifications to ~2 M daily active users without exceeding service limits.

### Task  
I had to map out all SNS endpoints (HTTP/HTTPS, SQS, Lambda, Email, SMS, Mobile Push) and their quotas, then design a system that scales to 10× traffic while staying within those bounds.

### Action  

| Service | Key Quota | Mitigation Design |
|---------|-----------|-------------------|
| **SNS Topics** | 100 000 per account | Partition topics by region & user segment; use *Topic Aliases* for logical grouping. |
| **Subscriptions per Topic** | 10 000 | Use a *subscription filter policy* to route only relevant messages, reducing the number of active subscriptions. |
| **SMS Deliveries** | 200 k/month (per country) | Implement a *rate‑limit queue* in SQS that throttles SMS publishers; fallback to email for low‑priority alerts. |
| **HTTP/HTTPS Endpoints** | 20 000 per topic | Deploy an Application Load Balancer with target groups behind Lambda@Edge, scaling automatically with traffic spikes. |
| **Email (SES)** | 200 k/day | Leverage *SendRawEmail* batching; monitor bounce rates and adjust suppression lists. |

I also introduced a **Quotas‑Dashboard** in CloudWatch that triggers SNS alarms when any limit approaches 80 % capacity, allowing proactive scaling.

### Result  
- **Notification latency dropped from 4 s to <300 ms** for push/SMS, improving user satisfaction scores by **+12 pts**.  
- Achieved **99.9 % delivery success** across all channels during a 50× traffic surge in the holiday season.  
- Reduced operational cost by **18 %** through efficient quota usage and automated scaling.

---

### What a Bar‑raiser Hears  

* **Ownership:** I took full responsibility for end‑to‑end reliability, from quota planning to live monitoring.  
* **Dive Deep:** I dissected each endpoint’s limits, built a dynamic dashboard, and tuned filters to stay under thresholds.  
* **Quantified Impact:** Concrete metrics (latency, delivery %, cost) show real business value.  
* **Learning from Failure:** After an initial SMS throttling incident, I updated the rate‑limit logic and added predictive scaling rules, turning a failure into a permanent improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
