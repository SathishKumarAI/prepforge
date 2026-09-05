---
qid: ing_a869a47c67__star__local
question: 'Explain: Reasoning & Math — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:56-05:00'
sources: []
---

**Situation:**  
While leading a research sprint at my previous company, we were tasked with improving the explainability of our recommendation engine for a subscription‑based media platform that served 4 million users daily.

**Task:**  
I needed to design a taxonomy that mapped each predictive model to its reasoning style (rule‑based, probabilistic, or neural) and associated math framework (linear algebra, Bayesian inference, deep learning), so stakeholders could quickly assess trustworthiness and performance trade‑offs.

**Action:**  
I started by cataloguing all active models: collaborative filtering, content‑based scoring, matrix factorization, and a BERT‑style transformer. For each I documented the core mathematical operations—e.g., dot products for latent factors, Dirichlet priors for topic models, backpropagation gradients for transformers—and linked them to reasoning categories. I then built an interactive dashboard in Power BI that visualised this taxonomy alongside key metrics (RMSE, AUC, inference latency). During sprint reviews, the team used the taxonomy to justify a shift from a heavy transformer to a hybrid matrix‑factorisation model, reducing inference time by 35 % while maintaining a 0.02 RMSE improvement.

**Result:**  
The taxonomy became a living artifact adopted across product and engineering teams, cutting model selection time by 50 %. I learned that clear, math‑centric taxonomies empower rapid decision‑making and foster transparency in AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
