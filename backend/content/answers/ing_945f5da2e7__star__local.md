---
qid: ing_945f5da2e7__star__local
question: 'Explain: Using Graphiti with Google Gemini — GitHub - getzep/graphiti:
  Build Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 334
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:40-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with improving the recommendation engine for a streaming platform that had about 2 million active users and 500k content items. The existing model suffered from stale knowledge graphs and lagged behind user interactions.

**Task:**  
I needed to build a real‑time, scalable knowledge graph that could ingest new user actions instantly and feed them into Google Gemini’s language model for personalized prompts, all while keeping latency under 200 ms per request.

**Action:**  
I chose Graphiti (the getzep/graphiti library) because of its efficient in‑memory storage and support for streaming updates. I set up a Kafka stream to capture user events, then wrote a lightweight Rust microservice that consumes the stream, converts events into triples, and writes them to Graphiti’s graph store. To keep memory usage low I enabled the “compact mode” and used LRU eviction for rarely‑accessed nodes. For inference, I wrapped Gemini’s API in an async Node.js layer that queries Graphiti on demand, then feeds the resulting subgraph as context into Gemini’s prompt. I also added a health‑check endpoint to monitor query latency.

**Result:**  
The new system reduced recommendation latency from 1.2 s to 120 ms and increased click‑through rate by 18% within two weeks of rollout. I learned how to balance in‑memory graph performance with real‑time data ingestion, and the importance of monitoring latency at every hop in an AI pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
