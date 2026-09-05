---
qid: ing_9532ce1ed2__eli5__local
question: 'Explain: Loss Spikes — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 230
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:21-05:00'
sources: []
---

**Loss spikes in pre‑training are like a student taking a sudden, hard test.**  
When an AI model learns from scratch (pre‑training), it starts with random “knowledge” and tries to predict the next word or image patch. Each guess earns a *loss*—a number that tells how far off the prediction is. If most guesses are close, loss stays low. But if the model suddenly misreads a pattern—say it confuses a cat’s tail for a dog’s ear—the loss shoots up sharply; that’s a spike.

A spike happens when the model encounters data very different from what it has seen so far or when its internal “weights” (the tiny knobs it adjusts) are in an unstable state. Just like a student who suddenly forgets a key concept, the AI needs to adjust its weights more aggressively to recover. Over time, with many examples, those spikes smooth out and the model learns steadily.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
