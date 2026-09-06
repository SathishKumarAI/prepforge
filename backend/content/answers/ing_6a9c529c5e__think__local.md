---
qid: ing_6a9c529c5e__think__local
question: 'Explain: Reciprocal Rank Fusion (RRF) for Combining Results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 373
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:04:25-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: Explain RRF in plain terms; show how it merges multiple ranked lists into one.  
   - *Assumptions*: Readers know basic ranking (scores → order), and that each list may have different scales or missing items.

**2. Adopt a mental model**  
   - Think of each rank list as a “vote” on relevance, where the position matters more than raw scores.  
   - RRF treats every item’s *reciprocal rank* (1/(k+λ)) as its vote weight; λ is a smoothing constant.

**3. Step‑by‑step reasoning**  
   1. For each document in each list, compute `weight = 1 / (rank + λ)` (often λ=6).  
   2. Sum these weights across all lists for every unique document.  
   3. Sort documents by the summed weight descending; this is the fused ranking.  
   4. Explain why lower ranks give higher weights, and why adding λ prevents division‑by‑zero.

**4. Common traps to avoid**  
   - Mixing raw scores with ranks: RRF uses ranks only.  
   - Forgetting that documents absent from a list simply contribute zero weight.  
   - Overlooking the role of λ; too small → instability, too large → flat weights.

**5. Sanity‑check & communicate**  
   - Verify with a toy example (two lists, three docs).  
   - Highlight intuition: “RRF is like voting where early positions count more.”  
   - End by noting its robustness to scale differences and why it’s popular in retrieval competitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
