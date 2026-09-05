---
qid: ing_1cef71030f__star__local
question: 'Explain: AI-assisted coding interview — Meta Machine Learning Engineer
  (MLE) Interview Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 351
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:22-05:00'
sources: []
---

**Situation** – While interviewing for a Meta MLE role in early 2026, the hiring team introduced an AI‑assisted coding challenge: they asked me to build a small model that could predict user engagement scores from raw clickstream data using only open‑source libraries and a single GPU. The dataset was 4 GB of JSON logs, and we had just 45 minutes on the platform.

**Task** – I needed to design, train, and evaluate an end‑to‑end pipeline that achieved at least a 0.68 AUC while keeping inference latency under 10 ms per user, all within the time limit.

**Action** – I first parsed the logs with `pandas` and used `pyarrow` for fast columnar storage. For feature engineering I leveraged `Featuretools` to automatically generate interaction terms, then applied a `LightGBM` model because of its speed and GPU support (`lightgbm-gpu`). I tuned hyperparameters on a 5‑fold CV with Optuna, but constrained the search space to keep training under 20 minutes. For deployment I wrapped the model in a FastAPI endpoint and benchmarked latency with `wrk2`, iterating on batch size until hitting the target.

**Result** – The final pipeline scored 0.71 AUC on the hold‑out set, met the latency requirement (8 ms), and completed training in 18 minutes. I learned how to balance feature richness against inference constraints and how to use automated tooling to stay within tight interview deadlines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
