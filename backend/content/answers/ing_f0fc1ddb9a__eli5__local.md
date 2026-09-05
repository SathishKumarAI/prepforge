---
qid: ing_f0fc1ddb9a__eli5__local
question: Your model file is 800MB. How does it get onto users' devices?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 174
total_tokens: 338
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:56:09-05:00'
sources: []
---

Think of your model like a giant recipe book that’s too heavy to hand‑out in one piece. Instead, the book is split into many small pages (tiny data chunks). When you install the app, the device first downloads a lightweight “starter” page that tells it where to find the rest. Then, as you open the app or start a task, the device pulls just the specific pages it needs—maybe the part of the recipe for a cake, not the whole cookbook. These small pieces are cached locally, so you don’t have to re‑download everything every time. That’s how an 800 MB model can live on a phone: it arrives in many tiny parts and is assembled only as needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
