---
qid: ing_4688114c9a__eli5__local
question: 'Explain: Q24: Compare batching strategies for LLM serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 279
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:28:53-05:00'
sources: []
---

Imagine you’re a chef in a busy kitchen. **Batching** is how you decide which orders to cook together before sending them out.

1. **Single‑request batch (no batching)** – You bake one cake, deliver it, then start the next. Fast for one order but wasteful if many come at once; the oven sits idle while waiting for the next customer.

2. **Fixed‑size batch** – You wait until you have, say, 10 orders, then cook them all together. The oven runs at full capacity, but some customers may have to wait a bit longer because you’re holding back the last few.

3. **Dynamic (adaptive) batching** – Your kitchen watches the queue in real time: if a lot of orders pile up, it groups them quickly; if only a couple arrive, it still batches them after a short pause. This balances speed and oven efficiency, ensuring customers get their food soon while keeping the stove busy.

In LLM serving, these strategies decide when to combine multiple user prompts into one big compute job, affecting latency (wait time) and throughput (prompts handled per second). The chef analogy helps you see why each method trades off waiting for better resource use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
