---
qid: ing_fcd631bd62__fp__local
question: 'Explain: Simple Additive Checksums — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 471
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:14-05:00'
sources: []
---

**Simple additive checksums** are the *first* class of error‑detecting codes you’ll ever meet in systems design.  
At its core, a checksum is a linear projection:  

\[
C = \bigl(\sum_{i=1}^{n} x_i\bigr) \bmod m ,
\]

where \(x_1,\dots,x_n\) are the data words and \(m\) is a chosen modulus (often a power of two).  
The receiver recomputes \(C'\); if \(C'=C\), it assumes the payload arrived intact.  

Why does this work? The checksum is a dot product with the all‑ones vector, which defines a one‑dimensional subspace over \(\mathbb{Z}_m\). Any error vector \(e=(e_1,\dots,e_n)\) changes the sum by \(\sum e_i\). If that change isn’t congruent to 0 modulo \(m\), the error is detected.  
Thus every **single‑bit flip** (where only one \(e_j\neq0\)) is caught because its contribution can never be a multiple of \(m\) unless it’s zero.  
For multi‑bit errors, detection probability rises with larger \(m\): an error escapes iff the sum of its flipped bits equals 0 mod \(m\). That gives a \(1/m\) failure rate for random errors.

**Non‑obvious insight:** although additive checksums look like trivial “parity” tests, they are *linear codes* with Hamming distance 2. This means they can detect any error pattern of weight < 2 but not all patterns of higher weight; however, their simplicity makes them ideal for low‑latency, high‑throughput systems where a small probability of undetected corruption is acceptable (e.g., packet framing in Ethernet).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
