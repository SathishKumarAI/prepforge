---
qid: ing_72c8b0c082__fp__local
question: 'Explain: Amazon Sliding Window and Two Pointers — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 378
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:41-05:00'
sources: []
---

**Sliding‑window + two‑pointer**  
At its core the problem is: *given a one‑dimensional array of items, find a subarray that satisfies some property (max sum, longest unique substring, etc.) with linear time*.  
The “why” is simple—any solution that inspects each element more than once or scans the whole array for every candidate costs O(n²).  We can’t afford that at FAANG scale.  

Let `L` and `R` be two indices that delimit a contiguous window `[L,R]`.  
* **Invariant**: the current window satisfies all constraints except possibly the one we are about to relax by moving `R`.  
* Move `R` forward, adding an element. If the invariant breaks (e.g., duplicate character, sum exceeds limit), shrink the window from the left until it holds again.  
* While shrinking we discard elements that can never re‑enter a valid window because all future windows start no earlier than the current `L`.  

Thus each index moves at most once: O(n) time, O(1)/O(k) space.  
A non‑obvious insight: *the invariant guarantees that when you shrink, you do not miss any optimal subarray*.  If a better window existed that started before the current `L`, it would have violated the invariant earlier and been discarded anyway.  This monotonicity is what makes the two‑pointer trick sound for **any** property that is “closed under taking suffixes” (e.g., sum ≤ K, set of distinct elements).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
