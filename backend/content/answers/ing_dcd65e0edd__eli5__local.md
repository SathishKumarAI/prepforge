---
qid: ing_dcd65e0edd__eli5__local
question: 'Explain: The VLM pattern: vision encoder → projector → LLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 224
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:55-05:00'
sources: []
---

Imagine a detective (the large language model) who never sees pictures but has a super‑sharp photo‑journalist friend (the vision encoder). The photo‑journalist takes a picture of the world and turns it into a tidy, short “report” that the detective can read—this is the projector. So the pattern works like this:

1. **Vision encoder** – grabs visual details from an image and squeezes them into a compact, machine‑friendly description (like turning a photo into a headline).  
2. **Projector** – translates that description into a language format the detective can understand; it’s just a simple conversion step.  
3. **LLM (large language model)** – reads the headline, asks questions, and writes answers as if it had seen the picture.

In short: photo‑journalist → headline converter → detective who writes the final report. This lets a text‑only AI talk about images without ever “seeing” them directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
