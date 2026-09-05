---
qid: ing_ff310b0f3a__star__local
question: What is "context engineering," and how is it different from prompt engineering?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 301
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:59:13-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were building an AI‑powered loan underwriting tool that had to interpret customer data and provide risk scores within two seconds for each application.

**Task:** The product manager asked me to reduce the error rate from 12 % to under 5 % while keeping latency low. I needed to improve how the model understood user context, not just tweak the prompts.

**Action:** I introduced *context engineering*: instead of feeding a single prompt, we constructed a structured “context bundle” that included the applicant’s credit history, industry trends, and recent macro‑economic indicators. This bundle was passed as metadata alongside the raw text prompt to the LLM. We used vector embeddings from our internal knowledge graph and applied a lightweight attention mask so the model could focus on relevant historical patterns. In contrast, *prompt engineering* would have meant only rephrasing the question or adding examples; it wouldn’t provide the richer situational data we needed.

**Result:** The error rate dropped to 3.7 % and inference time stayed under 1.8 s per request— a 70 % reduction in mistakes without sacrificing speed. I learned that context engineering is about supplying the right background signals, whereas prompt engineering fine‑tunes wording alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
