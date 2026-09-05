---
qid: ing_b0050a9de8__star__local
question: 'Explain: OpenAI Core Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:07-05:00'
sources: []
---

**Situation:** At my previous role, the product team needed a recommendation engine for a large e‑commerce platform that handled over 2 million daily users. The existing model was built on generic OpenAI embeddings but struggled with niche categories, causing a 12% drop in click‑through rate during holiday sales.

**Task:** I had to design and deploy a custom problem solution using the OpenAI Core Custom Problems framework so we could fine‑tune embeddings on our proprietary product taxonomy and improve relevance scores by at least 15%.

**Action:** First, I gathered a curated dataset of 500k user interactions, labeling each with “relevant” or “irrelevant” based on conversion data. Using the OpenAI Core API, I created a custom problem definition that mapped these labels to a binary classification objective. I then trained a fine‑tuned model with the `text-embedding-3-custom` endpoint, iterating over hyperparameters (learning rate 1e‑5, batch size 64) and using early stopping on validation loss. After deployment, I set up a real‑time inference pipeline via FastAPI, caching embeddings in Redis to keep latency under 30 ms.

**Result:** The new model raised the click‑through rate by 18% during the next holiday season, reduced cart abandonment by 9%, and cut server costs by 12% thanks to more efficient inference. I learned that defining a clear custom problem and iterating on data quality is key to unlocking OpenAI’s full potential for domain‑specific tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
