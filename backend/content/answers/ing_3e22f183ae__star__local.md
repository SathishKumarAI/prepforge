---
qid: ing_3e22f183ae__star__local
question: 'Q60: How would you evaluate whether an LLM is hallucinating?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 232
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:43-05:00'
sources: []
---

**Situation:** In a recent project we integrated a GPT‑4 model into our customer support chatbot, but users were reporting nonsensical product details—classic hallucinations.

**Task:** I had to design an evaluation framework that could quantify when the LLM was fabricating information versus pulling from reliable sources.

**Action:** First, I built a test set of 500 real‑world queries paired with verified answers from our knowledge base. Using the model’s internal “confidence score” (logits), I set up a threshold and logged mismatches. Next, I implemented an automated cross‑check: each generated response was fed into a retrieval API that pulled supporting documents; if no document matched the claim, it flagged a hallucination. I added a human review loop for edge cases and tracked metrics in Grafana dashboards.

**Result:** The framework reduced hallucinations from 18% to 4% within two weeks of deployment, cutting support tickets by 23%. It also taught me that combining model confidence with external verification is far more reliable than relying on one signal alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
