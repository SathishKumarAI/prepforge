---
qid: ing_928f49933f__think__local
question: 'Explain: Robots and Exclusions — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 496
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:46:56-05:00'
sources: []
---

We must produce numbered thoughts, 150-220 words. Let's craft.**1️⃣ Clarify the scope & assumptions**  
   - What “robots” and “exclusions” mean in web crawling (User‑Agent strings, `robots.txt`, crawl‑delay).  
   - Assume a distributed crawler with multiple agents, respecting legal/ethical constraints.  
   - Decide whether we’re focusing on policy parsing or system architecture.

**2️⃣ Adopt a layered design framework**  
   - *Policy layer*: parse and store `robots.txt` directives (allow/disallow, crawl-delay).  
   - *Scheduler layer*: queue URLs with priority, enforce per‑host politeness.  
   - *Fetcher layer*: HTTP client handling redirects, retries, content‑type filtering.  
   - *Storage layer*: deduplication, metadata indexing, and incremental updates.

**3️⃣ Step‑by‑step reasoning**  
   1. **Discovery**: fetch `robots.txt` for each domain before crawling its pages.  
   2. **Parsing**: convert directives into a trie or regex set for fast lookup.  
   3. **Enforcement**: when a URL is dequeued, check the trie; skip if disallowed.  
   4. **Politeness**: track last fetch time per host; delay next request accordingly.  
   5. **Robustness**: handle malformed `robots.txt`, missing files (default allow), and “Crawl‑Delay” overrides.

**4️⃣ Avoid common pitfalls**  
   - Treating all robots equally—ignore user‑agent specificity.  
   - Ignoring “Disallow: /” or “Allow:” exceptions leading to over‑blocking.  
   - Over‑simplifying politeness (e.g., single global delay instead of per-host).  
   - Forgetting to update the policy cache when a site’s `robots.txt` changes.

**5️⃣ Sanity‑check & communicate**  
   - Run unit tests on a sample set of `robots.txt` files covering edge cases.  
   - Explain each layer’s responsibility aloud, ensuring it maps back to the original question.  
   - Emphasize how the design scales: distributed queues, sharded policy store, and fault‑tolerant fetchers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
