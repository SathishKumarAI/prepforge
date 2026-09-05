---
qid: ing_37f9a20775__star__local
question: 'Explain: Beyond single-shot: agentic RAG and GraphRAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 391
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:18-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had an internal knowledge base of regulatory documents that was growing faster than our search engine could index. Clients were asking for up‑to‑date compliance answers during live support sessions, and the latency of retrieving relevant snippets from static RAG (Retrieval Augmented Generation) caused many SLA breaches.

**Task** – I needed to redesign the retrieval pipeline so it could proactively surface new documents and understand relationships between regulations without waiting for a user query. The goal was to cut response time by 70% and reduce manual curator effort.

**Action** – First, I built an *agentic RAG* layer: a lightweight scheduler that watches the document repo, runs a summarization model on newly added PDFs, and automatically updates the vector store with embeddings linked to metadata tags. Next, I introduced *GraphRAG*: we modeled regulations as nodes in a knowledge graph, with edges representing citations and dependencies. Using Neo4j and a custom Cypher query engine, the retrieval agent could traverse this graph to fetch not just direct matches but also related clauses that might affect a user’s question. Finally, I integrated these layers into our existing LangChain pipeline so the LLM could reason over both vector similarity and graph context.

**Result** – The new system cut average response latency from 2.5 s to 0.7 s (a 72% improvement). Support tickets dropped by 45%, and we eliminated two full‑time curators, saving $120k annually. I learned that combining agentic scheduling with graph semantics turns a passive RAG into an active, context‑aware assistant—essential for high‑stakes domains like compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
