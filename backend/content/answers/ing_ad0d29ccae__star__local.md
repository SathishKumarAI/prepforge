---
qid: ing_ad0d29ccae__star__local
question: 'Explain: Graphiti vs. GraphRAG — GitHub - getzep/graphiti: Build Real-Time
  Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 383
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:21-05:00'
sources: []
---

**Situation** – At my last role I was tasked with improving the AI assistant that powered our internal helpdesk. The existing chatbot could answer FAQs but struggled with contextual follow‑ups and required manual knowledge base updates.

**Task** – I needed to replace the monolithic FAQ system with a real‑time, query‑driven knowledge graph that could ingest new documents on the fly and support retrieval‑augmented generation (RAG).

**Action** – First I evaluated two open‑source options: *Graphiti* from getzep/graphiti and *GraphRAG*. Graphiti offers an event‑driven pipeline where every document ingestion triggers incremental embeddings in Neo4j, automatically updating relationships. It’s great for live data streams but requires a separate graph DB layer. GraphRAG, on the other hand, bundles a lightweight vector store with a retrieval module that can be plugged into any LLM; it’s easier to spin up locally but lacks real‑time update hooks. I built a hybrid prototype: using Graphiti to ingest incoming ticket logs into Neo4j, then queried that graph via GraphRAG’s retriever to feed the GPT model. I tuned the embedding dimensionality (768) and set a 5‑second latency SLA for updates.

**Result** – The new system cut answer latency from ~3 s to <1 s and increased correct response rate by 27% (from 68% to 88%). It also eliminated manual knowledge base maintenance, saving ~12 person‑hours per week. I learned that choosing between a full graph stack and a lightweight RAG depends on data freshness needs; combining them can yield the best of both worlds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
