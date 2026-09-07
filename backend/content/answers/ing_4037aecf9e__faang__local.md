---
qid: ing_4037aecf9e__faang__local
question: 'Explain: URL Frontier Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 523
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:13:23-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design the *URL frontier*—the queue that feeds a web crawler with candidate URLs, ensuring freshness, coverage, and politeness. Assume: • Millions of sites, each with a robots.txt policy; • Crawl budget (bandwidth/CPU) is limited; • Need incremental updates (re‑crawl stale pages).  

**2️⃣ Approach**  
1. **URL ingestion** → parse fetched pages, extract links, canonicalize, de‑duplicate.  
2. **Priority scoring** → rank URLs by freshness need, importance (e.g., PageRank), and domain‑level constraints.  
3. **Politeness & scheduling** → per‑domain rate limits and robots.txt compliance via a scheduler.  
4. **Persistence** → distributed key‑value store for the frontier; use a priority queue per domain shard.

**3️⃣ Depth**  
- *Data structures*: Min‑heap (or sorted set) keyed by next‑crawl time, plus a Bloom filter to reject duplicates.  
- *Algorithms*: When a URL is extracted, compute `nextFetch = now + backoff(domain)`; insert into heap. Scheduler pops URLs whose `nextFetch ≤ now`, respecting per‑domain rate limits.  
- *Complexity*: Insertion O(log n), pop O(log n). With sharding (e.g., by hash of domain) we keep n manageable per node.  
- *Trade‑offs*: Using a global heap simplifies fairness but hurts scalability; sharding trades off strict ordering for throughput.

**4️⃣ Edge Cases**  
- Robots.txt changes → trigger re‑ranking of URLs in that domain.  
- Cyclic links or duplicate content → Bloom filter false positives may drop needed URLs; use a lightweight cache to mitigate.  
- Domain outage → backoff increases exponentially, eventually evicting stale entries.

**5️⃣ Optimize & Communicate**  
- Add *dynamic politeness*: learn per‑domain fetch latency and adjust `backoff`.  
- Implement *adaptive prioritization*: boost URLs that returned 200 OK but with low traffic.  
- For interviewers: explain how each component (ingestion, scoring, scheduling) maps to system requirements, justify data structure choices, and discuss monitoring metrics (queue depth, fetch rate). This shows clear problem decomposition, technical depth, and an awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
