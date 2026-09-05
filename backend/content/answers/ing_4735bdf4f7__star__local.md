---
qid: ing_4735bdf4f7__star__local
question: 'Explain: A note on simply using a longer prompt — Contextual Retrieval
  in AI Systems \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 318
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:07-05:00'
sources: []
---

**Situation** – At my previous company we were building an internal knowledge‑base assistant for the support team. The bot was great at answering FAQs, but when a new product launch came up, its answers became stale and users complained that it kept repeating old documentation.

**Task** – I needed to improve relevance without retraining the model from scratch. The goal was to make the assistant surface the most recent context automatically for each user query, cutting down the mean time‑to‑answer by 30 %.

**Action** – I implemented a contextual retrieval layer inspired by Anthropic’s paper. First, I indexed all internal documents in ElasticSearch with metadata tags (product version, release date). When a query arrived, my middleware ran a lightweight semantic search over the top 20 hits and then concatenated those snippets into a longer prompt before passing it to GPT‑4. To keep latency low, I cached recent queries for 24 hours and limited the prompt size to 4 k tokens. I also added a “confidence score” filter so only passages with >0.8 similarity contributed.

**Result** – The bot’s precision jumped from 68 % to 87 %, and support agents reported a 32 % reduction in ticket escalation. I learned that a simple retrieval step can dramatically boost an LLM’s usefulness without costly re‑training, and that careful prompt engineering is key when working with token limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
