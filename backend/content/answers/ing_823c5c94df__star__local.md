---
qid: ing_823c5c94df__star__local
question: Helix splits into a large slow model and a small fast one. Why not run a
  single end-to-end network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 307
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:53:42-05:00'
sources: []
---

**Situation:**  
At my last company we had a real‑time recommendation engine that needed to serve predictions within 10 ms for every user click. The model was a huge transformer trained on millions of interactions – it was accurate but too slow for production.

**Task:**  
I was asked to keep the high accuracy while meeting the latency requirement, without overhauling our entire infrastructure.

**Action:**  
I split the system into two stages: a lightweight “fast” model that ran on CPU at the edge and produced a coarse relevance score, and a heavyweight “slow” transformer that ran on GPU for only the top‑10 candidates. I implemented an asynchronous pipeline in Kubernetes, using Redis streams to hand off candidate lists. To avoid bias, I added a calibration layer that adjusted fast scores based on slow model feedback during training. We used TensorRT to optimize the GPU inference and quantized the fast model with 8‑bit weights.

**Result:**  
Latency dropped from 120 ms to 9 ms for 95% of requests while overall recommendation precision improved by 3.5%. The split architecture also cut GPU usage by 70%, saving $12k/month in cloud costs. I learned that a hybrid pipeline can preserve accuracy and meet strict latency budgets, and that careful calibration is key when combining models of different scales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
