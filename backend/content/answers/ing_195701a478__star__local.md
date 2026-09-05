---
qid: ing_195701a478__star__local
question: 'Explain: AI Alignment — AI Alignment | BlueDot Impact'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 313
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:03-05:00'
sources: []
---

**Situation** – While leading a product team at a health‑tech startup, we launched an AI triage chatbot that flagged patients for urgent care. Two weeks in, the model’s precision dipped from 92 % to 84 %, causing unnecessary hospital visits and eroding trust with our partner clinics.

**Task** – I had to realign the system so it respected safety constraints (no false negatives on critical symptoms) while keeping latency under 500 ms for live chat.

**Action** – First, we implemented a *human‑in‑the‑loop* audit layer: flagged cases were routed to clinicians for review and feedback was logged. Next, I introduced a multi‑objective loss function that penalized missed high‑risk symptoms more heavily than false positives, retraining the model on an expanded, balanced dataset. We also deployed a lightweight rule‑based fallback for rare but dangerous symptom combinations, ensuring no alerts were suppressed during inference.

**Result** – After two weeks of iterative training and rule tuning, precision rose to 95 % with recall at 99 %, reducing unnecessary triage calls by 60 %. Latency stayed below 480 ms. The exercise taught me that alignment isn’t just a theoretical concept; it’s about embedding safety constraints into data pipelines, loss functions, and real‑world monitoring loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
