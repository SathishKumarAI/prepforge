---
qid: ing_27d1fffdc8__aws__local
question: 'Explain: it the UI teams that were using — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 350
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:51-05:00'
sources: []
---

**Situation & Task**  
While leading the front‑end squad at a streaming startup, we were migrating our legacy monolith into a microservice stack. The UI team had to coordinate with dozens of new services—recommendation, playback, analytics—each evolving independently. We adopted Netflix’s *Mastering Chaos* guide to inject resilience into our user experience.

**Action**  
I championed **Customer Obsession** and **Dive Deep**: we built a chaos‑engineering playground using AWS Fault Injection Simulator (FIS) coupled with Step Functions for orchestrated rollouts. Each UI release triggered FIS experiments that dropped latency or throttled downstream APIs, while CloudWatch metrics fed back into our CI pipeline. We also introduced an *API Gateway* with per‑service circuit breakers, and used Amazon DynamoDB Global Tables to keep session state highly available across regions.

**Result**  
After 3 months of iterative chaos runs, our mean user‑perceived latency dropped from **350 ms to 210 ms** (40% improvement), while the error budget utilization fell below 0.5%. The team’s confidence grew—incident tickets for UI‑related failures reduced by **70%**, and we achieved a 99.95% uptime SLA across all services.

**Learning & Ownership**  
The key takeaway was that *chaos* is not an after‑thought; it must be baked into the release cadence. I documented best practices, created reusable FIS templates, and mentored teammates on interpreting metrics—ensuring ownership of resilience remains a shared responsibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
