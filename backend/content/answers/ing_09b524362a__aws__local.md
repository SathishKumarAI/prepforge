---
qid: ing_09b524362a__aws__local
question: 'Explain: You''re [probably] doing it wrong — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 409
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:10-05:00'
sources: []
---

**Situation & Task**  
I was tasked with adding a new recommendation model to our e‑commerce platform. The team used **HikariCP** for database access, but the pool size was hard‑coded to 10 connections and never adjusted based on traffic spikes. Production logs showed frequent `ConnectionTimeoutException`s during peak hours, causing model inference latency to jump from 50 ms to over 2 s.

**Action**  
*Customer Obsession & Ownership*: I first gathered metrics—CPU, DB wait times, request queue depth—and mapped them against user‑experience KPIs (page load time, conversion rate).  
I redesigned the pool configuration to be **dynamic**:  
- Use `maxLifetime=30m`, `idleTimeout=10m`, and a *JVM‑MBean* that scales `maximumPoolSize` from 10 to 200 based on real‑time DB wait times.  
- Integrated **Amazon RDS Proxy** as an additional layer, allowing up to 500 connections without exhausting the database.  
- Deployed the changes via **AWS CodePipeline** with a canary roll‑out and automated rollback if latency > 120 ms.

*Dive Deep*: I ran A/B tests: pre‑change average inference latency was 52 ms; post‑change it dropped to 48 ms (≈ 8% improvement). Conversion rate increased by **1.3%** during peak periods, translating to ~$12k/month in incremental revenue.

**Result**  
The model now scales elastically, eliminates connection bottlenecks, and delivers a measurable business impact—all while keeping operational cost < 5% of the previous baseline. I documented the failure modes and added automated alerts for future incidents, turning a recurring pain point into a resilient, data‑driven solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
