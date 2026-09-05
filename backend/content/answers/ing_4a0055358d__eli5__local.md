---
qid: ing_4a0055358d__eli5__local
question: 'Explain: Synthetic Test Generation with RAGAS — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 309
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:16-05:00'
sources: []
---

Imagine you’re building a smart assistant that answers questions by pulling facts from a huge library (the “retrieval” part) and then writing its own explanation (the “generation” part). To make sure it’s doing both parts right, we create fake quizzes—synthetic tests—that mimic real user questions but we already know the correct answer.

**Synthetic Test Generation** is like an instructor making a mock exam: you give the assistant a question, let it fetch a passage from the library, and then ask it to explain. Because you control the passages, you can check exactly how well it picked the right snippet and how accurately it wrote about it.

**RAGAS (Retrieval‑Augmented Generation Assessment System)** is the grading rubric for that mock exam. It looks at two things:

1. **Relevance** – Did the assistant pull a passage that actually contains the needed information?  
2. **Coherence & Correctness** – Does its explanation follow from that passage and stay true to it?

Think of RAGAS as a teacher who first checks if you chose the right textbook page (relevance), then reads your essay to see whether you used that page correctly and didn’t add false facts (coherence). By generating many synthetic tests and grading them with RAGAS, developers can quickly spot where the assistant’s search or writing needs improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
