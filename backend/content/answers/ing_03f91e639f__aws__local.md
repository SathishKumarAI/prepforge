---
qid: ing_03f91e639f__aws__local
question: 'Explain: Disadvantage(s): DNS — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 373
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:34-05:00'
sources: []
---

**Disadvantage(s) of DNS (Domain Name System)**  
*Leadership Principles: Ownership & Dive Deep*

> **Situation** – In a global e‑commerce platform we ran into 4xx/5xx errors that were hard to trace because the origin was hidden behind a public DNS resolver.  
> **Task** – Own the incident, identify root causes, and engineer a more resilient naming strategy.  
> **Action** –  
> 1. **Profile traffic** with *Route 53* + *CloudWatch* to capture query latency and error rates.  
> 2. Deploy **Private Hosted Zones** for internal services; this eliminates exposure to external resolvers and removes the “DNS amplification” attack surface.  
> 3. Implement **TTL tuning**: short TTL (60 s) for highly dynamic records, long TTL (86400 s) for stable ones—balancing cache hit rate vs. propagation delay.  
> 4. Add **Health Checks** that automatically failover to secondary endpoints when a primary DNS record becomes unreachable.  
> 5. Store critical domain data in **DynamoDB** and generate CNAMEs on‑demand via Lambda, reducing reliance on static DNS entries.  
> **Result** – Reduced DNS‑related incident time by **70 %**, cut mean‑time‑to‑detect from 12 h to 15 min, and saved ~$8K/month in avoided downtime.  

*Bar‑raiser signals:* clear ownership of the problem, deep dive into metrics, measurable impact, and a learning loop that turned a vulnerability into a cost‑saving architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
