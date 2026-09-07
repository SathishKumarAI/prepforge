---
qid: ing_a14fadc785__faang__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 588
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:45-05:00'
sources: []
---

**Clarify**

You’re asked how to decide the size (bits m) and number of hash functions (k) for a Bloom filter given:  
* expected elements *n*,  
* desired false‑positive rate *p*.  
Assumptions: uniform independent hashes, static set, no deletions.

**Approach**

1. Derive optimal k from the probability formula.  
2. Solve for m using that k and target p.  
3. Round to practical values (power of two, memory alignment).  
4. Verify against edge cases (p ≈ 0 or 1, very large *n*).

**Depth**

- False‑positive probability:  
  \[
  p = \left(1-\!\left(1-\frac{1}{m}\right)^{kn}\right)^k
      \approx\!\left(1-e^{-kn/m}\right)^k
  \]
- Minimize *p* w.r.t. *k*:  
  \(k^* = \frac{m}{n}\ln 2\).  
- Plugging *k* into *p* gives the classic relation:  
  \[
  p = \left(0.5^{\,\frac{m}{n}}\right) = e^{- (m/n)\ln 2}
  \]
  Hence
  \[
  m = -\frac{n \ln p}{(\ln 2)^2}\approx 1.44\, n \ln(1/p)
  \]
- Practical sizes: round *m* to nearest multiple of 8 bits, set \(k=\lfloor (m/n)\ln 2\rceil\).

**Edge Cases**

| Scenario | What breaks? | Test |
|----------|--------------|------|
| p→0 | m becomes huge → memory blowup | Check limit of *m* vs. available RAM |
| n huge (≥ 10⁹) | 64‑bit arithmetic overflow in hash count | Use big‑int or double for intermediate |
| Very small p (< 1e-12) | Floating‑point precision loss | Use log‑space computations |

**Optimize & Communicate**

- Cache precomputed \( \ln(2)^2\) and reuse across instances.  
- Offer a helper API: `BloomParams(n, p)` → `(m, k)`.  
- Explain that trade‑off is between memory and false positives; deletions would require counting Bloom filters (larger m).  

This concise, formula‑driven plan shows clear assumptions, systematic derivation, edge‑case awareness, and practical implementation guidance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
