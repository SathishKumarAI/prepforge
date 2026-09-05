---
qid: ing_72a6f125e1__star__local
question: 'Explain: Fleet usage load shedder — Scaling your API with rate limiters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:16:48-05:00'
sources: []
---

**Situation:**  
Our SaaS platform had a public ML inference API that suddenly hit a 30 % spike during a new product launch. The backend cluster was throttling requests, causing latency to jump from 120 ms to over 1 s and a 4‑hour outage on our monitoring dashboard.

**Task:**  
I needed to design a fleet‑usage load shedder that could dynamically limit traffic per user while keeping the overall throughput high enough for paying customers, all without adding new servers.

**Action:**  
I implemented a token‑bucket rate limiter in NGINX Plus, backed by Redis for cross‑instance state. Each API key had a 60 req/min bucket with a burst capacity of 120. I added an adaptive “safety net” that watched queue depth and reduced per‑user limits when the cluster hit >70% CPU. For premium tiers, I exposed a separate endpoint with a higher token count and enabled graceful back‑off in the SDK. Finally, I set up Grafana dashboards to track bucket usage and auto‑scale only the API gateway pods.

**Result:**  
Latency returned to 150 ms on average, while we maintained 95% of peak traffic for paying customers. The system handled a 5× load during subsequent promotions with no outages. I learned that coupling per‑user rate limits with real‑time resource monitoring provides both stability and fairness without costly infrastructure expansion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
