---
qid: ing_b9b0a35e3d__star__local
question: 'Explain: Multi-Stage builds — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:34-05:00'
sources: []
---

**Situation** – In a recent data‑science project, we were deploying an inference service for a recommendation model that used TensorFlow and required a heavy GPU runtime image (~2 GB). The original Dockerfile included all training dependencies, leading to a 3 GB final image and slow CI pipelines.

**Task** – I had to reduce the production image size by >70%, speed up build times, and keep the same reproducible environment for both training and inference stages.

**Action** – I rewrote the Dockerfile using multi‑stage builds. The first stage pulled the official TensorFlow GPU image, installed only the packages needed for training (NumPy, pandas), and ran `pip install --no-cache-dir -r requirements.txt`. It then exported a frozen graph (`model.pb`). In the second stage I started from the lightweight `python:3.11-slim` base, copied only the frozen graph and a minimal inference script, installed runtime dependencies (`tensorflow-cpu`, `uvicorn`), and exposed port 8000. I added build arguments for caching layers and used `.dockerignore` to exclude notebooks and data.

**Result** – The final image shrank from 3 GB to 350 MB (a 88% reduction). Build times dropped from 12 minutes to 2 minutes, and deployment latency fell by ~30 ms. I learned that separating training and inference layers not only optimizes size but also enforces a clean separation of concerns, making the pipeline more maintainable and secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
