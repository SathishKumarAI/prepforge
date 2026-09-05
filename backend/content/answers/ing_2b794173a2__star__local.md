---
qid: ing_2b794173a2__star__local
question: 'Explain: Perplexity AI Coding Problems — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 339
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:48-05:00'
sources: []
---

**Situation** – While interviewing for a senior ML engineer role at an AI startup, I was asked to solve a “perplexity” problem: calculate the perplexity of a language model on a new dataset that had a 10 % higher out‑of‑vocabulary (OOV) rate than my training corpus. The hiring team wanted to see how I’d handle real‑world data drift and measure model quality.

**Task** – My goal was to compute an accurate perplexity score, adjust for the OOV spike, and propose a quick fix that wouldn’t hurt latency or throughput on their inference API.

**Action** – I first loaded the dataset into a PyTorch DataLoader, then used the `torch.nn.functional.cross_entropy` with a smoothing factor of 0.1 to dampen the effect of rare tokens. To correct for OOVs, I added an `<unk>` token and re‑trained a tiny embedding layer on the fly using the `AdamW` optimizer for just 2 epochs (≈15 seconds). I then computed perplexity as `exp(loss)` and logged it with Weights & Biases for traceability.

**Result** – The perplexity dropped from 112 to 78, a 30 % improvement, while inference latency stayed under 20 ms. I learned that handling OOVs on the fly can be both fast and effective, and that small embedding updates are often enough to keep models robust against data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
