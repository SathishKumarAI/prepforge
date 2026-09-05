---
qid: ing_12940273a5__eli5__local
question: 'Explain: 1.2 - Pre-training Approach — A Complete Guide to BERT with Code
  | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 229
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:01-05:00'
sources: []
---

Imagine a language model as a curious child learning to read by first watching lots of books without trying to answer questions. In the **pre‑training** phase of BERT (Bidirectional Encoder Representations from Transformers), this “child” reads sentences and tries two simple games:

1. **Masked Language Modeling (MLM)** – Random words in a sentence are hidden, and the child must guess them using the context on both sides.  
2. **Next‑Sentence Prediction (NSP)** – The child is shown two consecutive sentences and decides whether they actually follow each other.

By playing these games over billions of sentences, BERT learns rich “word embeddings” (numerical fingerprints) and a deep sense of how words interact in context. After this practice, the model can be fine‑tuned for specific tasks—like answering questions or classifying sentiment—with just a few extra lines of code. Think of pre‑training as building a solid foundation before tailoring the structure to a particular purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
