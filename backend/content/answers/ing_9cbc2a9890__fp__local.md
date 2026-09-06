---
qid: ing_9cbc2a9890__fp__local
question: 'Explain: Ramp Coding Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 437
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:29-05:00'
sources: []
---

**Ramp Coding Problems – A First‑Principles View**

At their core a *ramp* asks for the maximum width between two indices \(i<j\) such that the value at the left is **at least** the value at the right:  
\[
\text{width}=j-i,\qquad A[i]\ge A[j].
\]
The objective is to maximize this width.  This is a *monotone* constraint; once you pick a left boundary, any right boundary that satisfies \(A[i]\ge A[j]\) will yield the same or smaller width if it lies further inwards.  

**Why two pointers work:**  
1. **Monotonicity of width** – increasing \(j\) always increases width, but may violate the constraint.  
2. **Greedy elimination** – If \(A[i]<A[j]\), moving the left pointer right cannot increase width (since width shrinks) and will not recover a larger value at the new left because we only discard smaller values that can’t help satisfy future constraints.  
3. **Optimality proof** – By always advancing the pointer with the *smaller* value, we guarantee that every discarded pair is dominated by a later pair that satisfies the same constraint but offers no worse width.

This reduces the problem to \(O(n)\) time and \(O(1)\) space, an instance of **two‑pointer optimization** on monotone functions.  

**Non‑obvious insight:**  
The key property is *dominance*: a smaller left value cannot ever become useful later because any future right index will only be further right, making the width even smaller. Thus discarding it is safe. This dominance principle underlies many linear‑time algorithms (e.g., longest increasing subsequence via patience sorting) and is often overlooked in interview prep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
