---
qid: vq_0adb4ab603__star__local
question: Fig. 2 –How to answer a coding question?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:17-05:00'
sources: []
---

**Situation** – During my senior thesis I had to implement an anomaly detection pipeline for IoT sensor data. The dataset was 10 GB of time‑series logs and the professor asked me to write a function that could identify outliers in real time, using only Python standard libraries.

**Task** – Build a lightweight, accurate algorithm that flagged anomalies with <1 % false positives while processing 1000 records per second on a laptop (Intel i7, 8 GB RAM).

**Action** – I first profiled the data to understand its distribution. I chose a rolling z‑score method: compute mean and standard deviation over a sliding window of 60 seconds, then flag points where |z| > 3. To keep memory low, I used a deque from `collections` to maintain the window and updated statistics incrementally (Welford’s algorithm). I wrapped the logic in a generator that yielded anomaly timestamps, so downstream components could consume results asynchronously. For unit testing, I seeded synthetic data with known anomalies and measured precision/recall.

**Result** – The implementation processed 1,200 records/s on my laptop and achieved 98.7 % precision and 95.4 % recall on the test set—well within the required threshold. I learned how to balance statistical rigor with system constraints, and how incremental updates can replace expensive recomputations in streaming contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
