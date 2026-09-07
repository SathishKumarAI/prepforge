---
qid: vq_d373fc83be__aws__local
question: What’s the hottest or coldest day you remember?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 444
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:09-05:00'
sources: []
---

**Situation / Task**

When I was a junior developer on a global weather‑alerting platform, we had to roll out a new “Extreme Weather” feature that flagged days exceeding historical temperature thresholds. One of our early test cases was the hottest day in Seattle (42 °C) and the coldest day in Anchorage (-28 °C). My team’s goal: ensure alerts fired correctly within 5 seconds for every user, regardless of geography.

**Action**

I led a **Dive Deep** audit of the event‑processing pipeline.  
- Replaced the legacy batch job with an **Amazon Kinesis Data Stream** that ingests raw sensor data in real time.  
- Implemented **AWS Lambda** functions to evaluate thresholds and push alerts to **SNS topics** per region.  
- Added a DynamoDB table for idempotent deduplication, indexed by `userId+timestamp`.  
- Configured CloudWatch Alarms on Lambda error rates; added an Auto Scaling policy for Kinesis shards.

I also set up a **customer‑obsession** loop: logged the first 100 alerts to a test cohort and sent them a quick survey. Their feedback drove a UI tweak that reduced perceived latency by 30 ms.

**Result**

The new pipeline processed 1,200+ extreme‑weather events daily with <5 % error rate, cutting alert delivery time from ~12 s to **2 s**—a 83 % speedup. Cost decreased by 25 % due to event‑driven scaling. Post‑deployment, the feature prevented 3 potential data‑loss incidents during a recent heatwave.

**Learnings**

Ownership: I owned end‑to‑end reliability, not just code.  
Dive Deep: Profiling revealed that sharding Kinesis was the bottleneck; addressing it saved us $4K/month.  
Bar‑raiser check: The solution demonstrated measurable impact, resilience at scale, and a culture of continuous customer feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
