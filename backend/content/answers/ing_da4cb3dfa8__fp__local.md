---
qid: ing_da4cb3dfa8__fp__local
question: 'In the mood for some more reading? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 445
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:46-05:00'
sources: []
---

**Why we need HyperLogLog**

In streaming analytics we often ask: *How many distinct users read my article today?*  
The naive solution stores every user ID – impossible when the stream is terabytes per day.  
We need a *probabilistic cardinality estimator*: an algorithm that guarantees
an answer within ± ε of the true count while using sub‑kilobyte memory.

**From hash to rank**

Hash each element uniformly into 32‑bit space.  
The first *k* bits form a bucket index (2^k buckets).  
The remaining bits determine how many leading zeros appear in that suffix.
If a suffix starts with `r` zeros, the probability of seeing such an event is
\(2^{-\,r}\).  
Thus the expected maximum rank in a bucket grows logarithmically with the number
of distinct elements hashed into it.  
This observation turns the problem into estimating the *maximum* of many
independent geometric random variables.

**Combining buckets**

Each bucket stores only its maximum rank (a small integer).  
The harmonic mean over all buckets yields an unbiased estimator for the cardinality:
\[
E[\hat N] = \alpha_m\,m^2\,\Big(\sum_{j=1}^m 2^{-M_j}\Big)^{-1},
\]
where \(m=2^k\) and \(\alpha_m\) is a small correction constant.  
The estimator is asymptotically normal, with variance \(\approx 0.81/m\).

**Non‑obvious insight**

HyperLogLog’s power comes from *compressing rank information* rather than
counting items. By exploiting the tail of the geometric distribution we can
recover a logarithmic scale estimate using only \(O(\log N)\) bits, far less than
any exact counter. This principle—store only “extremal” statistics—underlies many
modern sketching techniques (e.g., Bloom filters, MinHash).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
