---
qid: ing_39772e6b1f__fp__local
question: 'Explain: Web Crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 515
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:25-05:00'
sources: []
---

## Why a Web Crawler Exists

The web is an *unbounded directed graph*: each page is a node and hyperlinks are edges.  
A search engine must index this graph to answer queries quickly.  
To do so it needs **representative samples** of the graph that can be queried efficiently.  
Thus, the crawler’s fundamental problem is: *“How do we traverse an enormous, constantly evolving directed graph with limited bandwidth, storage and compute while ensuring coverage, freshness, and politeness?”*  

## Core Design Principles

1. **Scalable Frontier Management (Optimization)** –  
   Maintain a priority queue of URLs weighted by heuristics (recency, depth, content relevance).  
   The *cost–benefit trade‑off* is solved by treating each fetch as an action in a Markov Decision Process: maximize information gain per byte.

2. **Distributed Fetching & Deduplication (Information Theory)** –  
   Use consistent hashing of URLs to shards; each shard stores a Bloom filter for seen URLs, guaranteeing <1 % false positives while keeping memory minimal.  
   This leverages *entropy reduction*: we avoid re‑fetching redundant data.

3. **Politeness & Respectful Rate‑Limiting (Geometry of the Internet)** –  
   Model host access as a 2‑D lattice where each host occupies a cell; enforce a minimum inter‑request time τ derived from empirical load curves.  
   This prevents *resource contention* and preserves the “smoothness” of traffic.

4. **Dynamic Re‑ranking & Freshness (Probabilistic Graph Sampling)** –  
   Periodically re‑evaluate frontier priorities using PageRank‑style scores that incorporate decay factors for stale links, ensuring the crawl stays current without exhaustive rescans.

## Non‑Obvious Insight

Most designs treat URL deduplication locally. The **global “shard‑aware” deduplication**—where each shard’s Bloom filter is periodically merged with a central sketch—dramatically reduces false negatives that arise from hash collisions, enabling the crawler to discover *rare* but high‑value pages (e.g., niche research blogs) without extra bandwidth.

---

> **Takeaway:** A crawler is essentially an online graph‑sampling algorithm constrained by network resources; its efficiency hinges on balancing information gain against cost through probabilistic data structures and principled scheduling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
