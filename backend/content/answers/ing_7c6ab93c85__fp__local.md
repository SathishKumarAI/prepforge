---
qid: ing_7c6ab93c85__fp__local
question: 'Explain: Cache Hit Ratio — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 487
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:55-05:00'
sources: []
---

**Caching in system design**

At its core, a cache is an *intermediate memory* that stores recently or frequently accessed data closer to the consumer than the original source (disk, database, remote service). The fundamental problem it solves is **latency vs. capacity trade‑off**: fetching from primary storage incurs high cost \(C_{\text{primary}}\) and long latency \(\ell_{\text{primary}}\); a smaller, faster buffer can deliver the same data with cost \(C_{\text{cache}} \ll C_{\text{primary}}\) and latency \(\ell_{\text{cache}} \ll \ell_{\text{primary}}\).  

**Cache hit ratio (CHR)** quantifies effectiveness:  
\[
\text{CHR} = \frac{\text{\# cache hits}}{\text{\# total requests}}
\]
A high CHR means most requests are satisfied locally, reducing average response time and load on the backing store. In probabilistic terms, if \(p_{\text{hit}}\) is the probability of a hit, expected cost per request is
\[
E[C] = p_{\text{hit}} C_{\text{cache}} + (1-p_{\text{hit}})(C_{\text{primary}}+ \Delta)
\]
where \(\Delta\) captures transfer overhead. Maximizing CHR thus directly minimizes \(E[C]\).

**Deeper insight:**  
CHR is not just a performance metric; it reflects the *entropy* of access patterns. For workloads with low temporal locality (high entropy), any cache policy will yield modest CHRs, regardless of size or replacement strategy. Conversely, highly predictable patterns allow small caches to achieve near‑perfect CHR—an instance of **information bottleneck**: compressing a source while preserving relevant information.

**Non‑obvious point:**  
Increasing cache size does not guarantee higher CHR if the *replacement policy* is suboptimal. A large FIFO cache can underperform a smaller LRU cache because it evicts hot items prematurely, inflating the *effective* entropy seen by the system. Thus, design must pair size with an algorithm that respects access locality to truly boost hit ratios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
