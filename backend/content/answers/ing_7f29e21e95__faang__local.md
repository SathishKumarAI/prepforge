---
qid: ing_7f29e21e95__faang__local
question: 'Explain: Drawing Tips — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 411
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:40:46-05:00'
sources: []
---

**Clarify**  
The interview asks for practical *whiteboard* exercises that help a team grasp AI concepts quickly—think quick sketches of model flow, data pipelines or evaluation metrics. I’ll assume the audience is mixed: some ML engineers, others product folks, and we have 30 min on a whiteboard.

**Approach**  
1. Pick a core AI theme (e.g., supervised learning).  
2. Sketch the high‑level pipeline: Data → Feature extraction → Model → Loss → Optimizer → Prediction.  
3. Add quick “what‑if” branches: noisy data, class imbalance, real‑time inference.  
4. End with evaluation: accuracy vs precision/recall trade‑off.

**Depth**  
- **Data Layer**: show raw inputs, preprocessing blocks (normalization, tokenization).  
- **Feature Engine**: hand‑draw a feature vector box; label “embedding” if NLP.  
- **Model Box**: draw a simple MLP or CNN icon; note parameters count and activation.  
- **Loss & Optimizer**: connect to backpropagation arrows; annotate learning rate, batch size.  
- **Evaluation**: place confusion matrix grid; discuss metrics (AUC, F1).  
- Use color coding to indicate data flow direction and potential bottlenecks.

**Edge Cases**  
- Imbalanced classes → class‑weighting or resampling.  
- Concept drift → periodic retraining arrows.  
- Overfitting → regularization rectangle (dropout, L2).

**Optimize & Communicate**  
Explain that this sketch keeps the focus on *why* each component matters, not implementation details—ideal for cross‑functional alignment. If time allows, swap a block for a “transfer learning” variant to show flexibility. Conclude by inviting questions about specific blocks, ensuring the discussion stays interactive and insightful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
