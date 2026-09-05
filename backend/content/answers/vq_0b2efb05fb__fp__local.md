---
qid: vq_0b2efb05fb__fp__local
question: Which explanation describes this error?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 372
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:11-05:00'
sources: []
---

**Why the “Divide‑and‑Conquer” failure looks like a “log‑time” bug**

When you split a problem of size *n* into two subproblems of size *n/2*, the classic recurrence is  

\[
T(n)=2\,T(n/2)+O(1).
\]

By the Master Theorem this solves to \(T(n)=Θ(n)\).  
If, however, you mistakenly add an extra linear term in the merge step—say `O(n)` instead of a constant—the recurrence becomes  

\[
T'(n)=2\,T'(n/2)+Θ(n).
\]

Unrolling gives  

\[
T'(n)=Θ(n \log n),
\]

because at each level you process all \(n\) elements once.  
The error often appears as “the algorithm is *O(n log n)* instead of *O(n)*”, which seems to contradict the intuition that merging two sorted halves should be constant‑time.

**Non‑obvious insight:**  
The extra cost is not due to the recursive depth but to *overlap* between subproblems. When you merge, you must touch every element **once per level**, so the total work accumulates multiplicatively with the number of levels. This subtle “per‑level blowup” is why a seemingly innocuous constant‑time mistake propagates into an \(n\log n\) penalty.

In short: check that your merge step truly runs in *constant* time; otherwise you’re paying linear cost at each recursion level, turning the algorithm from linear to quasi‑linear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
