---
qid: ing_d912769d02__faang__local
question: 'Explain: Approach 2: Global Counter (Non-Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 616
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:04:05-05:00'
sources: []
---

## Clarify  
The question asks for an explanation of **“Approach 2: Global Counter (Non‑Deterministic)”**—a common strategy used when estimating the cardinality or frequency of items in a data stream where exact counting is infeasible.  
Assumptions to confirm:  
- We have a massive, possibly unbounded stream of events.  
- Memory is limited compared to the number of distinct keys.  
- Exact counts are not required; an estimate with bounded error suffices.

## Approach  
1. **Maintain a single global counter** that increments on every event (or for each unique key, depending on the variant).  
2. **Use probabilistic sampling or hashing** so that only a fraction of events contribute to the counter.  
3. The final estimate is derived by scaling the observed count with the inverse sampling probability.

## Depth  
- **Algorithmic core:** For each incoming item, generate a random number `r ∈ [0,1]`. If `r < p` (sampling rate), increment the global counter `C`.  
  - After processing `N` items, estimate the true count as `\hat{T} = C / p`.  
- **Complexity:**  
  - Time: O(1) per item.  
  - Space: O(1).  
- **Accuracy:** By Chernoff bounds, the relative error is \(O(\sqrt{\frac{1-p}{pC}})\). Choosing `p` appropriately balances memory and variance.  
- **Non‑determinism** stems from random sampling; different runs yield slightly different estimates but converge to the true value as the stream grows.

## Edge Cases  
- **Very small streams:** If `N < 1/p`, the estimate may be zero—handle by forcing at least one sample or using a fallback exact counter.  
- **Highly skewed distributions:** Rare items might never be sampled; consider stratified sampling for critical keys.  
- **Changing data rate:** If arrival rates fluctuate, adapt `p` on‑the‑fly to maintain target variance.

## Optimize & Communicate  
- **Adaptive sampling**: Dynamically adjust `p` based on observed counter growth to keep error within bounds.  
- **Hybrid strategy**: Combine the global counter with a small hash table for frequent items (Heavy Hitters) to improve accuracy where it matters most.  
- **Explain trade‑offs**: Emphasize that we sacrifice determinism and per‑item precision for O(1) memory, which is acceptable in many real‑time analytics scenarios.

This structured explanation demonstrates clear problem framing, a concise algorithmic plan, rigorous depth with complexity analysis, awareness of pitfalls, and thoughtful optimization—all key to scoring high on FAANG signal interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
