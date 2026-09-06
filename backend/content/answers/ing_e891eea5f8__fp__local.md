---
qid: ing_e891eea5f8__fp__local
question: 'Explain: Web Crawlers — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 475
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:13:20-05:00'
sources: []
---

**Bloom Filters in Web‑Crawler Architecture**

A crawler’s core problem is *duplicate detection*: avoid re‑fetching a URL that has already been processed.  
The naïve solution—store every URL in a hash table—is O(1) lookup but costs \(O(N)\) space, prohibitive for billions of URLs.  

A Bloom filter gives a probabilistic answer:  
- **Derivation**: Let \(m\) be the bit array size and \(k\) the number of independent hash functions. For each inserted URL we set its \(k\) bits to 1. The probability that a particular bit remains 0 after inserting \(n\) URLs is \((1-\frac{1}{m})^{kn}\approx e^{-kn/m}\).  
- **False‑positive rate**: An unseen URL will be reported “seen” only if all its \(k\) bits are already 1, probability \(\left(1-e^{-kn/m}\right)^k\). Choosing \(k=\frac{m}{n}\ln2\) minimizes this rate to \((0.6185)^{m/n}\).

**Why it works for crawling**  
- *Space efficiency*: Bloom filters compress the “seen” set from gigabytes to megabytes, enabling in‑memory deduplication across shards.  
- *Streaming nature*: URLs arrive one by one; the filter’s update cost is constant and independent of \(n\).  
- *Trade‑off*: Accepting a small false‑positive rate (e.g., 1 %) means some URLs are missed, but for most crawlers that’s tolerable because they periodically re‑visit seeds.

**Non‑obvious insight**  
A Bloom filter can be *recycled* by *rotating the hash functions* instead of resetting the array. By assigning each URL a timestamp and using time‑decaying hash functions, the filter naturally forgets old URLs, maintaining low false positives without costly reinitialization—essential for long‑running crawlers that must keep memory bounded over months or years.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
