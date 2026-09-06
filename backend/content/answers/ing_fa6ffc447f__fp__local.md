---
qid: ing_fa6ffc447f__fp__local
question: 'Explain: Action — AI Agents Explained - by Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 353
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:52:13-05:00'
sources: []
---

**Action – AI Agents Explained (Sairam Sundaresan & Neo Kim)**  

The authors frame an *AI agent* as a **closed‑loop system** that maps the world to actions by minimizing expected loss under uncertainty.  
1. **Problem formulation**: An environment supplies observations \(o_t\) and rewards \(r_t\). The agent’s goal is to choose actions \(a_t\) that maximize cumulative reward (or equivalently minimize cost).  
2. **Why a loop?** In stochastic settings the same action can lead to different futures; thus the agent must *re‑evaluate* after each observation—this is the essence of *online decision making*.  
3. **Policy as a function**: The policy \(\pi_\theta(a|o)\) parameterizes how beliefs are translated into actions. Training reduces the Bellman‑optimality error, which is a direct application of dynamic programming and convex optimization in high‑dimensional spaces.  
4. **Deep RL as representation learning**: Neural nets learn compact embeddings \(h_t = f_\phi(o_t)\). These embeddings capture *sufficient statistics* of the past relevant to future rewards—an instance of the *information bottleneck* principle.  

A non‑obvious insight: *reward shaping* can be viewed not just as a heuristic but as an auxiliary objective that reshapes the geometry of the value function, effectively turning a hard sparse‑reward problem into a smoother manifold where gradient descent converges faster. This geometric view explains why “intrinsic motivation” methods often outperform naive reward augmentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
