---
qid: ing_83ef985d7e__eli5__local
question: 'Explain: The PM wants AI summaries of the user''s private messages. Design
  it privacy-first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 206
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:56-05:00'
sources: []
---

Imagine your private messages are like a secret diary that you keep locked in a safe. The product manager (PM) wants a “summary” – just the key ideas, not the whole diary. To keep it privacy‑first, we treat the diary with two rules:

1. **No copy‑paste** – Instead of pulling the entire text into a computer, we let the AI read each page in place, like a robot that can see but cannot write down what it sees.
2. **Anonymized highlights** – The robot only writes short bullet points and never stores any personal names or exact phrases.

In technical terms, this means using *on‑device inference* (the AI runs locally on the user’s phone) and *token‑level masking* (removing identifiers before sending data to a server). The result is a useful summary that respects privacy because no raw message ever leaves the device.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
