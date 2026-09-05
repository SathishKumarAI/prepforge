---
qid: ing_583992ef3e__star__local
question: 'Explain: Modeling Semantic Relationships ¶'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 339
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:55-05:00'
sources: []
---

**Situation** – While leading a recommendation engine for an e‑commerce startup, we noticed that our product similarity scores were low; customers were frequently clicking on unrelated items, hurting conversion rates.

**Task** – I needed to build a model that captures semantic relationships between product titles and descriptions so the similarity metric reflects true user intent, aiming to lift click‑through rate by at least 10 %.

**Action** – First, I scraped 50k product listings and pre‑processed text (tokenization, lemmatization). I then trained two embedding pipelines: (1) a fastText model fine‑tuned on our corpus to capture sub‑word semantics; (2) a BERT‑base transformer fine‑tuned for sentence similarity using cosine loss. I compared embeddings by computing pairwise similarities and validating against a manually annotated “related” set of 5k pairs. After selecting the best performing BERT embeddings, I integrated them into our recommendation pipeline as a weighted feature in the scoring function, balancing with existing collaborative filtering signals.

**Result** – In A/B testing over two weeks, click‑through rate increased from 4.2 % to 5.1 % (≈20 % lift), and conversion rose by 8 %. The exercise taught me how fine‑tuned language models can surface subtle semantic nuances that static bag‑of‑words methods miss, and the importance of validating embeddings against real user behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
