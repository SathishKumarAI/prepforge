---
qid: ing_91e984f3bc__think__local
question: 'Explain: Web crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 441
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:45:02-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Decide whether we’re talking about a simple bot or a large‑scale production crawler (e.g., Googlebot).  
   * Assume we need: URL discovery, politeness, storage, scheduling, and scalability.  

**2. Adopt a layered design framework**  
   * **Frontier layer** – queue of URLs to visit.  
   * **Fetcher layer** – HTTP client with concurrency control.  
   * **Parser/Extractor layer** – HTML parsing, link extraction, content filtering.  
   * **Storage layer** – deduplication store, metadata DB, document indexer.  
   * **Scheduler/Politeness layer** – robots.txt handling, rate limiting per host.  

**3. Reason step‑by‑step**  
   1. Start with a seed URL list → push into frontier.  
   2. Fetcher pulls URLs respecting concurrency limits; obey robots.txt.  
   3. On success, parse page → extract links → normalize and de‑duplicate.  
   4. Store raw HTML & metadata; add new links to frontier if unseen.  
   5. Repeat until stopping criteria (depth, quota, time).  

**4. Avoid common pitfalls**  
   * **Infinite loops**: missing deduplication leads to revisiting the same URLs.  
   * **Politeness violations**: ignoring robots.txt or per‑host limits causes IP bans.  
   * **Scalability bottlenecks**: a single frontier DB can become a choke point; use sharding or distributed queues.  

**5. Sanity‑check & articulate the design**  
   * Verify that each layer has clear responsibilities and interfaces.  
   * Explain how horizontal scaling (more fetcher workers, partitioned frontier) improves throughput.  
   * Summarize trade‑offs: higher concurrency → more politeness overhead vs. faster coverage.  

This structured approach lets you systematically build or critique a web crawler system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
