---
qid: ing_65d6e3943d__star__local
question: 'Explain: Data & context strategy — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 322
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a recommendation engine for an e‑commerce platform that had been lagging behind competitors: click‑through rates were only 2% and conversion dropped by 15% after the previous model update.

**Task** – My goal was to redesign the data ingestion pipeline and context layer so the AI could understand user intent, inventory freshness, and seasonal trends in real time, thereby boosting CTR to at least 4% within six months.

**Action** – I started with a “data & context map”: we catalogued every source (user logs, product catalogs, promotion calendars, weather APIs) and defined relevance windows. We built an event‑driven ingestion layer on Kafka, enriching raw events with contextual tags via Spark Structured Streaming. For the model, we switched to a graph neural network that could traverse user–item relationships while incorporating dynamic context nodes (e.g., “holiday season” or “out‑of‑stock”). I also introduced a lightweight metadata service that cached recent inventory status, reducing latency from 120 ms to 30 ms.

**Result** – Within five months the CTR jumped to 4.2%, conversion increased by 18%, and we cut server costs by 12% thanks to more efficient inference. The key lesson: treating data as a living, context‑aware ecosystem is far more powerful than static feature sets alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
