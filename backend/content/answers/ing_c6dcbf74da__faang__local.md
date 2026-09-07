---
qid: ing_c6dcbf74da__faang__local
question: Design the memory and personalisation layer for an assistant serving millions
  of users. What do you store, when do you summarise versus retrieve, and how do you
  evaluate memory quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 604
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:23:12-05:00'
sources: []
---

**Clarify**  
We’re building a long‑term personal‑assistant memory that serves millions daily. The core questions:  
1) *What* user data is persisted (preferences, context, history)?  
2) *When* do we write raw events vs. summarize them?  
3) *How* do we gauge if the stored “memory” still reflects the user’s intent?  

Assumptions to confirm: privacy constraints (e.g., GDPR), storage limits per user, acceptable latency for recall, and the expected retention window (weeks vs. years).

---

**Approach**  
1. **Event stream ingestion** → raw logs of interactions (text, voice, actions).  
2. **Tiered storage**:  
   *Level‑0*: immediate, immutable event log (audit & rollback).  
   *Level‑1*: short‑term key‑value store (in‑memory cache) for the last 48 h.  
   *Level‑2*: summarized vector embeddings + metadata in a vector DB.  
3. **Summarization policy**: after every *n* events or when semantic drift is detected, run an RL‑guided summarizer that compresses to ≤ 1 KB while preserving intent.  
4. **Quality gate**: periodically re‑query the raw log with the same prompts; if recall accuracy < X%, trigger re‑summarization.

---

**Depth**  
- Store *user intents* (e.g., “book flights”), *preferences* (seat type, airline), and *contextual cues* (time of day).  
- Use a *dual‑encoder* (BERT + GPT‑style) to generate dense embeddings for quick similarity search.  
- Maintain a *versioned log* so we can roll back or audit changes.  
- Evaluate memory quality via **Recall@k** on held‑out prompts and **User Satisfaction Scores** from A/B tests. Complexity: retrieval O(log N) per query; summarization O(E) where E = number of events since last summary.

---

**Edge Cases**  
- Rapid user preference flips → drift detection must trigger immediate re‑summarization.  
- Privacy revocation → hard delete all levels for that UID.  
- Data sparsity (new users) → fall back to global defaults and bootstrap from short‑term cache.

---

**Optimize & Communicate**  
- Compress embeddings with product quantization to reduce storage by 10×.  
- Cache the top‑k most frequent intents per user in a CDN‑edge store for sub‑millisecond latency.  
- Present my design in a diagram: event → tiered store → summarizer ↔ quality gate.  
- Emphasize that this pipeline balances **accuracy**, **privacy**, and **cost** while enabling real‑time personalization at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
