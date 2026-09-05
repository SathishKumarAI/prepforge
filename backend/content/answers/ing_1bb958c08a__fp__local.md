---
qid: ing_1bb958c08a__fp__local
question: 'Explain: Long Context (1M+) — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 591
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:51-05:00'
sources: []
---

### Why the “Long‑Context” taxonomy matters

When a model receives *N* tokens, every self‑attention pair costs O(N²).  
For N≈10⁶ this is impossible on today’s hardware.  
Thus we must **re‑formulate the inference objective**: keep only the information that matters for a given query while discarding irrelevant parts.

---

### 1. *Chunk‑based* (Sliding, Window, Segment)

- **Principle**: local attention → O(L²) per chunk of length L ≪ N.
- **Why it works**: most language phenomena are local; distant dependencies can be approximated by context windows or overlapping segments.
- **Insight**: *Overlap size is a hyperparameter that trades off “exactness” for efficiency*.  
  Too small → loss of long‑range cues; too large → quadratic blowup.

### 2. *Hierarchical* (Token→Segment→Document)

- **Principle**: compress higher‑level representations, then attend at coarser granularity.
- **Why it works**: the model learns to encode a whole paragraph into a single vector, so only inter‑segment attention is required.
- **Insight**: *The hierarchy itself can be learned end‑to‑end*; you don’t need pre‑defined segment boundaries.

### 3. *Sparse/Local‑Global* (Longformer, BigBird)

- **Principle**: combine local dense windows with a handful of global tokens that see the whole sequence.
- **Why it works**: long‑range dependencies are captured via the global tokens; most computations stay sparse.
- **Insight**: *Choosing which tokens become “global” is critical*: data‑driven selection (e.g., CLS, [SEP]) yields better coverage than random.

### 4. *Retrieval‑Augmented* (RAG, Retrieval‑Enhanced LLM)

- **Principle**: instead of attending to all N tokens, retrieve K relevant snippets and attend only to them.
- **Why it works**: the retrieval step is a separate optimization problem (information retrieval) that reduces N→K ≪ N.
- **Insight**: *The retrieval index can be updated online*, allowing the model to “learn” new facts without re‑training.

---

#### Non‑obvious takeaway
All long‑context strategies reduce quadratic attention by **changing the representation of context**, not just its size.  
In practice, a hybrid—hierarchical encoding + sparse global tokens + retrieval for the rarest dependencies—offers the best trade‑off between speed and fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
