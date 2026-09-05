---
qid: ing_bf01e85b64__star__local
question: What is prompt caching? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 284
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:43-05:00'
sources: []
---

**Situation:**  
During a product launch for our chatbot‑powered customer support platform, we noticed that the response time from our inference API was creeping above 2 seconds on high traffic days, hurting user satisfaction scores.

**Task:**  
I had to reduce latency by at least 30% without sacrificing model accuracy or adding significant infrastructure cost.

**Action:**  
I introduced prompt caching. I set up a Redis cache keyed on the exact prompt text and tokenized input; when a request hit the cache, we returned the pre‑computed embedding vector instead of re‑running the language model. For new prompts, the model ran normally, and its output was stored for future reuse. I also added a TTL of 24 hours to keep the cache fresh and monitored hit rates with Prometheus.

**Result:**  
Cache hit rate climbed to 65%, cutting average inference latency from 2.1 s down to 1.4 s—a 33% improvement. User satisfaction scores rose by 8 points, and we avoided deploying an expensive GPU cluster. I learned that simple cache layers can dramatically boost performance when prompts exhibit high repetition in real‑world traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
