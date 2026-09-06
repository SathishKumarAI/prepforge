---
qid: ing_c0c3d30a10__fp__local
question: 'Explain: Step 1 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 481
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:34-05:00'
sources: []
---

### Why duplicate‑URL avoidance matters

When a crawler visits the same URL twice, it wastes bandwidth, storage and, more critically, distorts the evidence that feeds ranking signals.  
At Google’s scale (billions of documents per day) even a 1 % redundancy multiplies into petabytes of useless data.

### The core principle: *canonicalization as an optimization problem*

We can view crawling as **sampling** from the set \(U\) of all reachable web resources under constraints (bandwidth, time).  
The goal is to maximise the *information gain* per unit bandwidth.  
If two URLs map to the same canonical document, sampling one provides no extra information about that document.  
Thus we should **collapse equivalence classes** and sample only a representative.

### How Google does it

1. **URL normalization** – strip tracking parameters, canonicalize scheme/host, remove default ports, collapse case in hostnames, resolve relative paths.
2. **Hash‑based deduplication** – compute a fast hash of the normalized URL; maintain a distributed Bloom filter (or HyperLogLog) to remember which hashes have already been scheduled.  
   *Non‑obvious insight:* using a probabilistic structure lets us avoid storing millions of strings while keeping false positives low enough that only a tiny fraction of truly unique URLs are missed.
3. **Content‑based fingerprinting** – for URLs that survive hash filtering, fetch a small byte slice and compute a content hash (e.g., SHA‑256). If the hash matches an existing document’s fingerprint, we treat it as duplicate even if the URL differs (canonicalization failure).
4. **Anchor‑graph pruning** – when crawling a page, only follow outbound links whose anchor text is *likely* to lead to new content (based on historical click‑through or link entropy). This reduces the chance of re‑encountering the same document via different paths.

### The deeper principle

By turning duplicate detection into an **information‑theoretic constraint**, Google ensures that every byte crawled contributes unique signal.  
The Bloom‑filter trade‑off between false positives and memory usage is a concrete embodiment of *optimal resource allocation* under uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
