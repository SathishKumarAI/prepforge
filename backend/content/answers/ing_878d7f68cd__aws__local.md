---
qid: ing_878d7f68cd__aws__local
question: 'Explain: Domain name system — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 586
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:40-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a highly‑available DNS layer for a global SaaS platform that serves 10 M+ queries per day with <50 ms latency and zero single point of failure.

**Action**  
1. **Requirements & Trade‑offs** –  
   * Scale: ≥ 15 k RPS, 99.999% uptime.  
   * Geo‑routing: direct users to the nearest edge.  
   * Fast TTL updates (≤ 5 s).  
2. **Design** –  
   * **Route 53** as the authoritative resolver; it is globally distributed and fully managed by AWS.  
   * Store zone data in a **DynamoDB Global Table** (replicated across 3 AZs) for low‑latency reads and instant propagation of TTL changes.  
   * Use **Lambda@Edge** to add custom logic (e.g., A/B testing, feature flags).  
   * Cache responses at CloudFront edge caches with a small TTL (30 s) to absorb spikes.  
3. **Scalability & Availability** –  
   * DynamoDB auto‑scales read capacity; with 5 k RPS it stays under 10 % CPU usage, keeping costs <$200/month.  
   * Route 53’s internal replication guarantees no single point of failure and provides 100 µs latency globally.  
4. **Cost & Optimization** –  
   * Query cost: $0.40 per million queries → ~$4k/month for 10 M QPS.  
   * DynamoDB storage <$30/month; Lambda@Edge invocations negligible at 5 % of traffic.  

**Result**  
Achieved <35 ms average latency, 99.999% availability, and a 70 % reduction in DNS‑related incidents compared to the legacy on‑prem solution. The system handled 20 M QPS during peak events with zero downtime.

---

### Leadership Principles Highlighted
- **Customer Obsession** – ensured ultra‑low latency and reliability for end users worldwide.  
- **Ownership & Dive Deep** – chose AWS services that give granular control, monitored metrics, and iterated on TTLs to balance freshness vs cost.  

> *Bar‑raiser focus*: clear ownership of design decisions, data‑driven impact (latency, cost), deep dive into trade‑offs, and learning from the previous failure‑prone system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
