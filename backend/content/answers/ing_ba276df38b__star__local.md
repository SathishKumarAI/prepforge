---
qid: ing_ba276df38b__star__local
question: 'Explain: Reference — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:27-05:00'
sources: []
---

**Situation**  
At my previous startup we built a recommendation engine for a food‑delivery app that had to rank restaurants for each user in real time. Our model accuracy plateaued at 0.73 AUROC, and we couldn’t explain why new restaurant listings were often missing from top‑10 suggestions.

**Task**  
I was tasked with improving the relevance of recommendations by leveraging a reference‑based approach: using recent user interactions as a dynamic “golden set” to fine‑tune predictions on-the-fly.

**Action**  
First, I engineered a rolling window of each user’s last 20 orders and mapped them to latent restaurant vectors via an embedding layer. Then, for every new order request, I computed cosine similarity between the user’s reference vector (average of recent embeddings) and all candidate restaurants. I weighted this similarity with a decay factor based on time since the last visit. The resulting score was fed into our existing gradient‑boosted tree model as a new feature. To keep latency low, I pre‑computed similarity tables nightly and served them from Redis.

**Result**  
After deployment, AUROC jumped to 0.82 (a 10 % lift), click‑through rate increased by 18 %, and we reduced server load by 12 % because the similarity lookup was cheaper than full model inference. I learned that a well‑chosen reference set can dramatically sharpen predictions without adding complexity to the core ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
