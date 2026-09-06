---
qid: ing_07d6075ed8__think__local
question: 'Explain: Time-Series Databases — 15 Types of Databases and When to Use
  Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 390
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:13:47-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *Scope*: We’re discussing databases that handle time‑series data (TSDBs).  
   - *Assumptions*: The audience knows basic DB concepts; they want a high‑level comparison, not deep technical details.

**2. Adopt a classification framework**  
   - Group the 15 databases by **primary use case**: analytics/BI, real‑time monitoring, IoT/edge, financial tick data, etc.  
   - For each group list key traits (schema flexibility, compression, ingestion rate, query language, ecosystem).

**3. Step‑by‑step reasoning**  
   1. List the 15 databases and a one‑sentence tagline.  
   2. Map each to its target scenario using the framework.  
   3. Highlight distinguishing features that influence choice (e.g., InfluxDB’s downsampling vs. TimescaleDB’s PostgreSQL compatibility).  
   4. Show trade‑offs: write throughput vs. query complexity, open source vs. commercial support.

**4. Avoid common traps**  
   - Don’t overstate “best” – emphasize context matters.  
   - Don’t mix up general-purpose DBs that support time series (e.g., PostgreSQL) with purpose‑built TSDBs.  
   - Beware of outdated performance claims; reference recent benchmarks.

**5. Sanity‑check & communicate**  
   - Verify each database’s latest release and feature set.  
   - Summarize in a clear table or diagram.  
   - End with practical guidelines: start with an open‑source, community‑supported TSDB for prototyping, then evaluate scale‑up needs (e.g., Prometheus + Cortex for horizontal scaling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
