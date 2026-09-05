---
qid: ing_fec6e5cfa4__star__local
question: 'Explain: We we kept on kind of replaying — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 401
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:15-05:00'
sources: []
---

**Situation**  
At my previous company, we were launching a new recommendation engine for our video platform. The model’s recall dropped from 78% to 65% after we switched from a batch‑training pipeline to an online learning system that pulled data in real time. We had to figure out why the performance degraded and get it back on track before the next quarterly release.

**Task**  
I was tasked with diagnosing the drop, re‑engineering our training workflow, and ensuring the model stayed within the 70% recall target while keeping latency under 200 ms for live inference.

**Action**  
1. I introduced a *replay* mechanism: we captured a rolling window of user interaction logs from the production stream and replayed them in a controlled offline environment that mirrored the online pipeline.  
2. Using Apache Kafka for event sourcing, we replayed 24 hours of data to identify where feature drift was occurring—specifically, the click‑through signal had become noisy because of a recent UI change.  
3. I updated our feature extraction scripts in Python (pandas + NumPy) to apply a rolling median filter and added a fallback flag for missing values.  
4. We retrained the model on the replayed data with an XGBoost ensemble, tuning `max_depth` and `learning_rate` via Optuna to hit the target recall without blowing up inference time.  
5. Finally, I automated the replay pipeline in Airflow so that every night we validate the latest production logs against the offline benchmark.

**Result**  
The updated model restored 73% recall while keeping latency at 190 ms. The nightly replay also reduced our production debugging time by 40%, and I learned how crucial it is to keep an “offline mirror” of live data for rapid iteration in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
