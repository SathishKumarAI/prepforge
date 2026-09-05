---
qid: ing_017587d67c__eli5__local
question: How do you measure faithfulness - whether the model's answer is actually
  grounded in retrieved context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 207
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:37:15-05:00'
sources: []
---

Imagine a librarian who reads a book and then tells you what’s inside. To check that she didn’t make up details, you ask her a question and compare her reply with the exact page she was supposed to consult.

In AI, the “librarian” is the model, the “book pages” are snippets of text it retrieved from a database, and the answer is its final statement. **Faithfulness** means the answer can be traced back to those retrieved snippets—no new facts were invented.

A simple way to test this is: give the model a question, let it fetch relevant passages, then ask it to cite the exact sentences it used. If every claim in its answer matches something in the cited text, it’s faithful. If it mentions things that never appear in those snippets, the answer is unfaithful—just like a librarian who invented details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
