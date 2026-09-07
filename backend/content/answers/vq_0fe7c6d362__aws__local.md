---
qid: vq_0fe7c6d362__aws__local
question: Do you prefer spending holidays with family or friends?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 371
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:58-05:00'
sources: []
---

**Situation** – When I was leading the *Holiday Planner* MVP for our internal HR tool, I had to choose a launch strategy that balanced team morale with business impact.  
**Task** – My goal was to deliver a feature that let employees plan holidays with either family or friends while keeping the platform’s uptime above 99.9% and cost under $5k/month.

**Action** – I adopted **Ownership** by mapping user journeys for both “family” and “friend” calendars, then used **Dive Deep** to analyze usage logs: 68 % of employees preferred family‑centric plans (average 3.2 invites) versus 32 % friend‑centric (1.8 invites).  
I designed a multi‑tenant DynamoDB schema with TTL for invites, backed by Lambda functions triggered on invite creation. For high availability I deployed across two AZs and enabled **Auto Scaling** on API Gateway. Cost was kept low by leveraging **AWS Free Tier** for the first 10 k requests and using Spot Instances for batch analytics.

**Result** – The feature launched in 4 weeks, with a 47 % increase in holiday bookings (from 1,200 to 1,760 users) and a 0.8 % drop in support tickets related to scheduling conflicts. Employees reported higher satisfaction scores (+12 pts on the annual pulse survey).  

**Learning** – I realized that listening to user data early (Dive Deep) can reveal unexpected priorities—family over friends—and that owning the end‑to‑end experience drives tangible business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
