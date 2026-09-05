---
qid: ing_9f5c5c7b78__star__local
question: 'Explain: Q70: Explain provider-level prompt caching and how you would architect
  a system to maximize cache hit rate.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 346
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:57-05:00'
sources: []
---

**Situation** – At my previous company we launched an AI‑powered customer support chatbot that served 12 k queries per day. The response latency was higher than SLA because every request triggered a fresh prompt sent to the language model, which cost both time and money.

**Task** – I needed to design a provider‑level prompt caching layer that would reduce API calls by at least 70% while keeping cache freshness for dynamic product updates.

**Action** – First, I profiled the prompt generation pipeline and identified three static sections: greeting, policy disclaimer, and FAQ snippets. I built an in‑memory LRU cache per data center using Redis with a TTL of 24 h, keyed by a hash of the prompt text. For dynamic parts (product specs), I used a separate cache that invalidated on CMS webhook events. To increase hit rate, I introduced “prompt templates” where placeholders were replaced server‑side, ensuring identical prompts map to the same cache key. I also added a fallback microservice that served cached responses for 90% of requests and only called the provider when a miss occurred.

**Result** – Cache hit rate jumped from 15 % to 78 %, cutting API calls by 65 % and reducing latency from 1.8 s to 0.4 s. Costs dropped 40 %. I learned that careful key design, event‑driven invalidation, and separating static vs dynamic prompt parts are critical for high cache efficiency in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
