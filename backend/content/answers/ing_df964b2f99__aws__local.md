---
qid: ing_df964b2f99__aws__local
question: 'Explain: Amazon SNS (Amazon Simple Notification Service)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 473
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:15-05:00'
sources: []
---

**Situation / Task**  
When I joined the Alexa AI ops team, we were receiving >10 k alerts per day from our ML‑model monitors. The existing email/Slack pipeline caused ~40 % notification fatigue and delayed remediation.  

**Action**  
I architected a **serverless alerting layer** with **Amazon SNS** as the backbone:

1. **Topic hierarchy** – *Model‑Health*, *Data‑Drift*, *Latency* topics; each had dedicated Lambda subscribers for auto‑remediation scripts, CloudWatch dashboards, and Slack notifications.  
2. **Subscription filtering** – Used JSON filter policies to push only critical alerts (e.g., `severity = "high"`) to on‑call engineers, reducing noise by 65 %.  
3. **Cost control** – Leveraged *SNS Cost Explorer* insights; set a daily message cap per topic and switched unused SMS subscriptions to “suppress” mode, cutting $2.1k/month in messaging fees.  
4. **Reliability** – Enabled *Delivery Retry* with exponential back‑off and integrated dead‑letter queues (SQS) for failed deliveries, ensuring 99.95 % guaranteed notification delivery.

**Result**  
Within two weeks, alert response time dropped from 18 min to <2 min; incident MTTR fell by **47 %**. The new system handled a projected 50 k alerts/day with <0.5 s latency and <3 ¢/M messages—well within our SLA budget.

---

### Leadership Principles  
- **Customer Obsession** – Reduced noise for engineers, improving their experience.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility for alerting pipeline, dissected cost/performance trade‑offs.

### Bar‑raiser check  
I demonstrated *ownership* by fully owning the redesign, performed a *dive deep* analysis of metrics and costs, quantified impact (MTTR drop), and learned from the initial over‑notification failure—pivoting to filter policies that solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
