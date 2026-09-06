---
qid: ing_31fe76f49a__think__local
question: 'Explain: Cache Keys — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 497
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:50:52-05:00'
sources: []
---

**1. Clarify the question & assumptions**  
   - *What is a cache key?* In CDN context, it’s the identifier that determines how content is cached and served.  
   - *Assume the audience knows basic CDN operation but not the intricacies of cache key design.*  
   - *Goal:* explain why cache keys matter, common patterns, pitfalls, and trade‑offs.

**2. Adopt a mental model**  
   - View a CDN request as “lookup → serve.”  
   - Map the lookup to a *key* that is derived from request attributes (URL path, query string, headers).  
   - Treat the key as a function: `Key = f(request)`; design `f` to balance cache hit rate vs. content correctness.

**3. Step‑by‑step reasoning**  
   1. Identify the *content dimension* you want to cache (static assets, dynamic pages, personalized data).  
   2. List request attributes that affect the response (URL, query params, cookies, Accept‑Encoding, language header).  
   3. Decide which attributes should be part of the key:  
      - **Include** if they change semantics or visual output.  
      - **Exclude** if they are irrelevant or would cause cache misses (e.g., session ID).  
   4. Construct a deterministic string or hash that concatenates chosen attributes in a canonical order.  
   5. Verify that the key space is manageable and that TTLs/invalidations align with business logic.

**4. Common traps to avoid**  
   - *Over‑granular keys:* adding every query param splits cache unnecessarily.  
   - *Under‑granular keys:* ignoring a language header leads to wrong content served.  
   - *Mutable URLs:* using timestamps or random tokens defeats caching.  
   - *Case sensitivity & URL encoding mismatches* that produce duplicate keys.

**5. Sanity‑check & communicate**  
   - Run through example requests: show how the key changes when a relevant header is altered and stays same otherwise.  
   - Highlight trade‑offs: higher cache hit rate vs. potential stale or incorrect content.  
   - Conclude with best practices: use canonical URLs, normalize query strings, leverage CDN’s built‑in key policies where possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
