---
qid: ing_80184898b0__fp__local
question: 'Explain: Option 3: Bloom Filter — How to Avoid Crawling Duplicate URLs
  at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 451
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:53-05:00'
sources: []
---

**Why a bloom filter is indispensable for duplicate‑URL detection at scale**

At the heart of any web crawler lies a *set membership* problem: “Has this URL already been visited?”  
The naïve solution—store every URL in a hash table—requires \(O(N)\) memory and constant‑time lookups, but for Google’s billions of URLs this is infeasible. A bloom filter replaces the explicit set with a compact probabilistic data structure that guarantees *no false negatives* (every seen URL will be reported as such) while tolerating a controllable false‑positive rate.

Mathematically, a bloom filter uses \(m\) bits and \(k\) independent hash functions to map each element into \(k\) positions. After inserting \(n\) URLs, the probability that a particular bit remains 0 is \((1-1/m)^{kn}\approx e^{-kn/m}\). Hence the false‑positive rate is
\[
p=(1-e^{-kn/m})^k.
\]
Optimizing \(k\) for fixed \(m/n\) yields \(k=\ln 2\, (m/n)\), making the filter’s space usage roughly \(\approx 0.69\,n\) bits per element for a 1 % false‑positive rate.

**Non‑obvious insight:**  
Because bloom filters are *monotonic*—once a bit is set it never clears—their false positives accumulate only when the filter saturates. In practice, crawlers periodically “flush” or rebuild the filter after processing a batch of URLs, effectively resetting the saturation level without expensive deletions. This lazy refresh strategy aligns with the *law of large numbers*: even if each URL has a 1 % chance of being mis‑identified as duplicate, over millions of insertions the expected number of spurious duplicates remains manageable while memory stays bounded.

Thus, by converting an intractable set problem into a tunable probabilistic approximation, bloom filters let Google avoid crawling billions of duplicate URLs with only a few megabytes per crawler node.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
