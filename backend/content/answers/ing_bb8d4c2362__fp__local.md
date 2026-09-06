---
qid: ing_bb8d4c2362__fp__local
question: 'Explain: Common Patterns to Know — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 552
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:42:40-05:00'
sources: []
---

**Whiteboard exercises for AI interviews**

1. **Problem‑to‑model mapping** – The first step is *identifying the underlying abstraction*.  
   - Ask: “What is being predicted, classified or optimized?”  
   - Translate that into a formal objective (e.g., minimize cross‑entropy).  
   This mirrors the principle of *information bottleneck*: you compress data while preserving relevant bits.

2. **Feature space geometry** – Sketch how input vectors sit in high‑dimensional space.  
   - Highlight separability, clusters, or manifolds.  
   - Explain why a linear separator (SVM) works if classes are linearly separable; otherwise introduce kernel tricks or deep nets.  
   The geometric view reveals the *curse of dimensionality* and justifies regularization.

3. **Model architecture diagram** – Draw layers, connections, and parameter counts.  
   - Annotate forward pass equations (e.g., \(h = \sigma(Wx+b)\)).  
   - Discuss back‑propagation gradients: \(\frac{\partial L}{\partial W}\).  
   This shows how *gradient descent* is an efficient local search in a non‑convex landscape.

4. **Training pipeline** – Include data flow, loss computation, optimizer, learning rate schedule.  
   - Emphasize why stochasticity (mini‑batch SGD) helps escape saddle points.  
   Connect to the principle of *variance reduction* in Monte Carlo methods.

5. **Evaluation & bias–variance trade‑off** – Draw a U‑shaped curve; explain overfitting vs underfitting.  
   - Illustrate regularization terms (L2, dropout) as constraints on model complexity.  
   This ties back to *Occam’s razor* in statistical learning.

6. **Scalability & deployment sketch** – Show distributed training, inference latency, and memory footprints.  
   - Highlight why quantization or pruning are necessary: they reduce entropy of the weight distribution while preserving predictive power.

---

### Non‑obvious insight

Whiteboarding is *not* just a communication tool; it forces you to **instantiate an implicit optimization problem** in concrete symbols. Each stroke corresponds to a mathematical operation whose cost (time, memory) can be measured. By visualizing these costs upfront, interviewees uncover hidden bottlenecks—e.g., a matrix multiplication that dominates runtime—and propose algorithmic shortcuts before coding. Thus, the whiteboard becomes an *early performance profiler*, a practice rarely highlighted in tutorials but essential for production‑ready AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
