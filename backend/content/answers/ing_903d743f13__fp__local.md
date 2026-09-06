---
qid: ing_903d743f13__fp__local
question: 'Explain: Example: URL Deduplication — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 419
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:43-05:00'
sources: []
---

### Why a Bloom filter is the *right* tool for URL deduplication  

**Problem** – In a web‑crawler we must decide whether an incoming link has already been seen without storing every URL explicitly.  
Storing all URLs is prohibitive in memory and would require expensive look‑ups; hashing each new URL to a huge table and probing it linearly would be too slow.

**Derivation from first principles**  

1. **Probabilistic membership test** – We only need *“has this URL been seen?”* with an acceptable false‑positive rate, not perfect accuracy.  
2. **Space–time trade‑off** – A bit array of size \(m\) plus \(k\) independent hash functions gives a membership probability of  
   \[
   p = \left(1-e^{-kn/m}\right)^k ,
   \]
   where \(n\) is the number of inserted URLs.  
3. **Optimization** – For a target false‑positive rate \(p^*\), solving for \(m\) and \(k\) yields  
   \[
   m = -\,\frac{n\ln p^*}{(\ln 2)^2},\qquad k=\frac{m}{n}\ln 2 ,
   \]
   which is the optimal configuration.  

Thus a Bloom filter gives us **constant‑time, sub‑linear space** membership checks that scale to billions of URLs.

**Non‑obvious insight** – The *hash functions* can be derived from a single cryptographic hash via splitting its output (e.g., double hashing). This avoids the need for \(k\) expensive independent hashes while preserving the theoretical false‑positive guarantees. It also keeps the filter cache‑friendly, which is crucial in high‑throughput crawler pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
