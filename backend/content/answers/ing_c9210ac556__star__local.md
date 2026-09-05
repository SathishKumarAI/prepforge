---
qid: ing_c9210ac556__star__local
question: 'Q: What is the risk of asking an LLM for too many structured fields at
  once?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 317
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:11:33-05:00'
sources: []
---

**Situation:** At my last company we were building a chatbot that extracted product specs from supplier PDFs. The client wanted the bot to return 12 distinct fields—weight, dimensions, material, SKU, price, lead time, warranty, safety rating, certification, availability, color options, and shipping weight—all in one response.

**Task:** I had to design an interaction that would let the LLM provide all those values reliably without sacrificing speed or accuracy.

**Action:** I first benchmarked a single prompt with 12 fields and found the model often omitted less common ones (e.g., safety rating) and produced garbled lists. To mitigate this, I split the request into two phases: a concise “summary” prompt that fetched the main attributes, followed by targeted sub‑prompts for the niche fields using slot filling. I also added explicit JSON schema validation in the backend to catch missing keys and implemented a retry logic that rephrased ambiguous slots.

**Result:** The bot’s recall for all 12 fields improved from 68 % to 92 %, latency dropped by 15 %, and user complaints about incomplete data fell by 70 %. I learned that overloading the LLM with too many structured fields at once dilutes focus, so a staged, schema‑guided approach yields far more reliable outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
