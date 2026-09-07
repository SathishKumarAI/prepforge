---
qid: ing_abfee3eec1__faang__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:23:52-05:00'
sources: []
---

**Clarify**  
We’re asked which cache‑key strategies work best when a CDN is the first layer of caching for dynamic or static content. I’ll assume: *content can be personalized (user‑specific), time‑sensitive, and may vary by device/locale;* the CDN supports custom keys via URL, query string, headers, or cookies.

**Approach**  
1. Identify cache dimensions (URL path, query params, host).  
2. Decide which dimensions are *cacheable* vs. *dynamic*.  
3. Build a key that maximizes hit rate while preserving correctness.  
4. Evaluate TTL and purging strategy.

**Depth**  
- **Static assets**: use the full URL + hash (e.g., `/images/logo.png?v=abcd`). CDN can cache per‑path; no need for headers.  
- **Dynamic but shareable content**: include only stable query strings that don’t change per request (e.g., `lang=en`). Use a canonical key like `/article/123?lang=en`.  
- **Personalized data**: either strip user‑specific cookies from the cache key or use separate “staging” zones with short TTLs. A common pattern is to let the CDN cache the public part and append a short‑lived private fragment (e.g., `user_id` header) that forces a bypass.  
- **Locale/device**: encode these in the path (`/en-US/mobile/...`) or as separate headers (`Accept-Language`, `User-Agent`).  

Complexity is O(1) per request; TTLs dictate cache depth. Trade‑off: broader keys → higher hit rate but risk stale data for personalized content.

**Edge Cases**  
- Overly broad keys may serve wrong locale/content.  
- Missing or malformed headers can bypass the CDN unintentionally.  
- Rapid content updates require aggressive purging or short TTLs; otherwise, users see stale pages.

**Optimize & Communicate**  
Start with a conservative key (full URL + essential query strings). Instrument cache hit/miss ratios per segment. If miss rate is high for personalized sections, introduce “cache‑bypass” headers. Keep documentation of which dimensions are cached so that future feature changes don’t break the CDN layer. This systematic approach balances performance and correctness—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
