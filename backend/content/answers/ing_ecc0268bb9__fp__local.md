---
qid: ing_ecc0268bb9__fp__local
question: 'Explain: Add Another URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 609
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:04-05:00'
sources: []
---

### Why a **Bloom filter** for “Add‑Another‑URL” is indispensable

#### The core problem  
In a large‑scale URL shortener we must answer *“does this new link already exist?”* in O(1) time, while keeping memory far below the cost of storing every key. A naive hash table gives exact membership but costs \(O(n)\) space and can’t be replicated across shards without expensive coordination.

#### From information theory to a probabilistic data structure  
A Bloom filter is essentially a *compressed fingerprint* that trades an infinitesimal false‑positive rate for extreme compactness.  
- **Entropy bound**: Each URL carries \(\log_2 N\) bits of information (N ≈ 10⁹). Storing the full key requires that many bits per entry.  
- **Hash functions as random projections**: Using \(k\) independent hash functions maps a URL to \(k\) bit positions in an array of size \(m\). Each position is a *Bernoulli* variable, so after inserting \(n\) URLs the probability a given bit stays 0 is \((1-1/m)^ {kn}\).  
- **False‑positive probability** follows from independence:  
  \[
  p = \left(1-e^{-kn/m}\right)^k.
  \]
  Minimizing \(p\) for fixed \(m,n\) yields \(k = (m/n)\ln 2\), showing the optimal number of hash functions is a constant (~0.693 × \(m/n\)).

#### System‑level benefits  
- **O(1) amortized insertion**: just set \(k\) bits; no locking or replication needed.  
- **Sub‑megabyte per shard**: even with 10⁹ URLs, a 100‑MB Bloom filter gives \(p \approx 0.001\).  
- **Distributed consistency**: each shard can independently maintain its own filter; a global “add” request first checks the local filter, falling back to consensus only on rare false positives.

#### Non‑obvious insight  
A Bloom filter is *not* a cache replacement policy; it’s an *implicit quorum*. When multiple shards hold overlapping filters (e.g., for sharded key ranges), a single query that probes all relevant filters guarantees correctness with probability 1 – because if any shard has seen the URL, its filter will return true. Thus, by **partitioning** the filter space rather than the data itself, we achieve *exact* deduplication without inter‑shard communication.

In short: Bloom filters solve the “duplicate‑check” subproblem in a way that is mathematically optimal for memory vs. false positives, giving an O(1) probabilistic guard that scales horizontally and keeps the system design clean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
