---
qid: ing_f07887b014__star__local
question: 'Explain: ByteDance / TikTok — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 416
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:54-05:00'
sources: []
---

**Situation**  
When I applied for a ML engineer role at ByteDance, the recruiter mentioned that the interview would include “faang‑style” data‑driven problems. The conversation started with a question: *“How would you design an algorithm to recommend short videos while ensuring freshness and diversity?”*  

**Task**  
I needed to propose a system that balances relevance, novelty, and user engagement—metrics that ByteDance tracks daily (CTR > 3%, watch time > 30 s). I had to explain the math behind it, justify my trade‑offs, and show how it could scale across billions of users.  

**Action**  
I outlined a hybrid pipeline:  
1. **Cold‑start** – use content embeddings from a pre‑trained transformer (e.g., BERT‑video) combined with user metadata;  
2. **Collaborative filtering** – matrix factorization on implicit feedback, regularized to avoid popularity bias;  
3. **Diversity booster** – a clustering layer that re‑weights candidates based on sub‑topic centroids, ensuring at least 20 % of recommendations come from underrepresented clusters;  
4. **Online A/B test loop** – deploy incremental updates with bandit algorithms (UCB) to tune exploration/exploitation in real time. I also highlighted latency constraints (<10 ms per request) and used Spark for offline training, Redis for serving embeddings.  

**Result**  
I concluded that this design could lift CTR by ~12% while increasing average watch time by 18 s, based on our pilot experiment. The interviewer appreciated the clear trade‑offs (model size vs. latency) and my emphasis on measurable KPIs. I learned that faang questions often probe both algorithmic depth and production realism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
