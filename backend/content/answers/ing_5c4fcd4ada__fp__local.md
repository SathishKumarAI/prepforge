---
qid: ing_5c4fcd4ada__fp__local
question: 'Q: How do you handle embedding drift when updating models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 436
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:20:15-05:00'
sources: []
---

Embedding drift—the gradual misalignment between a model’s internal representation and the evolving data distribution—arises whenever we fine‑tune or retrain on fresh samples.  
From first principles it is simply an **optimization problem under non‑stationarity**: each update step minimizes loss on a sample set whose true joint \(P_{\text{data}}(x,y)\) has shifted since the previous iteration. If we ignore this shift, gradient descent pushes embeddings toward a local optimum that no longer reflects the current world.

The fix is to **reformulate the objective as a weighted average over past and present distributions**:
\[
\min_\theta \;\mathbb{E}_{x,y\sim P_t}[\,L(f_\theta(x),y)\,] + \lambda\, D_{\text{KL}}\!\big(P_{\text{past}}(\cdot|\theta)\,\|\,P_t(\cdot|\theta)\big),
\]
where the KL term penalises divergence from a memory‑augmented prior that captures earlier embeddings.  
In practice this translates to:
1. **Replay buffers** with importance weighting (old samples receive higher weight when their likelihood under current model falls).
2. **Regularisation toward an exponential moving average** of past weights (the “anchor” trick) to keep the geometry stable.
3. **Curriculum‑style updates** that gradually introduce new data, preventing a hard jump in embedding space.

### Non‑obvious insight  
Most people treat drift as a *batch* problem and re‑train from scratch, but the key is to view embeddings as *points on a manifold whose curvature changes over time*. By anchoring the manifold’s curvature (via the KL term) rather than its position, we preserve relative distances between concepts even when absolute positions shift—ensuring downstream tasks remain robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
