---
qid: ing_95b8226a6d__fp__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 429
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:44-05:00'
sources: []
---

**Diagnosing the spike**

1. **Fundamental problem:**  
   The RAG pipeline is a *two‑stage* system: retrieval (vector search) + generation (LLM). Cost ≈ α·(retrieval latency) + β·(token count in generation).  
2. **Why volume is irrelevant:**  
   - **Latency inflation** drives α even if requests are few; every query becomes expensive because the *effective* compute per request rises.  
   - **Generation token budget** expands when retrieval returns more or longer passages (β increases).  

3. **Root‑cause map**  
   | Layer | Potential trigger | Cost impact |
   |-------|------------------|-------------|
   | Index | Re‑indexing with higher dimensionality, or switching to a denser index (FAISS HNSW→IVF) | ↑ retrieval CPU/memory |
   | Retrieval | Wrong similarity metric (cosine→dot), or threshold too low | More candidates → larger passages |
   | Generation | Prompt drift: more context tokens, longer answer | ↑ token count |

**Fix strategy**

- **Profile latency per stage.** Use instrumentation to capture the 95th percentile of retrieval time and token counts.
- **Re‑evaluate index parameters.** Reduce dimensionality or switch to a more efficient ANN scheme; enforce a hard candidate cap (e.g., top‑k = 5).
- **Prompt audit.** Trim context, use concise embeddings, and enforce a maximum output length.

**Non‑obvious insight**

*The cost multiplier is often due to *index drift*: when the underlying corpus changes, the embedding space shifts, causing retrieval to pull in irrelevant or longer passages that inflate generation tokens. Periodic re‑embedding with a **concept drift detector** (e.g., KL divergence of query embeddings) prevents this silent escalation.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
