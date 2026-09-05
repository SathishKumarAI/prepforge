---
qid: ing_3215978b75__star__local
question: Your provider gives you 2M tokens/minute. How do you rate-limit your own
  users so you don't blow through it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 355
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:38-05:00'
sources: []
---

**Situation:**  
In a SaaS product that offers on‑the‑fly image captioning, we signed up with an AI provider that limits us to 2 million tokens per minute. Our user base had just hit 5,000 concurrent sessions, and the raw request volume could easily exceed the quota during peak hours.

**Task:**  
I needed to design a rate‑limiting strategy that kept token usage under the 2M/min ceiling while maintaining acceptable latency for our users.

**Action:**  
1. I profiled typical requests: average caption length was ~120 tokens, but some users sent large batches (up to 10 images).  
2. Implemented a sliding‑window counter per API key using Redis’ `INCRBY` and `EXPIRE`. Each request increments the token count by its estimated usage.  
3. Added a “burst window” of 30 s that allows short spikes, but enforces a hard cap when the 60‑second total exceeds 2M.  
4. Built a fallback: if a user’s batch would push them over the limit, we split it into smaller chunks and queue remaining requests with exponential backoff.  
5. Monitored real‑time usage via Grafana dashboards; set alerts at 80% of quota.

**Result:**  
During a month‑long load test, token consumption stayed below 1.8 M/min even during a 3× traffic spike. User latency averaged 120 ms, with only 0.5% of requests delayed by the queue. I learned that coupling per‑user counters with burst allowances gives both fairness and predictability in token budgeting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
