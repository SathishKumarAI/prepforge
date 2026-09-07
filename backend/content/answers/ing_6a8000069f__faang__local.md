---
qid: ing_6a8000069f__faang__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 431
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:51:41-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *disadvantages of CDNs* in a ML context (e.g., serving model artifacts or inference results). I’ll assume we’re talking about public‑web CDNs that cache HTTP content globally.

**Approach**  
1. List core drawbacks.  
2. Explain each with an example relevant to ML workloads.  
3. Briefly note mitigations.

**Depth**

| Disadvantage | Why it matters for ML | Example |
|--------------|-----------------------|---------|
| **Cache staleness / version drift** | Models evolve; stale artifacts can give wrong predictions. | A CDN serves a 10‑epoch model while the latest is 12‑epochs. |
| **Limited cache control granularity** | Fine‑grained TTLs per inference endpoint are hard to enforce. | Same TTL for all models forces long waits after an update. |
| **Increased cost & complexity of invalidation** | Manual purges or signed URLs add operational overhead. | Every new model version requires a purge API call across all edge nodes. |
| **Edge compute limits** | Some CDNs allow only static content; no on‑edge inference. | You cannot run lightweight models at the edge, forcing round‑trips to origin. |
| **Security & privacy risks** | Cached data might be exposed to unintended parties. | A CDN could cache a user‑specific inference result visible to others. |

**Edge cases**  
- Highly dynamic models (real‑time retraining) → TTL = 0 leads to no caching benefit.  
- GDPR/CCPA compliant sites → cached personal data must be purged immediately.

**Optimize & communicate**  
I’d suggest using a hybrid approach: keep critical inference endpoints origin‑only, use CDN only for static artifacts (weights, configs). For updates, employ versioned URLs so old caches never serve stale models. This balances latency gains with correctness and compliance.  

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
