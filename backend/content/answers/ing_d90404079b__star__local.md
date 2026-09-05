---
qid: ing_d90404079b__star__local
question: 'Explain: Versioning — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:42-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine for an e‑commerce platform that served 2 M active users per day. The model was updated nightly, but the production API kept returning stale results because the client library bundled a hard‑coded model version.

**Task:**  
I had to design a lightweight, versioned client‑server architecture so every request automatically used the latest model without redeploying clients, while keeping latency under 50 ms and avoiding cache invalidation headaches.

**Action:**  
I introduced a “model registry” microservice that exposed two endpoints: `GET /current` (returns JSON `{version:"v3.2", endpoint:"/predict"}`) and `/predict`. The client first queried the registry, stored the version in memory, and cached it for 10 minutes using an LRU policy. If a request hit a stale cache or the registry returned a newer version, the client automatically switched endpoints and retried. I used gRPC for low‑overhead communication, added exponential backoff on registry failures, and instrumented Prometheus metrics to track version drift.

**Result:**  
The rollout reduced model staleness from 12 h to under 5 min, improved recommendation relevance by 8 % (measured in click‑through rate), and cut API latency variance by 30 %. I learned that coupling a lightweight registry with client‑side caching can deliver near real‑time versioning without forcing server‑side redeploys.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
