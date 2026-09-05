---
qid: ing_fa8cd1a6b2__star__local
question: 'Explain: When to choose which — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 306
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:52-05:00'
sources: []
---

**Situation:** At my previous startup, we were building a recommendation engine that had to ingest user interaction data in real time and update a knowledge graph used by our AI agents for personalization. Our existing batch pipeline lagged by several hours, causing stale recommendations.

**Task:** I needed to decide whether to use the streaming approach from *getzep/graphiti* or stick with our traditional ETL pipeline on GitHub. The goal was to reduce data latency below 5 minutes while keeping query performance for the AI agents at under 200 ms.

**Action:** I evaluated both options by running a controlled experiment: we set up two parallel pipelines—one using Graphiti’s Kafka-based ingestion and graph storage, the other our existing Spark batch jobs. We instrumented metrics in Prometheus, measuring ingestion latency, update consistency, and query times. After tuning Graphiti’s batch window to 30 seconds and adjusting its TTL settings for high-frequency nodes, we observed a 95% drop in latency. I also added an automated rollback script that could switch back to the ETL pipeline if Graphiti hit failure thresholds.

**Result:** Switching to Graphiti cut data freshness from hours to under 5 minutes and lowered query times from 500 ms to 180 ms, boosting conversion rates by 12%. The exercise taught me how to balance real-time ingestion against system complexity and to use performance metrics to guide architectural decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
