---
qid: ing_06201cca39__star__local
question: 'Explain: DoorDash — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 331
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:41:10-05:00'
sources: []
---

**Situation:**  
While working on a recommendation engine for a food‑delivery startup, we noticed that our click‑through rate (CTR) had dropped from 4.2% to 3.1% over the last quarter—an impact of roughly $12 M in lost revenue per month.

**Task:**  
I was tasked with diagnosing the dip and boosting CTR back above 4%, while keeping latency under 50 ms for a real‑time bidding system that served users on both Android and iOS.

**Action:**  
First, I ran an A/B test comparing our current model (a boosted tree) against a deep neural network trained on user embeddings, item metadata, and temporal features. To keep inference fast, I distilled the DNN into a 2‑layer LSTM with quantized weights and deployed it via TensorRT on GPUs in our edge cluster. I also introduced a contextual bandit component that dynamically adjusted feature importance based on recent conversion signals, reducing overfitting to stale trends.

**Result:**  
The new pipeline lifted CTR to 4.6% (+38%), translating to an estimated $18 M incremental revenue per month. Latency stayed at 42 ms, and the bandit’s exploration rate was calibrated to maintain a 0.3% variance in user experience. I learned that marrying deep learning with lightweight distillation and online learning can yield both performance gains and production feasibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
