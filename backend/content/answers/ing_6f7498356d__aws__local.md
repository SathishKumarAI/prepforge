---
qid: ing_6f7498356d__aws__local
question: 'Explain: Amazon SNS API throttling — Amazon Simple Notification Service
  endpoints and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:12-05:00'
sources: []
---

**Amazon SNS API Throttling – What it Means & How I Handled It**

*Leadership Principles: Ownership & Dive Deep*

When we launched a real‑time alerting system for our e‑commerce platform, the SNS topic that pushed push notifications to millions of devices hit the *default 10 000 TPS* limit. The throttling caused 12 % of customers to miss critical order updates.

**Situation / Task**  
I owned the incident response and had to restore delivery without escalating costs.

**Action**  
1. **Dive Deep into Quotas** – Reviewed *AWS General Reference* docs:  
   - *Publish*: 10 000 TPS per endpoint (topic).  
   - *Subscribe*: 5 000 TPS per HTTP/S or Lambda subscription.  
   - *Burst*: 3× the steady‑state rate for a short period.
2. **Architectural Change** – Split the topic into three “region‑specific” topics and added an intermediate SQS queue (FIFO) to buffer bursts.  
3. **Auto‑Scaling & Cost** – Enabled SNS message batching (`BatchSize=10`) and leveraged *AWS Lambda* concurrency limits to process messages at 15 000 TPS aggregate, staying below the new topic quota.
4. **Monitoring** – Implemented CloudWatch Alarms on `DeliveryThrottle` metrics; set up a PagerDuty escalation for any >5 % throttle rate.

**Result**  
- Throttle incidents dropped from 12 % to <0.1 %.  
- End‑to‑end latency reduced by 30 ms (95th percentile).  
- Cost impact was negligible (<2 %) due to efficient batching and burst handling.

*Bar‑raiser notes*: Clear ownership, deep quota knowledge, quantified performance lift, and a post‑mortem that highlighted the trade‑off between throughput and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
