---
qid: ing_70c0bc42db__star__local
question: 'Explain: Design the recommendation system for Instagram Reels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:58-05:00'
sources: []
---

**Situation:**  
When I joined the Instagram Reels team, engagement was plateauing—average watch time per reel dipped by 12% over three months, and new users were dropping off after their first reel.

**Task:**  
I had to design a recommendation engine that would increase average watch time by at least 15% and boost user retention for the first week on the platform.

**Action:**  
First, I mapped user signals: click‑through, dwell time, likes, comments, and contextual metadata (hashtags, audio). Using Spark for batch feature engineering, I built a hybrid model combining matrix factorization (via ALS) for collaborative filtering with a gradient‑boosted tree (XGBoost) that ingested the engineered features. For real‑time ranking, I deployed the model in TensorFlow Serving behind an HTTP gateway; inference latency was kept under 50 ms by caching top‑10 predictions per user segment. I also introduced a bandit controller to surface new creators and diverse content, balancing exploration vs exploitation. Finally, I set up A/B tests across 1M users, iterating on the loss function to prioritize watch duration.

**Result:**  
Within six weeks of rollout, average reel watch time rose by 18%, and first‑week retention improved from 38% to 46%. The system also increased discovery of niche creators by 30%. I learned that blending collaborative signals with contextual content features—and iterating fast with real‑time feedback—yields the most resilient recommendation pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
