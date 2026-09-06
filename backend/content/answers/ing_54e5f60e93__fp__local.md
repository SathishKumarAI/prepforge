---
qid: ing_54e5f60e93__fp__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 409
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:05:22-05:00'
sources: []
---

**Catastrophic forgetting on rarely‑seen tasks**

When a neural net is trained sequentially, each new task updates the same weight vector \(\theta\). The loss for task \(t\) is  
\(L_t(\theta)=\mathbb{E}_{x,y\sim D_t}\!\big[\ell(f_\theta(x),y)\big]\).  
A gradient step on a rare task \(r\) moves \(\theta\) in the direction that reduces \(L_r\), but this move may increase losses for previously learned tasks because their gradients are *orthogonal* or even opposite. The root cause is the **overlap of parameter subspaces**: the Fisher information matrix \(F=\mathbb{E}[\nabla_\theta \ell\,\nabla_\theta \ell^\top]\) is low‑rank for a rare task, so its gradient lies in a small subspace that can be displaced by subsequent updates.  

From an *information‑theoretic* view, the network’s capacity \(C\) is finite; learning a new distribution requires allocating bits to encode it. Rare tasks contribute little entropy, yet their representation must coexist with high‑entropy tasks, forcing the encoder to overwrite shared parameters—hence “catastrophic” forgetting.  

**Non‑obvious insight:**  
The *frequency* of a task does not merely scale its gradient magnitude; it reshapes the geometry of the loss landscape. Rare tasks carve narrow valleys that are highly non‑convex and intersect other valleys only at saddle points. Regularization schemes (e.g., EWC) assume convex overlap, but for rare tasks the valleys are disjoint, so preserving a single trajectory is impossible without *explicitly* reserving orthogonal subspaces—an approach that scales poorly with task count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
