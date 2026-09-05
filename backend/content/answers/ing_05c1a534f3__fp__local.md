---
qid: ing_05c1a534f3__fp__local
question: 'Explain: Design an answer engine: a user types a question and gets a cited,
  streamed answer. Your end-to-end budget is 3 seconds to a complete short answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 768
total_tokens: 962
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:36-05:00'
sources: []
---

**Problem statement**  
A human asks a natural‑language query *q*; the system must return a concise, citation‑rich paragraph within **3 s**. The challenge is twofold: (1) *retrieval* – find the most relevant facts fast; (2) *generation* – compose an answer that cites its sources without exceeding the time budget.

---

## 1. Retrieval backbone  

| Layer | Function | Why it matters |
|-------|----------|----------------|
| **Fast inverted index** (Lucene‑style, token‑level) | O( log N ) lookup for candidate documents | Guarantees sub‑50 ms lookup even on billions of tokens |
| **Sparse neural re-ranker** (RoBERTa‑based) | Re‑scores top‑k hits with contextual understanding | Adds semantic depth without the latency of dense retrieval |
| **Caching & pre‑fetching** | Store embeddings for popular queries and warm up GPUs | Eliminates cold‑start overhead |

*Non‑obvious insight*: The sparse re‑ranker can be *fused* into the index via a learned “neural score” stored per posting. This lets us apply deep relevance scoring in constant time, sidestepping GPU calls during live search.

---

## 2. Generation engine  

| Component | Design | Latency control |
|-----------|--------|-----------------|
| **Prompt template** | `Answer the following question. Cite sources.` + top‑k snippets | Fixed text length → predictable token count |
| **Streaming LLM (e.g., GPT‑4o mini)** | Generates tokens on‑the‑fly, streamed to client | Allows early return; user sees answer before 3 s even if generation continues |
| **Beam pruning** | Beam width = 1 (greedy) during live mode | Removes search‑space explosion, keeping <0.5 s per token |

*Non‑obvious insight*: By feeding the LLM *only* the most relevant snippet passages (≤ 200 tokens each), we constrain its internal memory footprint, ensuring that the generation time scales linearly with answer length rather than document size.

---

## 3. End‑to‑end flow (≈ 2.5 s)

1. **Query → Inverted index**: 30 ms  
2. **Top‑k → Re‑ranker**: 80 ms  
3. **Select top‑3 snippets + citations**: 20 ms  
4. **Prompt construction & LLM call**: 1 s (streamed)  
5. **Post‑processing (citation formatting)**: 50 ms  

All steps are asynchronous; the user sees the first sentence within ~1.2 s, and a complete answer with citations by 3 s.

---

## 4. Cost & scaling

* **Compute**: 1 GPU for re‑ranker + 1 GPU for LLM (batch size 8) → ≈ $0.02/query  
* **Storage**: 10 TB index + embeddings → $0.01 per query  

The architecture is horizontally scalable: adding more nodes simply partitions the inverted index, while the streaming LLM can be sharded by prompt length.

---

### Takeaway
Combining a *sparse neural re‑ranker* with *streaming generation* and *caching* turns an otherwise intractable 3 s requirement into a deterministic, low‑latency pipeline. The hidden trick is storing a lightweight neural relevance score inside the index itself, eliminating on‑the‑fly GPU inference for retrieval while preserving deep semantic matching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
