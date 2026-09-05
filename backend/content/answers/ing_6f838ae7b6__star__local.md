---
qid: ing_6f838ae7b6__star__local
question: LLMs are non-deterministic, but a refund over $200 must never be auto-approved.
  Where's the line between prompting and code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 331
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:56-05:00'
sources: []
---

**Situation:** In my last role as a product engineer for an e‑commerce platform, we integrated a large language model (LLM) to handle customer support queries. A critical compliance rule required that any refund request over $200 must always be routed to a human agent; the system could not auto‑approve it.

**Task:** I had to ensure the LLM’s responses adhered strictly to this rule while still providing instant, helpful replies for lower‑value refunds and other inquiries, all without compromising user experience or violating data privacy.

**Action:** First, I defined a hard boundary in our request‑processing pipeline: any message containing a monetary value > $200 triggered an “auto‑reject” flag. The LLM was then prompted with a structured template that included this flag as a mandatory field. I also wrapped the model calls in a sandboxed function that intercepted and validated the output before it reached the user interface, logging every decision for auditability. To keep latency low, I used a lightweight prompt engineering technique—few‑shot examples showing correct handling of high‑value refunds—and cached frequent responses.

**Result:** After deployment, zero auto‑approved refunds over $200 were logged in the first six months, while average response time for standard queries dropped from 3.2 s to 1.4 s. The audit trail also reduced compliance review effort by 40%. I learned that combining a clear rule layer with controlled prompting is essential when deploying non‑deterministic AI in regulated workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
