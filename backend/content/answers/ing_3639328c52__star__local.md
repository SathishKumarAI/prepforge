---
qid: ing_3639328c52__star__local
question: 'Explain: Exact Match — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 320
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:40-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were launching an AI‑driven chatbot to handle account queries. Our QA team noticed that the model’s answers often matched the training data too closely, producing verbatim responses that sounded robotic and sometimes included sensitive phrasing from past conversations.

**Task** – I was tasked with implementing an evaluation framework to measure “exact match” rates and reduce them while keeping answer relevance high enough for compliance and customer satisfaction.

**Action** – I built a lightweight pipeline in Python using the Hugging Face `datasets` library. For each user prompt, we generated 10 responses, tokenized them with `tiktoken`, and compared n‑gram overlap to the reference answer. Exact match was flagged when the entire response matched any training example. We then applied a stochastic sampling temperature of 0.8 and added a “response paraphrase” layer that ran GPT‑4 through a paraphrasing prompt before scoring, effectively lowering exact match from 62% to 28%. I also set up an automatic alert in Grafana when the metric dipped below 30%.

**Result** – The chatbot’s exact match rate dropped by 34 percentage points, improving user perception scores by 12% on post‑interaction surveys. I learned that precise metric definition and a lightweight real‑time pipeline are key to balancing compliance with natural language quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
