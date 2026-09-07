---
qid: ing_569407bb6f__aws__local
question: 'Explain: Paper flash cards — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 416
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:01-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at my previous company to build a *Paper Flash Card* app that used **spaced‑repetition** (SR) from the Wikipedia algorithm for high‑impact learning. The goal was to increase user retention by 30 % while keeping infrastructure cost under $0.05 per active card.

**Action**  
- **Customer Obsession & Ownership:** Conducted deep customer interviews, mapping the pain points of traditional flash‑card workflows.  
- **Dive Deep into Data:** Tracked inter‑visit intervals and quiz scores; built a Bayesian decay model to predict optimal review times.  
- **Design & AWS Services:**  
  - *Amazon DynamoDB* for card metadata (O(1) reads).  
  - *AWS Lambda + EventBridge* to trigger SR calculations every 24 h, writing back next‑review timestamps.  
  - *Amazon Pinpoint* for push notifications at scheduled times.  
  - *CloudWatch Alarms* on latency and error rates.  
- **Bias for Action & Deliver Results:** Deployed a pilot with 5,000 users; after two weeks, retention jumped from 55 % to 84 % (p<0.01). Cost per active card stayed at $0.032.

**Result**  
The SR‑powered flash‑card feature grew daily active users by 42 % and was later adopted company‑wide as the standard learning module. I documented lessons on scaling DynamoDB throughput for peak exam periods, reducing cold starts in Lambda, and the trade‑off between push notification frequency and battery life.

*Bar‑raiser signals:* clear ownership of metrics, deep dive into user behavior, quantified uplift, and a post‑mortem that identified latency bottlenecks and cost optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
