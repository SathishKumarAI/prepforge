---
qid: ing_c46edf1765__star__local
question: 'Explain: Hawk — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 475
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:42-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time traffic forecasting service for Los Angeles. The METR‑LA dataset had over 4 million hourly speed readings from 207 loop detectors on the I‑110 and I‑5 freeways, but our baseline ARIMA model only achieved an MAE of 12 km/h, which was too high for route optimization.

**Task** – I needed to reduce prediction error by at least 20% while keeping inference latency under 100 ms so we could push updates every minute on edge devices.

**Action** – I implemented a Hawkes process model that treats each detector’s speed as an event stream with self‑exciting and mutually exciting components. Using Python’s `tick` library, I encoded the intensity function λ(t) = μ + Σαᵢe^(−β(t−tᵢ)) for all neighboring detectors, capturing both short‑term spikes (e.g., accidents) and long‑term trends (rush hours). I trained the model on a 70/30 train/test split, tuned α and β via grid search, and deployed it with ONNX to meet latency constraints. I also added a Kalman filter layer to smooth predictions for detectors with sparse data.

**Result** – The Hawkes+Kalman pipeline lowered MAE from 12 km/h to 8.4 km/h—an 30% improvement—and inference stayed at ~80 ms per detector. This directly enabled our routing engine to suggest alternative paths that cut average commute time by 5 minutes for 15% of users. I learned how event‑driven models can capture complex traffic dynamics better than traditional time‑series methods and the importance of balancing statistical power with real‑time deployment constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
