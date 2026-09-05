---
qid: ing_965fcaf295__star__local
question: 'Explain: Social Media App — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 357
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:31-05:00'
sources: []
---

**Situation**  
At my last role I was part of a product team launching a new photo‑sharing feature on a mid‑size social media platform. The engineering sprint deadline was tight, and we needed to build an automated system that could surface the “top 20” trending posts for each user’s feed within milliseconds.

**Task**  
My responsibility was to design and prototype a recommendation engine that ranked posts by relevance, freshness, and engagement, then expose it via a low‑latency API so that the front‑end could render the top 20 items in real time.

**Action**  
I started by defining a feature set: user’s recent interactions (likes, comments), content metadata (tags, geolocation), and global popularity signals. Using Spark for batch ingestion, I built a daily training pipeline that computed weighted embeddings with a LightGBM model; the model output a score per post‑user pair. For inference, I deployed the model as an ONNX service behind an AWS Lambda layer, caching the top 100 predictions in Redis to serve subsequent requests instantly. To ensure freshness, I scheduled incremental updates every hour and used A/B testing to tune the weighting of recency vs. engagement.

**Result**  
The new feed achieved a 35 % lift in time‑to‑engagement and reduced server load by 28 %. The system handled over 5 M daily requests with <50 ms latency, and I learned how critical it is to blend batch training with real‑time serving for social media recommendation workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
