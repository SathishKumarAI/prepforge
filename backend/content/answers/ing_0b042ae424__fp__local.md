---
qid: ing_0b042ae424__fp__local
question: You retrieved 50 candidate passages for a query but the model's useful context
  budget is ~10. How do you choose, and how do you know your choices are good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 560
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:29:13-05:00'
sources: []
---

When a language model can only keep ≈10 passages in its “working memory,” the problem is one of *information bottleneck*: we must pack as much useful signal about the user’s intent into a tiny cache while discarding noise that would otherwise consume capacity.  
**Fundamental principle** – **submodular optimization under a cardinality constraint.**  
A set function \(F(S)=\sum_{p\in S} \text{gain}(p)\) is submodular when adding a new passage yields diminishing returns because the marginal benefit of a passage decreases as the cache grows. This mirrors how each additional context word offers less incremental information once similar content has already been seen.

**Why it must work this way**  
The model’s hidden state acts like a compressed representation; its capacity is fixed, so any extra token that does not increase mutual information with the query or downstream answer will merely dilute useful signal. Submodularity guarantees that a greedy algorithm (pick the passage with highest marginal gain until 10 are chosen) achieves at least \(1-1/e\) of the optimum.

**Practical scoring**  
1. **Relevance to query** – embed both query and passage, compute cosine similarity or dot‑product.  
2. **Redundancy penalty** – for each candidate, subtract its similarity to passages already selected (or use a deterministic kernel).  
3. **Novelty bonus** – reward passages that introduce new entities or concepts not yet covered.

The marginal gain of a passage is simply *relevance minus redundancy*. Pick the top‑10 by this score.

**How do we know it’s good?**  
- The greedy algorithm’s theoretical guarantee (≥63 % of optimal) gives a lower bound.  
- Empirically, evaluate on held‑out QA pairs: compute accuracy or BLEU with and without the selected cache; improvement shows that the chosen passages preserve the most predictive signal.  
- Optionally, perform an ablation: replace one cached passage by the next best candidate and observe the change in answer quality; a small drop confirms diminishing returns.

**Non‑obvious insight:**  
Many people treat relevance alone as the criterion, but *redundancy is equally costly* because the model’s hidden state cannot “remember” multiple identical facts separately. By explicitly penalizing overlap, we free capacity for truly new information—often the very detail that turns a correct answer into an incorrect one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
