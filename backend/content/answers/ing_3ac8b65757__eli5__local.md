---
qid: ing_3ac8b65757__eli5__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 189
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:21-05:00'
sources: []
---

Think of a huge recipe book (the model) that can bake many different dishes. **Prefill** is like gathering all the ingredients before cooking—reading the whole recipe, noting how much flour, sugar, and spices are needed, and storing those amounts in a pantry. **Decode disaggregation** is the actual cooking step: taking the pre‑prepared pantry items and mixing them in the right order to produce the final dish.

Large‑scale AI systems separate these steps because fetching all ingredients at once (prefill) can be slow and memory‑heavy, while the cooking process (decode) happens many times for different outputs. By keeping the ingredient list ready separately, the system can quickly start cooking new dishes without re‑reading the entire recipe each time. This split makes deployment faster and more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
