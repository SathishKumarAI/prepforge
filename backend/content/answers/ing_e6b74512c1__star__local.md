---
qid: ing_e6b74512c1__star__local
question: 'Explain: GraphRAG (Structured context) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 362
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:29-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an AI‑powered compliance assistant to scan transaction logs and flag suspicious activity. The raw data was highly structured: user IDs, timestamps, geolocations, and nested transaction metadata stored in a graph database (Neo4j). Our existing Retrieval Augmented Generation (RAG) pipeline worked fine for unstructured documents but struggled to surface the right contextual facts from the graph.

**Task:**  
I had to design a GraphRAG system that could take a natural‑language query, retrieve relevant subgraphs, and feed them into a language model so it could generate precise compliance explanations and risk scores.

**Action:**  
1. Parsed user queries with spaCy to extract entities (account numbers, dates).  
2. Queried Neo4j using Cypher to pull the minimal subgraph around those entities—neighbors up to depth 3—to keep context concise.  
3. Serialized the subgraph into a JSON‑encoded “structured prompt” that the LLM could ingest as structured data, preserving node types and relationships.  
4. Wrapped the prompt in a custom template and passed it through OpenAI’s GPT‑4 Turbo with instruction tuning to prioritize factual accuracy over verbosity.  
5. Implemented caching of frequent subgraphs via Redis to reduce latency.

**Result:**  
The new GraphRAG pipeline cut response time from 12 s to 3 s on average, while the compliance team reported a 45 % reduction in false positives. I learned that marrying graph retrieval with structured prompts gives LLMs a strong grounding in factual context, turning noisy raw data into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
