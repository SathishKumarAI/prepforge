---
qid: vq_e036405170__aws__local
question: How often do you watch sports events?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 330
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:04-05:00'
sources: []
---

**Situation / Task**  
In my previous role at a streaming‑media startup, we launched a feature that let users watch live sports events alongside social commentary. The product team needed to understand how often our core audience watched sports so we could tune recommendation algorithms and server capacity.

**Action**  
I owned the data‑collection effort: built a lightweight analytics pipeline in **AWS Lambda** + **Amazon Kinesis Data Streams**, forwarding event logs to **Amazon Redshift** for analysis. I wrote a SQL script that calculated the *average number of sports views per user per month* and surfaced insights weekly. I also set up an **Amazon QuickSight** dashboard so stakeholders could drill down by sport, device type, and time of day.

**Result**  
Within two months we saw a 27 % lift in retention for users who watched live events—our A/B test confirmed that personalized “sports‑bundle” recommendations increased session length from 12 min to 18 min on average. The pipeline handled 3 M events per day with <$0.10/1,000 events cost and <5 s latency, meeting our SLA for real‑time insights.

**Reflection**  
I learned that ownership means not only delivering the solution but also continuously refining it—adding a nightly aggregation job reduced storage costs by 15 %. I’ll bring this *Customer Obsession* + *Dive Deep* mindset to your team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
