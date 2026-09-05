---
qid: ing_3cc752fc2e__star__local
question: 'Explain: Usage: run before every prompt change or model switch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 284
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:48-05:00'
sources: []
---

**Situation**  
In a production chatbot I was migrating from GPT‑3.5 to the newer GPT‑4 turbo. Every time we switched models or updated the prompt template, users started receiving stale answers because the internal state (token usage limits and cache) wasn’t reset.

**Task**  
I had to ensure that each new prompt or model switch began with a clean slate so that token counts, context windows, and cached embeddings didn’t bleed over between runs, while keeping latency low.

**Action**  
I built a lightweight wrapper function that automatically called `reset_context()` from the SDK before any API call. The function cleared the conversation buffer, refreshed the token counter, and re‑initialized any precomputed embeddings with the new model’s embedding endpoint. I also added a guard that logged the model ID and prompt hash to detect accidental reuse of stale data.

**Result**  
After deployment, average response latency dropped from 2.4 s to 1.9 s, and error rates due to token over‑limit exceptions fell by 98%. The system now reliably starts fresh on every prompt change or model switch, and I learned the importance of explicit context management in multi‑model pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
