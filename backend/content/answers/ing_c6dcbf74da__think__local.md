---
qid: ing_c6dcbf74da__think__local
question: Design the memory and personalisation layer for an assistant serving millions
  of users. What do you store, when do you summarise versus retrieve, and how do you
  evaluate memory quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 582
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:05:15-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “memory” here?*  – Long‑term user facts (preferences, history) vs. short‑term context (current session).  
- *Scale:* millions of users → data per user must be tiny but rich enough for personalization.  
- *Privacy constraints:* GDPR/CCPA → store only what’s needed and allow deletion.  

**2️⃣ Mental model / framework**  
Use a two‑layer architecture:  
- **Core memory store** (e.g., key‑value DB, vector index) holding compressed user embeddings + explicit facts.  
- **Working context buffer** (in‑memory cache) for the active conversation.  
Decide *when* to pull from core vs. keep in working buffer based on recency & relevance thresholds.

**3️⃣ Step‑by‑step reasoning**  

| Stage | What to store | When to summarize vs retrieve | Evaluation criteria |
|-------|---------------|------------------------------|---------------------|
| **Interaction** | Raw utterance, system reply, extracted entities | Immediately store raw data; schedule summarization after N turns or at session end. | Latency < 200 ms. |
| **Summarization** | Compact vector + key facts (e.g., “likes Italian”, “prefers concise”) | Trigger on: user says “I want to plan a trip” → summarize travel prefs; or nightly batch job. | BLEU/ROUGE against human‑written summaries, factual consistency checks. |
| **Retrieval** | Query vector + filters (time window, topic) | On new request, first look in working buffer; if stale or missing, fetch from core using similarity search. | Retrieval precision > 0.85 on held‑out queries. |

- **Storage format:**  
  - *Structured facts* → relational/graph DB for fast joins.  
  - *Embeddings* → vector index (FAISS/HNSW) for semantic recall.  

**4️⃣ Common traps to avoid**  
- Storing raw text → privacy violations & bloat.  
- Over‑aggressive summarization → loss of nuance.  
- Relying solely on embeddings → hallucinations; always pair with explicit facts.  
- Forgetting cache eviction policies → memory leak.

**5️⃣ Sanity‑check & communicate**  
- Run a pilot: 10k users, log recall accuracy and user satisfaction.  
- Explain to stakeholders: “We keep only what the user explicitly shares or we infer via safe summarization; everything else is purged.”  
- Iterate: adjust thresholds, retrain summarizer, monitor drift.

This structured approach lets you balance personalization depth with storage efficiency and privacy at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
