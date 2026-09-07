---
qid: ing_7318e6fc5e__aws__local
question: 'Explain: Lower Latency — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:53-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our global e‑commerce image pipeline that was throttling checkout latency by ~120 ms per request. The goal: drop end‑to‑end response time to <30 ms while keeping cost under 10 % of the current spend.

**Action (Design & Tech)**  
1. **Origin** – Store thumbnails in S3 with intelligent tiering; enable *S3 Transfer Acceleration* for sub‑second uploads from edge regions.  
2. **CDN** – Deploy CloudFront with a *Lambda@Edge* function that rewrites URLs to the nearest regional origin and adds cache‑control headers.  
3. **Cache Strategy** – Use *Cache Based on Selected Request Headers* (User‑Agent, Accept‑Encoding) so mobile users hit compressed assets from the edge.  
4. **Monitoring** – Instrument CloudWatch Alarms on `OriginLatency` & `ErrorRate`; auto‑scale origin workers via ECS Fargate with a 5 min cooldown.

**Result**  
- Latency dropped from **120 ms → 25 ms** (average) across 99th percentile.  
- Cost fell by **17 %** thanks to reduced origin traffic and S3 tiering.  
- Uptime improved: 99.999% availability over 12 months.

**Reflection & Bar‑Raiser Signals**  
I took full *ownership* of the end‑to‑end flow, *dived deep* into CloudFront metrics, and quantified impact with clear KPIs. The failure mode (cache miss on new product uploads) taught me to add a fallback origin route, a lesson I documented in our post‑mortem wiki for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
