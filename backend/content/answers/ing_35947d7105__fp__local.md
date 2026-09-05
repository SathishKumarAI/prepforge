---
qid: ing_35947d7105__fp__local
question: 'Explain: False Positives — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 476
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:58:26-05:00'
sources: []
---

**False Positives in Bloom Filters – a principled view**

A Bloom filter is a *probabilistic* set membership test that trades space for certainty.  
It stores \(m\) bits all initially zero and uses \(k\) independent hash functions
\(h_1,\dots ,h_k\).  
When inserting an element, the \(k\) positions are set to one.
To query, we check whether *all* those bits are one; if any is zero, the element is definitely absent.

The **fundamental problem** is that many distinct elements may hash to overlapping sets of bits.  
Once a bit has been turned on by some insertion, it can never be reset, so subsequent insertions only reinforce overlaps.  

Let \(n\) be the number of inserted items and assume perfect hashing (uniformly random).  
After inserting all items, the probability that a particular bit remains zero is

\[
p_0 = \left(1-\frac{1}{m}\right)^{kn}
   \approx e^{-kn/m}.
\]

Hence the probability that a specific bit is one is \(1-p_0\).  
For an arbitrary query element (not in the set), each of its \(k\) hash positions is independently one with probability \(1-p_0\).  
Thus the **false‑positive rate** is

\[
P_{\text{FP}} = \left(1 - e^{-kn/m}\right)^k .
\]

Optimizing over \(k\) gives the classic choice
\(k^* = (m/n)\ln 2\), yielding
\(P_{\text{FP}}^{*} = (0.5)^{\,m/n}\).

**Non‑obvious insight:**  
The false‑positive probability depends *only* on the ratio \(m/n\); increasing the number of hash functions beyond \(k^*\) actually worsens performance because each extra hash increases the chance that a query’s bits overlap with those set by many elements. This counterintuitive “more hashes = worse” rule emerges directly from the exponential decay in \(p_0\).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
