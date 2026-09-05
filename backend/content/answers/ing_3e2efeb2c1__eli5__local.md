---
qid: ing_3e2efeb2c1__eli5__local
question: Your VLM extracts invoice fields at ~91% per-field accuracy. The customer
  needs 99% and you cannot fine-tune the model. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 188
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:36-05:00'
sources: []
---

Imagine your AI is a library robot that pulls out books (invoice fields) from shelves with a 91 % success rate. The customer wants it to pick the right book 99 % of the time, but you can’t retrain the robot’s internal brain.

What you do instead is add a smart “second‑hand checker.” First let the robot fetch the books as usual. Then bring in a simple rule‑based system that looks at the titles, dates, and amounts and flags anything that seems off—just like a human librarian cross‑checking the return slips. If a field fails the check, ask the customer to confirm or correct it manually. This layered approach boosts overall accuracy without changing the robot’s core model, getting you close to 99 % while keeping the process simple and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
