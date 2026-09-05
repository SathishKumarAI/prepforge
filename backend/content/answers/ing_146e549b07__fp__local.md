---
qid: ing_146e549b07__fp__local
question: 'Explain: ​​Accelerating speculative decoding with LPX'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 361
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:45-05:00'
sources: []
---

**Speculative decoding with LPX (Linear Program eXpansion)**  
When a language model generates tokens, it usually samples from the softmax distribution over *V* vocabulary items. The naïve strategy is to pick the top‑k candidates and branch on each; the combinatorial explosion forces pruning heuristics that often waste compute on low‑probability paths.  

LPX reformulates the *beam search* as a linear program: we introduce binary variables \(x_{t,i}\) indicating whether token \(i\) is chosen at step \(t\), and add constraints enforcing one choice per step, cumulative log‑likelihood bounds, and optional coherence penalties. Solving this LP yields an **upper bound** on the best achievable score for any continuation that respects the current prefix.  

The *speculative* part comes from using this bound to decide whether a partial hypothesis is worth exploring deeper. If the LP’s objective exceeds a threshold (or beats the current best), we “speculate” by expanding that node further; otherwise we discard it without computing its full forward pass. Because the LP uses only local information, its cost is negligible compared to a neural inference step, yet it guarantees that no promising path is prematurely pruned.

*Non‑obvious insight*: The LP’s bound is *tight* when the model’s logits are close to linear (e.g., in low‑temperature regimes). Thus, even a coarse linear approximation can eliminate most of the search space, turning an exponential problem into a handful of inexpensive forward passes—essentially turning beam search into “beam pruning by convex relaxation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
