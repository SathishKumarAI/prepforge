---
qid: vq_33b9fa6597__star__local
question: What is Large Language Model (LLM)?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 332
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:54:32-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an automated customer‑support chatbot that needed to understand and generate natural language responses in real time. The existing rule‑based engine could only handle about 15% of user intents, and every new feature required writing dozens of hand‑crafted patterns.

**Task** – I was tasked with replacing the legacy system with a model capable of handling open‑domain queries while keeping latency under 300 ms per request and staying within our $200/month GPU budget.

**Action** – I introduced a Large Language Model (LLM) architecture, specifically GPT‑4o via OpenAI’s API. I fine‑tuned it on a curated dataset of 10,000 support tickets, added prompt engineering to keep responses concise, and wrapped the calls in a caching layer using Redis. To meet latency constraints, I deployed the model behind an edge function on Cloudflare Workers, which reduced round‑trip time by ~40%. I also set up monitoring with Grafana to track response quality scores (BLEU) and cost per inference.

**Result** – The new chatbot handled 87% of user intents correctly on live traffic, cutting support tickets by 35% in the first month. Response latency averaged 220 ms, under our target. I learned that a well‑engineered LLM pipeline can dramatically improve product efficiency while staying cost‑effective, and that continuous monitoring is key to maintaining quality at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
