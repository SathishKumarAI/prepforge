---
qid: ing_74996f2ab4__faang__local
question: 'Explain: Approach #1: Synchronous communication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 511
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:15:30-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *synchronous* web‑crawler system—i.e., one that fetches pages, parses them, and enqueues new URLs in a single request/response cycle. Assume:  
1. We need high throughput (≥ 10k pages/s).  
2. No persistence of crawl state across restarts.  
3. The target sites allow blocking crawls (no robots.txt restrictions).  

**Approach**  
1. **Single‑threaded HTTP client** with async I/O for network latency hiding.  
2. **URL frontier**: in‑memory queue (e.g., `deque`) holding URLs to visit, bounded by a max depth.  
3. **Politeness & deduplication**: hash set of seen URLs; per‑domain sleep timer (e.g., 200 ms).  
4. **Parsing layer**: lightweight DOM parser (BeautifulSoup/pyquery) extracts links and content.  
5. **Storage**: write fetched HTML to local filesystem or in‑memory buffer for downstream processing.  

**Depth**  
The main loop pulls a URL, performs an async `GET`, parses the body, pushes discovered URLs back onto the frontier if not seen. Complexity per page is O(1) amortized for deque ops and O(n) for parsing n links. Because everything runs synchronously, we avoid distributed coordination but risk CPU bottlenecks; thus we rely on event‑loop concurrency (e.g., `asyncio` with a pool of 100 workers).  

**Edge Cases**  
- **Redirect loops**: detect via status codes and limit hop count.  
- **Large pages**: stream response to avoid memory blowup.  
- **Dead links**: log and skip after retries.  
- **Duplicate URLs with query params**: canonicalize before dedupe.  

**Optimize & Communicate**  
To boost throughput, replace the single queue with a sharded in‑memory priority queue keyed by domain to reduce lock contention. Add a lightweight LRU cache for DNS lookups. In an interview, I’d emphasize that while this synchronous design is simple and fast for small scopes, scaling beyond a few hundred workers would necessitate a distributed frontier (e.g., Redis or Kafka) and persistent deduplication store. This shows awareness of trade‑offs between simplicity and horizontal scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
