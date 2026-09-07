---
qid: ing_59382b2808__aws__local
question: 'Explain: Hard — Amazon Simple Notification Service endpoints and quotas
  - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 423
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:41-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning our real‑time alert system for the e‑commerce platform. The existing solution used a single SNS topic that pushed millions of messages per day to dozens of Lambda functions. We hit **topic message limits (1 000 000 per topic)** and **delivery rate throttles (10 000 msgs/s)**, causing SLA violations during flash sales.

**Action**  
*Ownership & Dive Deep*: I mapped the traffic profile (peak 3 M messages/second) and discovered that many notifications were fan‑out to unrelated services.  
I split the topic into **“Order‑Placed”**, **“Inventory‑Low”**, and **“Promotions”** SNS topics, each with its own *dedicated* subscription set. For high‑volume streams I enabled **FIFO topics** (allowing up to 300 msgs/s per partition) and used **Message Group IDs** to preserve ordering where needed.  
I also introduced **SNS Topic Policies** to enforce IAM restrictions, reducing accidental cross‑topic publishing.  
To stay within the **max topic count quota (100)** I leveraged **AWS Organizations** to create a separate *notification* account with its own set of topics, then used **cross‑account SNS subscriptions**.

**Result**  
- Reduced per‑topic traffic by 70 %, keeping each under its delivery rate limit.  
- Cut alert latency from 2 s to <200 ms during peak periods (measured via CloudWatch metrics).  
- Eliminated SLA breaches in the last year, saving ~\$120k in potential penalties.  

**Learning & Bar‑raiser Insight**  
I learned that *“one size fits all”* topics can throttle growth; partitioning by domain + FIFO ordering is a scalable pattern. The bar‑raiser will hear my proactive ownership, deep metric analysis, and the quantified cost savings—hallmarks of an Amazonian engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
