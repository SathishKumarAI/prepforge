---
qid: ing_a4a5ebeb55__eli5__local
question: 'Explain: Failure Mode #1: Retrieval Without a Context Budget'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 218
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:59:22-05:00'
sources: []
---

**Failure Mode #1: Retrieval Without a Context Budget**

Imagine a librarian who can pull any book from the shelf, but has no limit on how many books she can hold in her hands at once. She keeps grabbing more and more titles until her arms are full, then tries to answer a question. The answer ends up garbled because she’s juggling too many volumes simultaneously.

In AI language models, *retrieval* is the process of pulling relevant information from a large database (the “books”). A *context budget* is like the librarian’s hand‑capacity: it limits how much retrieved text can be fed into the model at one time. If the model retrieves without respecting this limit—i.e., pulls in too many pieces of text—it swallows everything, leading to confusion or incorrect answers. The key fix is to set a clear budget so the AI only “holds” what’s necessary for the task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
