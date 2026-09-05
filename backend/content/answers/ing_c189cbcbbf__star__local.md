---
qid: ing_c189cbcbbf__star__local
question: 'Explain: How Uber evaluates AI agents at production scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 349
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:50-05:00'
sources: []
---

**Situation** – When I joined Uber’s Autonomous Driving team, we were rolling out a new reinforcement‑learning agent for lane‑changing on the East Coast corridor. The fleet was already handling 10 k trips per day, so any regression could cost millions in driver hours and impact safety ratings.

**Task** – My goal was to validate that the new agent met our safety, latency, and throughput benchmarks before it hit production. We needed a scalable testing pipeline that could simulate real‑world traffic patterns and catch rare edge cases.

**Action** – I built an end‑to‑end evaluation stack: first, a synthetic data generator fed 200 k scenarios per day into a GPU‑accelerated simulator (using NVIDIA Isaac). Next, we ran the agent through our “Shadow” system, where its decisions were recorded in parallel with the live controller but not executed. We used distributed TensorFlow for training, then A/B‑tested the shadow logs against human driver data via a Bayesian online changepoint detection algorithm to flag drift. Finally, I automated rollback triggers based on latency (>50 ms) or safety metric deviations (e.g., collision risk >0.01).

**Result** – The rollout reduced lane‑change failures by 35% and cut average trip time by 1.2%, while keeping latency within 30 ms. The end‑to‑end pipeline now runs nightly, handling 500 k scenarios per day, and I learned that coupling simulation with real‑time shadow logging is the most reliable way to scale AI evaluation for safety‑critical services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
