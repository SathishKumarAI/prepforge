---
qid: ing_911ba8021b__faang__local
question: 'Explain: ColBERTv2 and PLAID Indexing — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 591
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:55-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise technical overview of *ColBERTv2* and its *PLAID* indexing technique—specifically how they implement **late‑interaction** ranking in dense retrieval systems. I’ll assume you want the core idea, not a full implementation guide, and that the audience is familiar with neural IR basics (embeddings, dot products).

**Approach**  
1. Summarize ColBERTv2’s key innovation: per‑token embeddings + late interaction.  
2. Explain PLAID’s role as an efficient inverted index over token vectors.  
3. Highlight the retrieval pipeline and complexity trade‑offs.

**Depth**  

| Component | What it does | Why it matters |
|-----------|--------------|----------------|
| **Token‑level embeddings** | Each query/ passage token is encoded into a 128–256 D vector via a transformer (BERT‑style). | Allows fine‑grained matching; preserves contextual nuance. |
| **Late interaction (max‑over‑tokens)** | For each query token, compute the maximum dot product with all passage tokens, then sum across query tokens. | Avoids full pairwise matrix (costly) while still capturing best matches. |
| **PLAID index** | Passages are inverted by *token IDs*; for each ID we store a sorted list of (docID, vector). Retrieval pulls only relevant lists per query token. | Reduces memory to ~10× less than naïve dense indices and speeds up query time (~10–20 ms on 1M docs). |
| **Scoring** | `score(q,p) = Σ_{t∈q} max_{s∈p} (v_t · v_s)` | Linear in number of query tokens + number of matched passage tokens, not quadratic. |

**Edge cases**  
- *Very long passages*: token lists explode; use sliding windows or truncation.  
- *OOV tokens*: fall back to sub‑token embeddings or random vectors.  
- *Sparse queries*: max operation may return zero—add a small bias term.

**Optimize & communicate**  
- **Compression**: quantize vectors (e.g., 8‑bit) to halve memory with <1 % recall loss.  
- **Batching**: process multiple queries in one GPU pass to amortize transformer cost.  
- **Explainability**: expose top‑matching tokens per query token for debugging.

By framing the answer this way—problem restatement, plan, technical core, edge handling, and optimization—you demonstrate structured thinking, clear communication, and depth expected from FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
