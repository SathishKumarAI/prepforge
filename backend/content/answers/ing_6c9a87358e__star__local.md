---
qid: ing_6c9a87358e__star__local
question: 'Explain: Few-shot — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 326
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:17-05:00'
sources: []
---

**Situation** – I was working on a client’s customer‑service chatbot that needed to understand and generate responses for niche product categories with almost no labeled data. The company had only a handful of example queries per category and the existing model performed poorly, scoring 0.45 F1 on a validation set.

**Task** – My goal was to boost the model’s understanding of these rare topics by leveraging few‑shot prompt engineering: create prompts that teach the language model to infer intent from minimal examples without retraining.

**Action** – I built a prompt template in Python that injected 3–5 carefully chosen example question/answer pairs for each category, then appended the new user query. Using OpenAI’s GPT‑4 API with temperature 0.2 and top_p 1.0, I iterated on the wording of the instruction sentence (“You are an expert in X…”). I also introduced a “few-shot counter” to adjust the number of examples based on confidence scores. After automated A/B tests, I deployed the best prompt version into production.

**Result** – The chatbot’s F1 jumped from 0.45 to 0.78 on unseen queries, and user satisfaction ratings increased by 12%. I learned that a well‑crafted few‑shot prompt can rival fine‑tuning when data is scarce, and that small tweaks in instruction phrasing have outsized impacts on model behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
