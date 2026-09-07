---
qid: ing_03764e6573__faang__local
question: 'Explain: Clarifying Questions to Ask — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 367
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:00-05:00'
sources: []
---

**Clarify (≈30 words)**  
*What is the goal of the whiteboard?* Are we designing an AI‑driven recommendation engine, a dialogue system, or a training pipeline? What constraints (latency, data volume, user privacy) do we have?

**Approach (≈40 words)**  
1. **Define scope** – choose one concrete use case (e.g., next‑click prediction).  
2. **Identify inputs/outputs** – raw logs → feature vectors → model predictions.  
3. **Select architecture** – e.g., feature extractor + neural net + ranking layer.  
4. **Plan evaluation** – A/B testing, precision@k, latency metrics.

**Depth (≈70 words)**  
Explain the data flow: ingest event streams, apply feature engineering (one‑hot, embeddings), feed into a transformer or LSTM for sequence modeling, output logits for candidate actions. Discuss loss functions (cross‑entropy with class weighting) and regularization (dropout, weight decay). Highlight scalability: shard models across GPUs, use model distillation for inference. Complexity: training O(N·d²) per batch; inference linear in sequence length.

**Edge Cases (≈30 words)**  
- Cold start users → fallback to popularity baseline.  
- Data sparsity → use matrix factorization or collaborative filtering.  
- Real‑time constraints → cache embeddings, quantize weights.  

**Optimize & Communicate (≈20 words)**  
Iterate on feature set, prune low‑impact features to reduce latency; explain trade‑offs in a concise diagram and verbal walkthrough, ensuring interviewers see clear reasoning and prioritization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
