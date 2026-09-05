---
qid: ing_b1c5d26c0e__star__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 329
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:02-05:00'
sources: []
---

**Situation** – While leading the deployment of a conversational AI for our fintech chatbot, we noticed users repeatedly getting the same suggestions (“Check your balance”) after each query, especially during peak hours when the model was generating long responses.

**Task** – I had to reduce repetitive token generation without hurting fluency or relevance, ensuring the bot stayed within latency limits (≤150 ms per response).

**Action** – First, I instrumented the inference pipeline with a repetition penalty module that dynamically adjusted the logits of tokens already seen in the current utterance. I set an adaptive penalty factor (α) that increased for higher‑frequency tokens and decreased as context length grew, using PyTorch’s `logits = logits - α * repeat_counts`. Then I tuned α via A/B testing on a held‑out user interaction dataset, balancing BLEU scores (target ≥0.65) against repetition rates (target <5%). Finally, I integrated the module into the TorchServe deployment with a small GPU buffer to keep inference time within our SLA.

**Result** – Repetition dropped from 23% to 4% across all test sessions, while overall response quality improved by 8% according to user satisfaction surveys. The penalty logic added only ~12 ms per request, keeping latency under the 150 ms threshold. I learned that fine‑tuned, context‑aware penalties can drastically improve conversational flow without compromising speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
