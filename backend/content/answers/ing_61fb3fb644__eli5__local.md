---
qid: ing_61fb3fb644__eli5__local
question: What is loss masking in SFT, and why do you mask the prompt tokens?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 196
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:11:46-05:00'
sources: []
---

Imagine training a language model like teaching someone to read a story book. The *prompt* (the text we give it) is the page the student already knows; we want them to learn how to finish the next sentence. **Loss masking** is simply ignoring the mistakes on that known part while grading.

In “Supervised Fine‑Tuning” (SFT), we feed the model a prompt plus its correct continuation. The loss function tells us how far off the model’s answer is from the truth, but we *mask* or zero out the prompt tokens so their errors don’t influence the update. This keeps learning focused on predicting the new words, not “reinventing” what it already knows.

So, loss masking = telling the training algorithm: “Only pay attention to the parts you’re supposed to learn; ignore the rest.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
