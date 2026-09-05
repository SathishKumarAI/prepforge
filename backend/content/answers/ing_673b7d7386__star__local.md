---
qid: ing_673b7d7386__star__local
question: 'Explain: Evaluation — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 362
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:16-05:00'
sources: []
---

**Situation**  
When I joined a startup building an AI‑powered customer support bot, the existing FAQ engine returned irrelevant answers most of the time. The product team demanded that we redesign it to hit at least 80 % precision on real user queries by the next sprint.

**Task**  
My job was to evaluate and tune the retrieval model built with Haystack so that it met the accuracy target while staying within our latency budget (<300 ms per query).

**Action**  
I first set up a reproducible evaluation pipeline in Python. Using Haystack’s `Evaluator` I split the legacy FAQ dataset into train/validation/test splits, then ran the BM25 retriever and a transformer‑based dense encoder (Sentence‑BERT) in parallel. For each model I collected recall@k and precision@k, and plotted ROC curves to compare trade‑offs. I introduced a custom `ExactMatchMetric` that matched user intent tags from the dataset. After a few iterations of hyperparameter tuning—adjusting BM25’s `b` and `k1`, and fine‑tuning the dense encoder on our domain data—I deployed the hybrid retriever, which achieved 84 % precision@3 and 92 % recall@5.

**Result**  
The bot’s answer relevance jumped from 55 % to 84 %, cutting support ticket volume by 18 % in two weeks. I learned that a structured evaluation pipeline with clear metrics is essential for iterative improvement, and that combining sparse and dense retrieval often yields the best trade‑off between accuracy and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
