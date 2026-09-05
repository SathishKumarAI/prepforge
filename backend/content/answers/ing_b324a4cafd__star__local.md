---
qid: ing_b324a4cafd__star__local
question: 'Explain: Difference Between First level cache and Second level cache in
  Hibernate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 347
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:54-05:00'
sources: []
---

**Situation:** In a recent e‑commerce platform upgrade, our product catalog service was hitting the database for every user request, causing latency spikes during promotional sales. The engineering team needed to reduce read load without refactoring business logic.

**Task:** I had to demonstrate how Hibernate’s caching could alleviate this bottleneck and implement a solution that would stay within our existing architecture.

**Action:** First, I explained that **first‑level cache** is the session‑scoped cache automatically enabled in every `Session`. It holds entities loaded during that transaction, preventing duplicate SQL for the same object within the session. Because it’s tied to the session lifecycle, it can’t be shared across sessions. Next, I set up a **second‑level cache** using Ehcache, configuring `hibernate.cache.use_second_level_cache=true` and specifying entity caching strategies (`READ_ONLY` for static product data). I added `@Cacheable` annotations on our `Product` entity, ensuring that once loaded, subsequent sessions would retrieve the object from Ehcache rather than hitting MySQL. I also monitored cache hit/miss ratios with JMX to fine‑tune eviction policies.

**Result:** After deployment, database query volume dropped by 68 %, and average response time for catalog lookups improved from 250 ms to 95 ms under peak load. The exercise reinforced that first‑level cache is session‑local while second‑level cache provides application‑wide reuse; choosing the right strategy depends on data volatility and access patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
