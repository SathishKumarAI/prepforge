---
qid: ing_09fc640335__eli5__local
question: 'Explain: Defining Callbacks — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 229
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:28-05:00'
sources: []
---

Imagine training a student (the neural network) with a personal tutor who watches every step and gives timely feedback—“you’re over‑fitting, slow down” or “great speed, keep going.” In deep learning that tutor is called a **callback**: a piece of code that runs automatically at specific moments during the model’s training cycle (before/after each epoch, after each batch, etc.).

In the ResNet‑50 tutorial, callbacks might:

- **EarlyStopping** – stops training if accuracy no longer improves, preventing wasted time.
- **ModelCheckpoint** – saves the best version of the network so you never lose progress.
- **LearningRateScheduler** – gently reduces the learning rate as training goes on, like a tutor easing back after intense practice.

These callbacks are plugged into the training routine (e.g., `model.fit(...)`) and run without you having to write extra loops. They keep training efficient, safe, and often smarter than manual bookkeeping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
