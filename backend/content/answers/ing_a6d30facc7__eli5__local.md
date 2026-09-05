---
qid: ing_a6d30facc7__eli5__local
question: Your agent reads screenshots and PDFs supplied by users. How do you defend
  against instructions hidden inside images?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 191
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:26-05:00'
sources: []
---

Imagine your agent is a curious child who loves to read books, but sometimes the books hide secret notes in the illustrations—tiny arrows or faint words that only the child might notice. To keep the child from being tricked by those hidden messages, we give it two rules: first, it looks at the whole picture as one block of text, not at each tiny pixel; second, if something looks suspicious (like a sudden change in color or a tiny shape that doesn’t belong), it asks a trusted adult for help before acting. In practice, the agent’s image‑reading system treats all images as a single “text blob” and checks for unusual patterns. If anything odd pops up, it pauses and confirms with a human moderator instead of following hidden instructions. This way the child stays safe from covert commands while still learning from the visible content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
