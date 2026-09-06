---
qid: ing_a4bd5e0010__fp__local
question: 'Explain: What Checksums Can and Cannot Tell You — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 500
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:56:33-05:00'
sources: []
---

**What a checksum actually guarantees**

A checksum is just a short linear projection of the data:
\[
C = H(x)\in \mathbb{F}_2^k,\qquad k\ll |x|.
\]
Because it is linear, every error pattern \(e=x\oplus y\) produces a *specific* difference
\(H(e)=C_x\oplus C_y\).  
If the projection matrix has full rank on all single‑bit errors (i.e., each column is nonzero), then any one‑bit corruption will flip exactly one bit of \(C\); this is why checksums catch **single** errors with probability 1.  

However, the mapping is many‑to‑one: different error patterns share the same checksum difference.  
The number of undetectable errors equals \(|\ker H|\), which grows exponentially with the data size. For a \(k\)-bit checksum on an \(n\)-bit message, at most \(2^{\,n-k}\) distinct messages map to the same checksum. Consequently:

| ✔️ | ❌ |
|---|---|
| Detects any *odd* number of bit flips if parity‑based. | Cannot distinguish *which* bits changed. |
| Guarantees detection of all single‑bit errors (if columns nonzero). | Fails on even‑weight error patterns, including many multi‑bit bursts. |
| Provides a quick, deterministic check without heavy computation. | Offers **no** statistical confidence; an adversary can craft collisions easily. |

**Non‑obvious insight:**  
Because the checksum is linear over \(\mathbb{F}_2\), *every* undetectable error lies in its kernel. This means that if you know even a single error pattern that survives, you can generate infinitely many others by adding any vector from the kernel. Thus, a “good” checksum must be chosen so that its kernel contains only high‑weight vectors—otherwise an attacker can flip precisely those bits and keep the same checksum. This subtle linear‑algebraic view explains why modern protocols use cryptographic hashes (nonlinear, one‑way) instead of simple checksums for integrity guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
