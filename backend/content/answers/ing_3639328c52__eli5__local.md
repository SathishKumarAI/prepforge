---
qid: ing_3639328c52__eli5__local
question: 'Explain: Exact Match — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 259
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:41-05:00'
sources: []
---

**Exact‑Match Evaluation for an LLM**

Imagine a student answering a spelling test. The teacher checks whether each word the student writes is *exactly* the same as the answer key—no extra letters, no missing ones, no different punctuation. In AI, we do the same thing with a language model’s output.

1. **Prompt** – Like the question on the test sheet.
2. **Model response** – The student’s written answer.
3. **Reference answer** – The teacher’s official solution (the “ground truth”).

We compare every token (word or punctuation mark) one‑by‑one. If all tokens line up perfectly, we give a 1 (full credit). If even one token differs—say the model writes “colour” instead of “color”—we give a 0 for that position and the overall score drops.

Because this method is strict, it’s great for tasks where exact wording matters (legal contracts, code snippets), but it can be harsh when different phrasing still conveys the same meaning. It’s like grading a spelling test: perfect match gets full marks; any slip costs points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
