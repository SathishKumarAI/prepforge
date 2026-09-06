---
qid: ing_d5622e00cf__fp__local
question: What are reasoning models, and how does test-time compute change the picture?
  When would you use one versus a standard model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 415
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:59-05:00'
sources: []
---

**Reasoning models** treat inference as an *optimization* over latent “reasoning steps” rather than a single feed‑forward mapping.  
At training time we learn a *policy* \(p_\theta(s_{t+1}\mid s_t, x)\) that predicts the next symbolic or neural state \(s_{t+1}\) given current state \(s_t\) and input \(x\). The objective is to minimize expected loss after a sequence of such steps, i.e.  
\[
\min_\theta \mathbb{E}_{x}\Big[\,L\big(\,\text{rollout}_T(x;\theta)\,,y\big)\Big].
\]  
Because the rollout length \(T\) is variable, the model can adapt its *computation budget* to the problem’s difficulty: easy queries terminate early, hard ones invoke more steps.  

**Test‑time compute** turns the inference procedure into a *budgeted search*: we decide how many steps to run (or stop when a confidence threshold is met). This changes the picture from “predict once” to “solve iteratively”, aligning with **information‑theoretic efficiency**—each step extracts the most useful information given the remaining uncertainty.  

Use a reasoning model when  
1. **Long‑range dependencies or compositional structure** exist (e.g., multi‑hop QA, program synthesis).  
2. **Adaptive latency** is desirable: low‑resource devices can request fewer steps for simple inputs.  

A standard feed‑forward network suffices when the mapping is shallow, data‑dense, and latency must be deterministic. The non‑obvious insight: *reasoning models are essentially dynamic Bayesian networks whose transition function is learned end‑to‑end; their flexibility stems from learning how to “ask for more information” rather than precomputing all answers.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
