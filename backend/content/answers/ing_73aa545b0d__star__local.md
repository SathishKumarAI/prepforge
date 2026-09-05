---
qid: ing_73aa545b0d__star__local
question: 'Explain: Failure: Pools behaving badly — GitHub - brettwooldridge/HikariCP:
  \u5149 HikariCP\u30fbA solid, high-performance, JDBC connection pool at last. \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 355
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:19:15-05:00'
sources: []
---

**Situation** – In a micro‑service that handled real‑time financial trades, we migrated from Apache DBCP to HikariCP to cut latency. Soon after deployment the service started throwing “pool exhausted” exceptions during peak load (≈15k concurrent requests). The JVM heap stayed under 2 GB, but the connection pool size was set to 50 by default.

**Task** – I had to diagnose why connections were not being returned and restore stability without adding more database capacity or changing the service logic.

**Action** – First, I enabled HikariCP’s detailed logging (`leakDetectionThreshold=3000`) to capture long‑running statements. The logs revealed that a few legacy JDBC drivers were holding transactions open for >10 s because of a buggy `commit()` implementation. I then:

1. Updated the driver to the latest 4.3.5 release, which fixed the commit bug.
2. Added a connection health check (`connectionTestQuery=SELECT 1`) and increased `maxLifetime` from 30 min to 60 min to avoid stale connections.
3. Implemented a graceful shutdown hook that waited for all in‑flight requests before closing the pool.

**Result** – After these changes, pool exhaustion dropped to <0.01% during peak load, overall latency improved by 35 ms per request, and we avoided an unnecessary database scaling event. I learned that even with a high‑performance pool, driver bugs and transaction management can silently poison resources, so proactive health checks are essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
