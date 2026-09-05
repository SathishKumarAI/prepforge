---
qid: ing_5adc941de6__star__local
question: 'Explain: Classifying Documents & Queries by Language'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:20-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a global knowledge‑base platform that served users in over twenty languages. During the first beta, search results for non‑English queries were often irrelevant because the system misidentified the language of incoming documents and user queries.

**Task:**  
I was tasked with building an accurate, real‑time language classification pipeline that could tag both uploaded PDFs and free‑text queries so our search engine could route them to the correct language index without adding noticeable latency.

**Action:**  
First, I gathered a balanced corpus from the platform’s existing content (≈200k documents per language). I experimented with two approaches: a rule‑based n‑gram frequency model and a lightweight transformer (DistilBERT fine‑tuned on multilingual data). After profiling, the DistilBERT variant delivered 96.7 % accuracy while keeping inference under 15 ms per document on our GPU‑free edge servers. I wrapped it in a microservice with a retry fallback to the n‑gram model for edge cases. To keep the model updated, I set up an automated retraining pipeline that ingested new user uploads weekly.

**Result:**  
Post‑deployment, search relevance for non‑English queries improved by 22 % (measured via click‑through rate), and we cut language misclassification from 12 % to under 1 %. The experience taught me how to balance model performance with operational constraints and the value of continuous data drift monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
