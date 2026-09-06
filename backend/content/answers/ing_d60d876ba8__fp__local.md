---
qid: ing_d60d876ba8__fp__local
question: 'Explain: The interview loop — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 429
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:11-05:00'
sources: []
---

**The Interview Loop – a principled recipe for aligning an AI**

At its core, the loop solves *the problem of specifying a reward function* that is both tractable to compute and faithful to human intent.  
1. **Generate**: The model produces a candidate answer \(a\) to a prompt \(p\).  
2. **Score**: A separate policy \(\pi_{\text{human}}\), learned from real‑world human judgments, assigns a scalar reward \(R(a,p)\).  
3. **Update**: The original policy is fine‑tuned with reinforcement learning (e.g., PPO) to maximize expected reward \(\mathbb{E}_{a\sim\pi}[R(a,p)]\).

Why this structure?  
- **Optimization perspective**: We’re implicitly solving a constrained maximization problem where the constraint is “human preference ≈ 0”. The loop turns an ill‑posed alignment question into a well‑defined objective.  
- **Information‑theoretic angle**: Human judgments are noisy observations of a latent true utility function \(U\). By iteratively refining \(\pi_{\text{human}}\) and the generator, we reduce the KL divergence between the model’s distribution and the posterior over \(U\).  
- **Geometric intuition**: The policy space is a manifold; each iteration projects onto a sub‑manifold that better aligns with human gradients, gradually shrinking the distance to the optimal manifold.

**Non‑obvious insight**  
The *interview* need not be an external evaluator at every step. A self‑generated “confidence score” can trigger a *human‑in‑the‑loop* only when uncertainty exceeds a threshold, turning the loop into an active learning process that concentrates human effort where it matters most. This sparsity dramatically cuts annotation cost while preserving alignment quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
