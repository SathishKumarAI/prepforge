---
qid: ing_09a724f6cb__eli5__local
question: 'Q: Why is HyDE (Hypothetical Document Embedding) risky for some applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 186
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:01-05:00'
sources: []
---

Imagine you’re trying to write a recipe book but you don’t have the actual recipes—just a handful of ingredients and a vague idea of what they might taste like. HyDE (Hypothetical Document Embedding) works similarly: it invents “imaginary” documents that look like real text, then uses those fictions to teach a model how to answer questions.  

Because these invented passages aren’t verified, the model can learn wrong facts or mix up details, just as a cook might mis‑label an ingredient and end up with a dish that’s off. In safety‑critical areas—medical advice, legal rulings, financial decisions—such mistakes are unacceptable. So HyDE is risky when accuracy matters more than speed or creativity; the model may produce plausible but false information that users could trust as real.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
