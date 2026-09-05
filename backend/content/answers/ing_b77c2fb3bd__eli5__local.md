---
qid: ing_b77c2fb3bd__eli5__local
question: 'Explain: Trade-offs and Things That Can Go Wrong — Content Delivery Network
  (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 283
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:14-05:00'
sources: []
---

Imagine a library that wants to let people read books anywhere.  
If the library keeps one copy on every street corner (a CDN), visitors get the book fast, but the library must stock and update many copies—costly and hard to keep in sync.

**Trade‑offs**

* **Speed vs. cost:** More edge servers mean faster access but higher hardware and maintenance expenses.  
* **Consistency vs. latency:** Updating every copy instantly keeps data fresh, yet each change has to travel far, adding delay.  
* **Coverage vs. complexity:** Adding more regions improves reach, but the system grows harder to manage.

**Things that can go wrong**

1. **Stale content:** If a server isn’t refreshed quickly, users see old pages.  
2. **Cache misses:** Requests for rare or new items bypass the CDN and hit the origin server, hurting speed.  
3. **Mis‑tuned rules:** Overly aggressive caching may serve broken links; too conservative wastes bandwidth.

**Bottom line:** A CDN is like a well‑placed network of book copies—great for quick access but requiring careful balance between how many copies you keep, how often you update them, and how much it costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
