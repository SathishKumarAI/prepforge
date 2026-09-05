---
qid: ing_c7068e41cf__star__local
question: 'Q: What is "Semantic Drift" in caching, and how do you prevent it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 316
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:47-05:00'
sources: []
---

**Situation:**  
At my last company we built a recommendation engine that served personalized content to millions of users daily. The system relied heavily on an in‑memory cache (Redis) for feature vectors. After a major model update, we noticed the cache hit rate drop from 92% to 65%, and user engagement dipped by 4%.

**Task:**  
I had to diagnose why the cached data was becoming stale—what we called “semantic drift”—and restore high accuracy without adding latency.

**Action:**  
1. **Versioned Keys** – Added a model‑version suffix to every cache key so old vectors stayed untouched until fully validated.  
2. **TTL & Refresh Policy** – Implemented a sliding TTL of 12 hours and an asynchronous refresh pipeline that re‑computed features when the TTL expired, but only if the user’s interaction pattern changed significantly (Δ > 10%).  
3. **Monitoring Dashboards** – Built Grafana panels tracking cache hit rates per version and drift metrics (cosine similarity between old vs new vectors).  
4. **Automated Rollbacks** – Created a quick rollback script that could restore previous vector sets if downstream metrics fell below thresholds.

**Result:**  
Cache hit rate rebounded to 90% within two days, and click‑through rates improved by 3%. I learned that preventing semantic drift requires tight coupling between model versioning, cache key design, and real‑time monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
