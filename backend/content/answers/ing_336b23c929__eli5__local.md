---
qid: ing_336b23c929__eli5__local
question: A Copilot chat feature has a p95 latency budget of 3 seconds to first useful
  content. Where does the time go, and how do you cut it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 315
total_tokens: 495
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:57:32-05:00'
sources: []
---

Imagine ordering a pizza from a fast‑food place that promises you’ll get the first slice within 3 seconds of clicking “order.” The 3 seconds budget is split into three parts:

1. **Take‑out prep (≈0.5 s)** – the server receives your request, checks it’s valid and queues it for processing.
2. **Cooking (≈1.5–2 s)** – the AI model runs on powerful GPUs, generating text from the prompt. This is usually the biggest chunk because large models need many arithmetic steps.
3. **Delivery (≈0.5 s)** – once the model finishes, the response is packaged and sent back over the network to your screen.

To shave time:

- **Speed up prep**: Use faster web frameworks or reduce authentication checks.
- **Cut cooking**:  
  * Run a smaller, distilled version of the model (fewer layers).  
  * Cache common answers.  
  * Batch similar requests together so one GPU pass serves many users.  
- **Stream delivery**: Send a short “loading” message immediately, then stream tokens as they arrive instead of waiting for the whole text.

By treating each stage like a part of the pizza‑delivery chain, you can pinpoint where delays occur and apply the right tweak to stay under that 3‑second promise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
