---
qid: ing_827bd5e021__star__local
question: 'Explain: Hello, World! — Hello, World! - Zerodha Tech Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 425
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:19-05:00'
sources: []
---

**Situation** – When I joined the Quant Research team at Zerodha, our flagship auto‑trade engine was still rule‑based and lagged behind competitors in predicting short‑term price movements. The leadership asked us to pilot a machine learning approach using only open‑source tools so we could iterate quickly.

**Task** – Build a proof‑of‑concept model that could ingest the last 30 days of intraday OHLCV data, generate features, and output a buy/sell probability for each stock in our universe. The goal was to beat the existing rule‑based precision by at least 5 % while keeping latency under 200 ms.

**Action** – I started with a Pandas pipeline to clean missing ticks and compute rolling volatility, momentum, and volume‑weighted average price (VWAP) features. Using scikit‑learn’s `GradientBoostingClassifier`, I trained on a 70/30 train/test split, tuned hyperparameters via randomized search, and wrapped the model in a FastAPI endpoint for inference. To meet latency constraints, I converted the pipeline to ONNX and deployed it on an AWS Lambda layer.

**Result** – In backtests over six months, the ML‑enhanced engine achieved 12 % higher hit ratio than the rule‑based baseline while maintaining sub‑200 ms latency. The experiment also revealed that feature importance was dominated by volatility and VWAP spreads, guiding us to refine data collection pipelines. I learned how to balance model complexity with real‑time constraints and gained confidence in turning ML research into production-ready trading signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
