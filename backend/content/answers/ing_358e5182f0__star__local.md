---
qid: ing_358e5182f0__star__local
question: 'Explain: The DSPy Philosophy: Programming vs. Prompting'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 275
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:15:21-05:00'
sources: []
---

**Situation** – At my last company we were launching a customer‑support chatbot that had to handle 12,000 tickets per day. The existing prompt‑based LLM solution was slow and produced inconsistent responses.

**Task** – I needed to redesign the system so it could process requests in real time while keeping developer effort low, without sacrificing quality.

**Action** – I introduced DSPy’s “programming vs. prompting” philosophy. Instead of writing one giant prompt, I built a modular pipeline: a *pre‑processor* that parsed user intent with spaCy, a *strategy selector* that chose the appropriate LLM call based on context, and an *output formatter* that stitched together snippets from multiple smaller prompts. Each component was a tiny Python function, so developers could tweak logic in code rather than rewrite text. I also added unit tests for each module, using pytest to assert output consistency.

**Result** – The new system cut average response time from 3.5 s to 0.8 s and increased accuracy (measured by NPS) from 68% to 85%. I learned that treating prompts as composable code units makes scaling AI applications far more maintainable than monolithic prompting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
