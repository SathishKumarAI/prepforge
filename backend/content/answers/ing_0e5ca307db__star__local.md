---
qid: ing_0e5ca307db__star__local
question: 'Explain: 🎛️ Fine-tuning, RLHF & Alignment — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 369
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:25-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a project at a fintech startup where we needed an LLM that could draft investment reports from raw market data without generating hallucinations or biased language. Our baseline GPT‑4 model had a 23 % error rate in factual accuracy and a 15 % incidence of tone drift toward overly aggressive recommendations, which would violate regulatory guidelines.

**Task** – My goal was to reduce factual errors below 5 %, eliminate tone bias, and ensure the model’s outputs stayed within the company’s compliance policy while keeping inference latency under 200 ms on our edge GPUs.

**Action** – I first assembled a curated dataset of 120k vetted reports and used supervised fine‑tuning (SFT) to teach the model correct phrasing. Then I implemented reinforcement learning from human feedback (RLHF): a small team of compliance officers scored 3,500 sample outputs on factuality and tone, generating a reward model that guided policy gradients. To address alignment, I added a safety wrapper that cross‑checked each paragraph against a rule set derived from regulatory texts, rejecting or flagging any content that violated constraints before delivery.

**Result** – Post‑deployment, factual accuracy rose to 97 %, tone drift dropped to <1 %, and inference latency stayed at 180 ms. The project cut compliance review time by 60 % and earned a “Best AI Compliance Initiative” award at the annual fintech summit. I learned that coupling SFT with RLHF and a hard‑coded safety layer is essential for deploying trustworthy, policy‑aligned language models in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
