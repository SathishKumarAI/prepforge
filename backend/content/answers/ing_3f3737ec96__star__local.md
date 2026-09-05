---
qid: ing_3f3737ec96__star__local
question: 'Explain: Data Curriculum and Quality — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 299
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:32-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a new language model for our customer support chatbot. The training set had over 10 GB of logs, but the quality varied wildly: some conversations were noisy, others duplicated phrases, and a handful contained sensitive data flagged by GDPR.

**Task** – My goal was to design a data curriculum that maximized model performance while ensuring data integrity, so we could hit a perplexity target of 18 within two weeks of training.

**Action** – I first implemented an automated quality pipeline: a rule‑based filter removed any messages with personal identifiers, followed by a clustering step using sentence embeddings to eliminate near‑duplicates. Next, I created a curriculum schedule that staged the data by increasing difficulty—starting with short, high‑confidence support tickets, then gradually introducing longer dialogues and edge cases. I also set up an active learning loop: after each epoch I sampled low‑confidence predictions and had them manually reviewed, feeding corrections back into the training pool.

**Result** – The curated curriculum cut training time by 30 % and lowered perplexity to 16.4, a 10 % improvement over the baseline. I learned that systematic data quality checks coupled with staged exposure can dramatically accelerate convergence in pretraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
