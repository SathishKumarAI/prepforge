---
qid: ing_948872966e__star__local
question: 'Explain: API-level Context Caching (Prompt Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 370
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:54-05:00'
sources: []
---

**Situation** – In my last role I was building a conversational AI product for an e‑commerce client that had to handle 10k concurrent chat sessions daily. Each user query triggered a call to the OpenAI API, and the cost ballooned because we were sending the entire conversation history every time.

**Task** – Reduce API usage and latency by caching context at the API level (prompt caching) so that repeated prompts could be served from cache instead of re‑sending the full prompt to the model, while still maintaining accuracy for new user inputs.

**Action** – I implemented a key‑value store in Redis where each session’s “cached prompt” was the concatenation of the last 5 turns. The key was a hash of the session ID and a version number that incremented whenever the user added a new message. When a request came in, my middleware first checked Redis; if a cached response existed I returned it immediately. If not, I called the OpenAI endpoint with the full prompt, stored the result back into Redis with a TTL of 30 minutes, and updated the cache key. I also built an instrumentation layer to log cache hit ratios and added a fallback to regenerate if the model’s confidence dropped below 0.8.

**Result** – Prompt caching cut our API calls by ~70%, slashing costs from $12k/month to $3.5k/month, while latency improved from 1.2 s to 350 ms on average. I learned that careful cache key design and TTL tuning are crucial for balancing freshness against savings in a real‑time AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
