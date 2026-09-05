---
qid: ing_bf6e55d2e6__eli5__local
question: 'Explain: Advantages and disadvantages of lazy loading'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 277
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:17-05:00'
sources: []
---

Think of a lazy learner as a student who never writes notes in class. Instead, the student remembers every single question that was asked and the answer given, storing them all for later use. When a new question arrives, the student looks back at all remembered examples to decide the best answer, rather than having already prepared a general rule.

**Advantages**

- **No upfront training time:** The student (algorithm) can start answering immediately; it only “learns” when questions actually come in.
- **Highly accurate for similar cases:** Because every past example is available, the answer can be tailored to the exact situation.
- **Very simple implementation:** Just store and retrieve data.

**Disadvantages**

- **Slow at answering new questions:** The student must sift through all remembered examples each time, which takes longer as the collection grows.
- **Memory hungry:** Storing every example requires lots of space.
- **Poor generalization:** If a question is unlike any past one, the student has no rule to guess from and may give a bad answer.

So lazy learning trades quick training for slower, memory‑heavy predictions, much like a diligent but unprepared student who relies on rote recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
