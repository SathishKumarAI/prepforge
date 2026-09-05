---
qid: ing_c0c77e6b09__eli5__local
question: What are the root causes of hallucination, and what actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 273
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:10-05:00'
sources: []
---

Imagine a library where every book is written by an author who can only guess at the truth. When you ask a question, the AI pulls pages from many of those books and stitches them together into an answer. **Hallucination** happens when the “author” fills gaps with invented details—like adding a made‑up fact because no page contains the exact answer.

The root causes are:

1. **Missing or noisy data** – the training set lacks precise information for that question.
2. **Model size and flexibility** – bigger models can generate more plausible text, but they also “imagine” more when unsure.
3. **Prompt ambiguity** – vague questions leave room for guesswork.

Mitigation is like adding a librarian’s supervision:

- **Better data curation** (more accurate, diverse books) reduces blind spots.
- **Explicit grounding** – the model can be forced to cite sources or check against a database before replying.
- **Temperature control** – lowering randomness in generation makes it less likely to invent.

So, hallucination is the AI’s creative filler when it runs out of reliable material; careful data, source checking, and controlled creativity keep it from drifting too far into fiction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
