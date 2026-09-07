---
qid: ing_9ff230e2a6__faang__local
question: 'Explain: You RL-trained an agent against a mocked environment, held-out
  reward improved, and the gains did not show up in production. Diagnose it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 540
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:55:53-05:00'
sources: []
---

**Clarify**  
You trained a reinforcement‑learning (RL) policy in a simulated environment that mimics production. After training you evaluated the agent on an *held‑out* reward signal and saw significant improvement, yet when deployed the real system shows no performance gain.  
Assumptions to verify:  

- The simulation’s state/action space matches production exactly.  
- Reward definitions are identical.  
- Data distribution (state frequencies) is similar.  
- Policy inference latency meets production constraints.

**Approach**  
1. **Validate the mock environment** – compare statistics of states, actions, and rewards between training and live data.  
2. **Check reward alignment** – ensure that the held‑out reward used for evaluation maps one‑to‑one to the real business metric.  
3. **Inspect policy generalization** – test on a diverse set of production traces (offline replay).  
4. **Audit deployment pipeline** – confirm that the exact trained weights, hyperparameters, and preprocessing are used in production.

**Depth**  

| Issue | Diagnosis | Fix |
|-------|-----------|-----|
| *State mismatch* | Simulation uses deterministic physics; real world is noisy. | Add stochasticity / domain randomization during training. |
| *Reward mis‑specification* | Held‑out reward rewards a proxy metric (e.g., click‑through) while production cares about revenue. | Redefine the reward to match the true KPI or use multi‑objective RL. |
| *Distribution shift* | Training data from early traffic patterns; current traffic has different user demographics. | Continual learning / online fine‑tuning with small batches of live feedback. |
| *Inference latency* | Policy is too slow, leading to timeouts and fallback to default behavior. | Optimize network (e.g., pruning, quantization) or use a simpler policy in production. |

**Edge cases**  

- Rare states never seen during training but common in production → policy may output NaNs.  
- Reward sparsity leading to over‑fitting on frequent transitions.  
- Deployment environment lacking required libraries → fallback to baseline.

**Optimize & Communicate**  
I’d present a concise “debug flow” diagram, highlight the key metrics (state overlap %, reward correlation, latency). Then iterate: add domain randomization, align rewards, retrain, and validate offline before redeploying. This structured approach demonstrates clear reasoning, acknowledges trade‑offs (e.g., extra training time vs. robustness), and aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
