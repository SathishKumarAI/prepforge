---
qid: ing_e891eea5f8__faang__local
question: 'Explain: Web Crawlers — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks how a web crawler can use *Bloom filters* to avoid revisiting URLs. Assume we have an ever‑growing URL space, limited memory, and need sub‑linear lookup time.  

**Approach**  
1. Maintain a Bloom filter (BF) that records all URLs seen so far.  
2. When the crawler fetches a page, it parses outgoing links.  
3. For each link, check BF; if “possible” → enqueue for crawling; else discard.  
4. After crawling, insert every new URL into BF.  

**Depth**  
- *BF size*: `m = -(n ln p)/(ln 2)^2` where `p` is acceptable false‑positive rate (e.g., 1%).  
- *Hash functions*: use `k = (m/n) ln 2`.  
- *Complexity*: O(k) per lookup/insert, constant memory per URL.  
- *False positives*: may miss some URLs but never falsely revisit a page; acceptable for scale.  
- *Handling deletions*: not needed because we only add; if required, use counting Bloom filters.  

**Edge Cases**  
- High false‑positive rate → many missed URLs → lower crawl coverage.  
- URL canonicalization errors (different query strings) cause duplicates.  
- Memory exhaustion if `n` grows beyond estimate → need to resize or rotate BF.  

**Optimize & Communicate**  
- Use a *compressed* BF (e.g., CBF) for very large `n`.  
- Periodically rebuild the BF from a persistent URL store to reset false positives.  
- Explain trade‑offs: lower memory vs. coverage loss; deterministic hash functions vs. speed.  

By framing the solution this way, I demonstrate clear problem understanding, systematic design, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
