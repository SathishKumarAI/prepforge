---
qid: vq_3595e7fc5e__aws__local
question: What’s your favorite hobby, and how did you get into it?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:41-05:00'
sources: []
---

**Situation / Task**  
I’ve been an avid cyclist for the past eight years. My goal was to turn a casual weekend ride into a measurable fitness and community‑building habit that could be tracked, optimized, and shared.

**Action**  
1. **Data‑driven tracking:** I built a lightweight Lambda pipeline (Python) that pulls daily Strava GPS data via the API, normalizes it in DynamoDB, and stores metrics (distance, elevation, heart rate).  
2. **Insight & Optimization:** Using QuickSight dashboards I visualized weekly trends, identified performance plateaus, and scheduled training blocks accordingly—similar to how we A/B test feature rollouts on AWS.  
3. **Community engagement:** I created a small SQS‑driven notification system that posts route highlights to a Slack channel, fostering peer accountability.

**Result**  
- Increased average weekly mileage from 30 mi to 75 mi in six months (a 150 % lift).  
- Reduced average ride time by 12 %, showing improved efficiency.  
- Built a community of 120 active riders who now share insights and compete monthly, driving a 40 % increase in event participation.

**Leadership Principles Reflected**  
- **Customer Obsession / Ownership:** I treated my body as the “customer,” obsessively gathering data to deliver personalized results.  
- **Dive Deep & Bias for Action:** Built end‑to‑end AWS services from scratch, iterating quickly based on real metrics.

*What a bar‑raiser hears:* clear ownership of the hobby’s transformation, deep technical dive into data pipelines, quantifiable impact, and continuous learning from each training cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
