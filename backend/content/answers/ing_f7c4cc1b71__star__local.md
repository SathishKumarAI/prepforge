---
qid: ing_f7c4cc1b71__star__local
question: 'Explain: Tier 2: Episodic Memory (L2) — Memory Architectures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 355
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:44:17-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑powered customer support chatbot that needed to remember user preferences across sessions (e.g., preferred contact times, product interests). Our existing L1 cache‑style embeddings were fast but couldn’t capture the sequence of past interactions or context depth.  

**Task** – I was tasked with designing a Tier 2 episodic memory layer that could store and retrieve full interaction histories in a scalable way while keeping query latency under 200 ms for 95% of requests.

**Action** – I chose a hybrid architecture: a graph‑based storage engine (Neo4j) for relational episodes, coupled with an approximate nearest neighbor index (FAISS) on compressed session vectors. Each user interaction was encoded into a vector via BERT fine‑tuned on our chat logs, then stored as a node linked to previous nodes by “followed_by” edges. For retrieval, I used FAISS to fetch the top‑k most similar episode embeddings and traversed the graph to reconstruct the exact sequence. To keep latency low, I maintained an in‑memory cache of the last 50 episodes per user and offloaded older data to S3 with a TTL policy.

**Result** – The new Tier 2 memory reduced response lag from 350 ms to 140 ms on average and improved user satisfaction scores by 12% (NPS +4). I learned that combining vector similarity search with relational graph queries can deliver both speed and rich context in real‑time AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
