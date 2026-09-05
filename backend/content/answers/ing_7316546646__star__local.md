---
qid: ing_7316546646__star__local
question: 'Explain: Availability in numbers — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 351
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:17:47-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that handled 10 M page views per day. The existing batch model had an SLA of 99.5% availability, but our marketing team demanded near‑continuous service because even a one‑hour outage meant losing millions in sales.

**Task:**  
I needed to redesign the inference pipeline so it could hit at least 99.9% availability while keeping latency under 200 ms and staying within our $2 k/month budget.

**Action:**  
First, I split the model into two tiers: a lightweight “warm” model on a single GPU instance for instant responses and a heavier “cold” model on an autoscaling cluster. I wrapped both behind a weighted load balancer (AWS ALB) that monitored health checks every 10 s and shifted traffic to the warm tier during failover. To guarantee persistence, I used a Redis cache with a 2‑minute TTL for predictions that had been computed within the last minute. Finally, I set up CloudWatch alarms to trigger an auto‑scale policy that spun up additional instances when CPU >70% or latency >150 ms.

**Result:**  
The new architecture achieved 99.93% availability over a six‑month period, cutting missed revenue by ~$1.2 M per month compared to the legacy system. I also learned how balancing compute cost against SLA can be guided by real‑time metrics and automated scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
