---
qid: ing_d7564914f6__fp__local
question: Explain sequence packing in SFT. What's the attention contamination problem
  and how is it solved?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 472
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:38:05-05:00'
sources: []
---

**Sequence Packing in Streaming Fine‑Tuning (SFT)**  
When fine‑tuning a transformer on long documents, we often pack many short sequences into one large tensor so that every GPU token is useful. The *fundamental problem* is that the model’s self‑attention treats every position as potentially interacting with every other position in the same batch. If we naïvely concatenate sequences, padding tokens are still present and the attention mechanism will propagate gradients from a real token to its padded neighbours. This is the **attention contamination** issue: the model learns spurious dependencies that do not exist in real data.

Why must it be solved?  
* **Optimization principle:** We want the loss on each real token to depend only on genuine context, otherwise we waste capacity learning artefacts.  
* **Information‑theoretic view:** Padding carries no information; letting it influence gradients inflates the entropy of the model’s internal representation.  
* **Geometric intuition:** Attention can be seen as a weighted average over all positions; padding shifts this centre of mass.

**Solution: Masked, Segment‑Aware Packing**  
1. Insert *segment IDs* for each packed sequence and generate an *attention mask* that forbids cross‑sequence interactions.  
2. Use the same mask in both forward and backward passes so gradients never flow through padded or inter‑segment positions.  
3. Optionally replace padding with a learned “pad token” whose embedding is ignored by the mask.

**Non‑obvious insight:** Packing improves *cache locality*—the contiguous memory layout allows the transformer’s matrix multiplies to hit L1/L2 caches more often, yielding a 10–20 % speedup that would be missed if one only considered computational cost. Thus, sequence packing is not just a trick for efficiency; it preserves statistical integrity while exploiting hardware characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
