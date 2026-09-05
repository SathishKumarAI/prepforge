---
qid: ing_4c5f97e014__eli5__local
question: 'Explain: NF4 (NormalFloat4) — Quantization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 209
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:37:58-05:00'
sources: []
---

Imagine you’re packing a suitcase for a trip, but the suitcase only has 16 slots and each slot can hold one of 16 different sizes of clothes (0–15). Your clothes are normally sized in whole inches, so to fit them into those 16 slots you first shrink every item by dividing its size by a fixed number (that’s **normalization**). Then you round the result to the nearest integer between 0 and 15. That’s what NF4 does for numbers inside an AI model: it normalizes floating‑point values, quantizes them into just four bits (16 possible levels), and stores only those small integers. Later, when the model needs the original value, it reverses the process—scales back up from the 4‑bit code to a close approximation of the float. The benefit? Huge savings in memory and faster calculations, while keeping accuracy almost intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
