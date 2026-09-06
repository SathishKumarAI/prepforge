---
qid: ing_96b1003240__fp__local
question: 'So, what’s your phone number? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 427
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:06-05:00'
sources: []
---

**HyperLogLog: a sketch for cardinality that exploits the geometry of hash‑space**

The problem is estimating how many distinct items appear in a stream without storing them all.  
A naive counter grows linearly with the universe, so we compress the information by hashing each item to an *unbiased* random bitstring \(h(x)\in\{0,1\}^b\).  
If we look at the longest run of leading zeros in that hash, we obtain a quantity \(R(h)=\max_{i}\lfloor \log_2(1/h_i) \rfloor\), where \(h_i\) is the value of the *i*‑th item.  
Because a random bitstring has probability \(2^{-k}\) of having at least \(k\) leading zeros, the expectation of \(2^{R(h)}\) is proportional to the number of distinct elements, \(\theta N\).  
Thus we store only the maximum \(R\) per *bucket* (partitioned by the first \(p\) bits of the hash), yielding a memory footprint of \(m=2^p\) registers.  

The deeper principle is **hash‑space geometry**: the distribution of leading zeros is a direct probe of set cardinality, and averaging over many buckets stabilises variance (the “log‑log” correction).  
A non‑obvious insight: *the estimator’s bias originates from the logarithm’s concavity*, not from hash collisions. Correcting this bias requires a small constant \(\alpha_m\), derived analytically, which most implementations overlook but is essential for sub‑1 % accuracy.  

In short, HyperLogLog reduces cardinality estimation to a handful of bitwise operations, harnessing the probabilistic geometry of random hashes to achieve \(O(1)\) time and \(O(m)\) space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
