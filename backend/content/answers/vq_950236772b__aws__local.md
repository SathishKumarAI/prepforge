---
qid: vq_950236772b__aws__local
question: How often do you use your phone each day?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:04:13-05:00'
sources: []
---

**Situation & Task**

When I joined the product team at Amazon’s Alexa Skills Store, we noticed that users were abandoning skill discovery pages after a short “phone‑only” session. The product owner asked me to investigate how often customers used their phones during an interaction and whether this impacted conversion.

**Action (Dive Deep + Bias for Action)**  

1. **Data Collection** – I built a lightweight telemetry snippet in the Alexa app that recorded device type, screen lock status, and interaction duration.  
2. **Analysis** – Over 10 M sessions, I found that **58 % of users interacted with their phone for more than 30 s per session**, yet only 18 % completed a skill purchase within those sessions.  
3. **Experiment** – Implemented a two‑by‑two A/B test: (a) “Show‑to‑Talk” prompts that reduce screen time, and (b) a lightweight in‑app tutorial for first‑time users.  

**Result (Deliver Results + Ownership)**  

- Sessions with reduced phone usage saw a **+12 % increase in skill purchases** (p<0.01).  
- The tutorial group increased conversion by **9 %** while keeping total session time unchanged, proving that guiding users reduces friction.

**AWS Services & Trade‑offs**

- **Amazon Pinpoint** for event ingestion and segmentation.  
- **Athena + Glue** for cost‑effective ad‑hoc queries (≈$0.05/100 k rows).  
- **S3 + QuickSight** for dashboards visible to stakeholders, keeping latency <2 s.

I own the full loop: from hypothesis to experimentation, data analysis, and feature rollout. The learnings shaped our next release of a “Smart‑Phone‑Friendly” UI that has since lifted overall store revenue by **$1.3M annually**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
