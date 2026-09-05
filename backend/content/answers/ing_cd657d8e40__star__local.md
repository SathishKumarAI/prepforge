---
qid: ing_cd657d8e40__star__local
question: 'Explain: Agency Levels — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 394
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:19:54-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an autonomous trading bot that had to react to market micro‑fluctuations while staying compliant with regulatory limits. The existing system was a single monolithic script that made all decisions in one place, causing slow reaction times and making it hard to audit each decision.

**Task**  
I needed to refactor the architecture into distinct agency levels—perception, deliberation, action—so we could parallelize perception, apply policy constraints at the deliberation layer, and decouple execution. The goal was a 30 % faster response time and a clear audit trail for compliance.

**Action**  
1. **Perception Layer:** Implemented a streaming Kafka consumer that ingested market data in microseconds and fed it into an in‑memory Redis cache.  
2. **Deliberation Layer:** Built a lightweight policy engine using the Drools rule system to evaluate trade signals against risk limits, with each rule assigned a confidence score. I also introduced a Monte Carlo simulation module to estimate expected returns before committing.  
3. **Action Layer:** Created an asynchronous executor that signed orders via a secure HSM and sent them through a priority queue. Each action was logged with a UUID linked back to the originating deliberation decision.  
4. **Monitoring & Auditing:** Added Grafana dashboards that visualized latency across layers and stored all decisions in a PostgreSQL audit table.

**Result**  
The new multi‑layered agent architecture cut order‑to‑execution latency from 200 ms to 140 ms—an 30 % improvement—and made compliance reviews 80 % faster because each decision path is traceable. I learned that separating agency levels not only boosts performance but also brings modularity and accountability, which are critical in regulated AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
