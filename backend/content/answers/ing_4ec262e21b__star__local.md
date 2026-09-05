---
qid: ing_4ec262e21b__star__local
question: What is prompt (prefix) caching, and why is it one of the biggest cost levers
  available?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 316
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:59-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching a chatbot that answered compliance questions in real time. Our model was GPT‑4 based, and each user query cost us roughly $0.02 to compute, which ballooned our monthly spend to over $30k for just 15k requests.

**Task** – I had to reduce the per-request latency and cost without sacrificing answer quality, so that we could scale to 100k daily users within budget.

**Action** – I introduced prompt (prefix) caching: we pre‑computed embeddings for the static portion of every prompt—the system instructions and user context—and stored them in a Redis cache keyed by session ID. When a new query arrived, the model only received the dynamic suffix (the fresh question), so it reused the cached prefix vector. This cut the token count per inference from ~150 to ~30 tokens. I also added an LRU eviction policy and batch‑loaded prefixes during off‑peak hours.

**Result** – The average cost per request dropped from $0.02 to $0.005, slashing our monthly spend to ~$8k—an 73% reduction. Latency improved by 40%, and we scaled to 80k daily users without new infrastructure. I learned that reusing static prompt data is a simple yet powerful lever for both cost and performance in LLM deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
