---
qid: ing_a4580624fa__aws__local
question: 'Explain: Current openings at Together AI — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 420
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:59-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** When I joined the recruiting team for a fast‑growing AI startup, I noticed hiring was lagging behind product velocity—critical roles stayed vacant longer than the industry average (≈ 45 days vs. 20 days).  
> **Task:** Re‑engineer the “Open Positions” pipeline to surface real-time demand and accelerate fills without sacrificing quality.  
> **Action:**  
> *Built a lightweight microservice on **AWS Lambda** + **API Gateway** that pulls role metadata from our internal HR system, enriches it with skill tags (NLP on job descriptions), and exposes a GraphQL endpoint.  
> *Integrated **Amazon DynamoDB** for low‑latency reads/writes and **SNS** to notify hiring managers when a vacancy exceeds 30 days.  
> *Implemented a Slack bot that posts daily “Hiring Heatmap” dashboards, powered by **QuickSight**, giving recruiters visibility on bottlenecks.  
> *Introduced a quarterly “Open Position Health Review” (Owners: Hiring Manager + People Lead) to close gaps proactively.  
> **Result:** Vacancy turnaround dropped from 45 days to 18 days (60% reduction), and time‑to‑hire improved by 35%. The bot is now used by 90 % of hiring managers, and the data feeds into our quarterly Talent Strategy review.

**Bar‑raiser cues I’d listen for**

* Demonstrated ownership: owning end‑to‑end flow from data ingestion to alerts.  
* Dive deep: using Lambda + DynamoDB trade‑offs (latency vs. cost).  
* Quantified impact: days reduced, percent improvement.  
* Learning loop: pivoted from manual spreadsheets to an automated pipeline after early feedback on false positives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
