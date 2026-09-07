---
qid: ing_e863dbb1c4__faang__local
question: 'Explain: Q112: Your agent performs well on short tasks but degrades badly
  past 30 minutes of autonomous work. Diagnose and fix it using context engineering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 456
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:00-05:00'
sources: []
---

**Clarify**  
*Problem:* An RL‑based agent works flawlessly for < 30 min, then its performance drops sharply.  
*Assumptions to confirm:*  
1. The environment is stationary (no abrupt policy‑inducing changes).  
2. The agent’s sensor bandwidth and compute budget stay constant.  
3. “Degradation” manifests as higher error rate or reward loss.

**Approach**  
1. Profile the agent over time: log observation entropy, action variance, and internal state norms.  
2. Examine the context‑encoding module (e.g., LSTM hidden state) for drift or saturation.  
3. Test whether the degradation correlates with specific sub‑tasks or environmental states.

**Depth**  
- *Diagnosis:* Long‑horizon tasks cause the recurrent encoder to accumulate noise → hidden state “blows up.”  
- *Fix via context engineering:*  
  - **Chunking & resetting:** Periodically reset or re‑initialize the context after a fixed horizon (e.g., every 5 min) and feed a “reset token” so the policy can re‑ground.  
  - **Attention over past states:** Replace vanilla recurrence with a self‑attention module that selectively weighs recent observations, mitigating drift.  
  - **Context regularization:** Add an L2 penalty on hidden‑state magnitude or a KL divergence term to keep it close to a prior.  
- *Complexity:* Attention adds O(n²) over window size n; choose a sliding window (e.g., last 200 steps) to keep runtime linear.

**Edge Cases**  
- Sudden environment shifts may still overwhelm the agent; include an online novelty detector that triggers a full context reset.  
- Over‑regularization can freeze useful memory; tune penalty strength with validation on held‑out long tasks.

**Optimize & Communicate**  
Explain how chunking preserves temporal abstraction while preventing state blow‑up, and how attention offers a scalable way to keep the most relevant history. Highlight that these changes preserve the agent’s short‑term performance (no extra latency) while stabilizing its long‑horizon behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
