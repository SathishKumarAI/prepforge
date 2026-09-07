---
qid: ing_8a474d390e__aws__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 403
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:31-05:00'
sources: []
---

**Situation & Task**  
I led the design of a scalable “home‑timeline” service for a social‑media platform that serves 50 M active users. The goal was to deliver personalized feeds with <200 ms latency while keeping operational costs below $1.2 M/month.

**Action (Technical)**  
1. **Data pipeline** – Ingested user actions into Kinesis Data Streams, processed by Lambda to update a DynamoDB “user‑feed” table.  
2. **Feed generation** – Pre‑computed top 200 posts per user in an S3 bucket; served via CloudFront with signed URLs for privacy.  
3. **Real‑time updates** – Used Amazon SNS topics to push new content to Lambda, which merged into the cached feed and invalidated relevant CloudFront edges.  
4. **Scalability & Availability** – DynamoDB Auto Scaling + global tables ensured 99.999% uptime; CloudFront edge locations cut latency below 120 ms globally.  
5. **Cost control** – Spot Instances for batch recomputation, S3 Intelligent‑Tiering for archive, and Lambda’s pay‑per‑execution model kept spend < $1.2 M/month.

**Result (Data‑driven)**  
- Latency dropped from 350 ms to 180 ms (45% improvement).  
- User engagement on the timeline increased by 27 % (↑ 12 M daily interactions).  
- Cost per served feed reduced by 32 %.

**Learning & Ownership**  
I owned the end‑to‑end architecture, iterated based on A/B testing, and documented failure modes—e.g., a Lambda timeout that caused stale feeds—to refine retry logic. This aligns with **Ownership** (take responsibility) and **Dive Deep** (measure, iterate, improve).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
