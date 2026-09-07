---
qid: ing_f1ee6a84ec__faang__local
question: 'Explain: Design a memory system for a long-running agent: sessions end,
  but the user expects it to remember decisions from weeks ago.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 451
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:05-05:00'
sources: []
---

**Clarify**  
We’re building a *long‑term memory* layer for an AI agent that runs continuously (e.g., a personal assistant). Sessions are short‑lived, but users want the agent to “recall” decisions or preferences made weeks earlier. Key assumptions:  
- Sessions are stateless; we need persistence across restarts.  
- Users may query past decisions or ask for context.  
- The system must respect privacy and comply with data‑retention policies.

**Approach**  
1. **Event stream ingestion** – capture every decision, user utterance, and contextual metadata as events.  
2. **Vectorized storage** – embed each event into a high‑dimensional vector (e.g., using Sentence‑BERT) and store in an ANN index (FAISS/HNSW).  
3. **Temporal tagging** – attach timestamps and session IDs; maintain a lightweight relational table for quick exact lookups.  
4. **Retrieval API** – given a user query, perform semantic similarity search on the vector index, then filter by time bounds or relevance thresholds.

**Depth**  
- *Complexity*: Insertion O(log N) in HNSW; retrieval O(k log N).  
- *Trade‑offs*: Vector indices give fast approximate recall but may miss exact matches; supplement with a small LRU cache of recent events.  
- *Security*: Encrypt vectors at rest, audit logs for access.

**Edge Cases**  
- **Data drift**: embeddings evolve if the model changes → re‑index periodically.  
- **Sparse queries**: very specific past decisions may not be retrieved; fallback to exact timestamp lookup.  
- **Privacy violations**: ensure user consent flags are respected before indexing sensitive data.

**Optimize & Communicate**  
We can shard the vector index by month to keep query latency low and enable differential pruning (delete old events beyond retention). Explain this pipeline to interviewers as a *dual‑layer memory*: an exact, relational layer for precision, backed by a semantic ANN for recall. This satisfies both user expectations and system scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
