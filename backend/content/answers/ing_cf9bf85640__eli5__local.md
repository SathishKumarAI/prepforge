---
qid: ing_cf9bf85640__eli5__local
question: 'Explain: Latency tiers (the core design decision)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 288
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:07-05:00'
sources: []
---

Imagine your brain as a kitchen that makes soup. The *latency tier* is like deciding how fast you need the soup ready and how much effort you’re willing to put into it.

**Tier 1 (low‑latency)**: You want soup instantly, so you use pre‑made stock, just heat it up and stir. In AI this means a small, quick model that runs on cheap hardware and gives answers in milliseconds—great for chatbots or real‑time games.

**Tier 2 (medium‑latency)**: You’re okay with waiting a bit longer, so you simmer the soup from scratch, adding fresh ingredients. The AI model is larger, more accurate, but needs a stronger GPU and takes a few seconds to answer—good for medical diagnosis or detailed image analysis.

**Tier 3 (high‑latency)**: For the most complex dishes, you spend hours braising and refining flavors. This tier uses massive models that require powerful servers and may take minutes; it’s reserved for tasks like scientific research or high‑precision translation where accuracy outweighs speed.

Choosing a latency tier balances how quickly you need results against how much compute power you’re willing to use—just as you’d pick a soup recipe based on your appetite and kitchen time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
