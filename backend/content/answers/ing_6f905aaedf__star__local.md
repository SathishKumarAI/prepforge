---
qid: ing_6f905aaedf__star__local
question: 'Explain: Tier 2 - LLM judge with policy-as-prompt'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 353
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:03-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching an AI‑powered compliance engine that needed to flag suspicious transaction patterns in real time. Our existing rule set was rigid and couldn’t keep up with evolving fraud tactics, leading to a 12 % false‑positive rate during peak trading hours.

**Task** – I had to design a dynamic “LLM judge” layer that could interpret policy rules written as natural‑language prompts, evaluate transaction data, and decide whether to block or allow the flow without human intervention—while keeping latency under 200 ms.

**Action** – First, I drafted concise policy prompts (e.g., “If the transfer exceeds $10k and originates from a newly registered account, flag for review”) and stored them in a lightweight policy store. Using OpenAI’s GPT‑4 Turbo, I built a microservice that injects transaction context into these prompts, runs inference on an edge GPU, and returns a compliance score. I added a confidence threshold layer; low‑confidence cases are routed to the human analyst queue. To keep costs down, I cached prompt embeddings and batch processed 50 transactions per request.

**Result** – The LLM judge cut false positives by 35 % (down to 7.8 %) while maintaining latency below 180 ms. It also reduced analyst workload by 40 %, freeing them for higher‑complexity investigations. I learned that policy-as-a-prompt turns a static rule engine into a flexible, explainable AI layer—critical when regulations evolve faster than code can.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
