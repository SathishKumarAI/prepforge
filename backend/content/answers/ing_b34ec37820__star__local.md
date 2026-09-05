---
qid: ing_b34ec37820__star__local
question: 'Explain: Human Preference — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 330
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:30-05:00'
sources: []
---

**Situation** – While leading a research sprint at a startup, we were tasked with improving the recommendation engine for a music streaming service that had dropped its user engagement metric from 38% to 32% over two months.

**Task** – I needed to develop an AI model that better reflected human preferences, validate it against industry benchmarks, and show measurable lift on our internal leaderboards so stakeholders could see progress before a product release.

**Action** – First, I curated a multi‑modal dataset of user listening histories paired with explicit “like” or “skip” labels. Using PyTorch, I fine‑tuned a transformer encoder to predict preference scores. To benchmark human preferences, I incorporated the “Human Preference Benchmark” (HPB) from OpenAI and ran our model against it alongside the state‑of‑the‑art baselines. I then built an internal leaderboard that plotted both HPB accuracy and our own engagement lift on a live dashboard. Iteratively A/B‑tested different loss functions—contrastive loss versus cross‑entropy—and tuned hyperparameters with Ray Tune, stopping when the model achieved 5% higher HPB precision than the baseline.

**Result** – The final model improved user engagement from 32% to 39% in production (a 21% lift), topped our internal leaderboard by 12 points over previous models, and taught me that aligning AI objectives with curated human preference benchmarks is critical for delivering tangible product gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
