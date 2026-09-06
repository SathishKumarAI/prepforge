---
qid: ing_a14fadc785__fp__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 666
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:48:51-05:00'
sources: []
---

**Why we need to size a Bloom filter**

A Bloom filter is a *probabilistic* set membership test.  
It maps each element \(x\) into \(k\) independent hash positions in an array of
\(m\) bits, setting those bits to 1.  
To decide if a query \(y\) belongs to the set we check whether all its
\(k\) bits are 1; if any is 0, \(y\) is definitely absent.  
If all are 1 we answer “yes” even though there may be a *false positive*.
The filter never returns false negatives.

The design problem: **given** the number of distinct elements \(n\),
the acceptable false‑positive rate \(\epsilon\), and the available memory,
determine \(m\) (array size) and \(k\) (hash count).

---

### Derivation from first principles

Let each bit be independently set to 1 with probability
\(p = 1 - e^{-kn/m}\).  
This follows because each of the \(n\) insertions sets \(k\) bits,
so the expected number of times a particular bit is hit is \(\frac{kn}{m}\),
and the probability it remains 0 after all insertions is
\(e^{-\frac{kn}{m}}\).

A query succeeds (false positive) only if *all* its \(k\) bits are 1,
hence

\[
\epsilon = p^k = \left(1 - e^{-kn/m}\right)^k .
\]

Solving for \(m\) gives the classic sizing formula:

\[
m = -\,\frac{n\,k}{\ln(1-\epsilon^{1/k})}.
\]

The optimal number of hash functions minimises \(\epsilon\).
Differentiating \(\epsilon(k)\) or noting that the product
\(ke^{-kn/m}\) is maximised when \(k = \frac{m}{n}\ln 2\),
yields

\[
k^\* = \frac{m}{n} \ln 2 .
\]

Substituting \(k^\*\) into the expression for \(\epsilon\) gives the
minimum achievable false‑positive rate:

\[
\epsilon_{\min} = \left(1/2\right)^k = e^{-m\,\ln 2 / n}.
\]

Thus, **choosing** \(m\) to satisfy \(\epsilon_{\min}\le\epsilon\)
and setting \(k=\lceil m/n\;\ln 2\rceil\) guarantees the desired
accuracy.

---

### Non‑obvious insight

The *optimal* hash count depends only on the ratio \(m/n\), not on the
absolute values.  
Consequently, if you double both the number of elements and the memory,
the false‑positive rate remains unchanged even though each individual bit
is set twice as often.  
This scaling property explains why Bloom filters are so effective in large‑scale systems: a modest increase in space yields a predictable drop in error without changing hash logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
