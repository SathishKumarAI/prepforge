---
qid: ing_b84613937f__eli5__local
question: What is data leakage in an LLM system, and what are the main channels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 228
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:36-05:00'
sources: []
---

Imagine a huge library that’s learning to write stories by reading every book it can find. **Data leakage** is when some books that should stay private sneak into the library’s training shelves, so the new stories accidentally reveal secret passages or private information.

In an LLM (large language model) there are three main ways this sneaking happens:

1. **Training data bleed‑through** – The model is fed a dataset that already contains sensitive text, like customer emails or medical records.
2. **Fine‑tuning on private corpora** – After the base model learns, it’s further trained on a small, confidential set of documents; the new weights now carry those secrets.
3. **Inference leaks** – When the model answers a question, it can “copy” part of the training text verbatim, unintentionally exposing the original source.

Keeping the library’s shelves clean—by vetting data, masking private content, and monitoring outputs—is how developers guard against this leak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
