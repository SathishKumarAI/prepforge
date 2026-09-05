---
qid: ing_3452bbe050__star__local
question: 'Explain: cells that way we can filter out — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 420
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:59-05:00'
sources: []
---

**Situation**  
At my previous gig I was part of the algorithm team for a regional ride‑hailing app. The city’s traffic data were noisy – GPS jitter, dead spots, and temporary road closures caused our demand‑prediction model to spike wildly in certain “cells” on the map, leading to over‑charged surge pricing and driver frustration.

**Task**  
I was tasked with building a lightweight filtering layer that could clean up the raw cell‑level data before it fed into the core ML pipeline, so the surge algorithm would only react to genuine demand surges rather than artifacts.

**Action**  
I first defined each cell as a 500 m × 500 m grid and collected historical ride counts, traffic speed, weather, and event data. Using Python’s Pandas I engineered features like moving‑average ride density, variance over the last 10 min, and a binary “road closure” flag from city alerts. Then I trained a lightweight XGBoost classifier to label cells as *noise* or *valid demand*. To keep latency low, I serialized the model with ONNX and deployed it in a Docker container behind an Nginx reverse proxy on our Kubernetes cluster. The filter ran in real time, dropping 37 % of spurious spikes while preserving 92 % of true surge signals.

**Result**  
After rollout, the average surge‑price volatility dropped from ±$4.80 to ±$2.10 per ride, and driver complaints about unfair pricing fell by 28 %. The team learned that a simple supervised filter could dramatically improve user trust without sacrificing model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
