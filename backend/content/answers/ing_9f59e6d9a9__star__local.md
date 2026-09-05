---
qid: ing_9f59e6d9a9__star__local
question: 'Explain: The Perfect Design — Design System Newsletter - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:51-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an email newsletter called “The Perfect Design.” Our goal was to increase open rates from the current 18% to at least 30% within six months, but engagement was plateauing and our content team had no data‑driven way to pick stories.

**Task:**  
I needed to build a recommendation engine that would surface the most relevant design articles for each subscriber, using their past clicks, reading time, and industry tags. The system had to be production‑ready, scale to 200k users, and deliver predictions in real time without bloating our email templates.

**Action:**  
I started by collecting click logs and user profiles into a Spark data lake, then engineered features like TF‑IDF vectors of article tags, user embedding from collaborative filtering, and temporal decay for recent activity. I trained a LightGBM model offline and wrapped it in a FastAPI microservice that served predictions via gRPC to our mailing system. To keep latency under 50 ms, I deployed the model on an NVIDIA A10 GPU instance with ONNX runtime and cached top‑5 article IDs per user in Redis. We ran A/B tests against the baseline “randomly shuffled” strategy, using Optimizely for traffic routing.

**Result:**  
Within four weeks of rollout, open rates jumped from 18% to 28%, and click‑through increased by 45%. The system handled peak loads of 15 k requests per second with <1 ms average latency. I learned that balancing feature richness with inference speed is critical in production ML, and that close collaboration with devops ensures smooth scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
