---
qid: ing_9162cf25d7__star__local
question: 'Explain: Additional talking points — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 351
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:23:37-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time recommendation engine for a microblogging service similar to Twitter, where every user receives personalized content within milliseconds of posting. The existing system served static feeds; click‑through rates were only 3 % and latency exceeded 2 s.

**Task** – Deliver an end‑to‑end solution that could predict top posts per user in under 500 ms while scaling to millions of concurrent users, with a goal of raising engagement by at least 10 %.

**Action** – I architected a two‑stage pipeline. First, a lightweight feature extractor (Spark Structured Streaming) ingested user actions and post metadata, computing real‑time embeddings using Word2Vec on hashtags and user interests. Second, I deployed an XGBoost model behind a Redis cache; the model scored candidate posts in batches of 200 and returned the top 20 per user. To keep latency low, I used GPU inference on a single NVIDIA A100 and horizontally scaled with Kubernetes autoscaling. We also added A/B testing logic to surface different ranking functions.

**Result** – After launch, click‑through rose to 4.2 % (+40 %), session time increased by 15 %, and the system comfortably handled 5 M active users with <400 ms average latency. I learned that marrying streaming feature pipelines with efficient model serving can turn a data‑heavy recommendation problem into a production‑grade system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
