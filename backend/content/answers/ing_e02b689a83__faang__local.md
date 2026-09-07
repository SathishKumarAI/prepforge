---
qid: ing_e02b689a83__faang__local
question: 'Q89: Design a Process Reward Model (PRM) for a customer-support agent.
  What signals do you score, and how do you avoid degenerate reward?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 506
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:20:30-05:00'
sources: []
---

**Clarify**  
We need a **Process Reward Model (PRM)** that evaluates customer‑support agents on the *process* they follow—time spent, escalation rate, compliance with scripts—rather than only outcomes like CSAT.  
Assumptions to confirm:  
1. We have access to interaction logs (chat transcripts, timestamps, agent IDs).  
2. Metrics such as resolution time, first‑contact resolution (FCR), and compliance are measurable.  
3. A baseline “neutral” reward exists (e.g., 0) for normal behavior.

**Approach**  
1. **Signal selection**:  
   - *Time to first response* (shorter = better).  
   - *Resolution time* (shorter, but penalize extreme rush).  
   - *Escalation rate* (lower = better).  
   - *Compliance score* (script adherence).  
   - *Sentiment consistency* (agent tone vs. customer sentiment).  
2. **Reward function**: weighted sum of normalized signals with a penalty term for outliers.  
3. **Degeneracy guard**: add *regularization*—a baseline reward that decays if an agent repeatedly receives extreme positive or negative scores, forcing exploration of balanced behavior.

**Depth**  
Let each signal \(s_i \in [0,1]\) be mapped via a monotonic function (e.g., logistic). Reward:
\[
R = \sum_{i} w_i s_i - \lambda \cdot |R_{\text{prev}}-R|
\]
where \(\lambda\) dampens swings. Complexity is \(O(n)\) per interaction, trivial for real‑time scoring.

**Edge Cases**  
*Very short calls*: may inflate response time reward; clamp minimum duration.  
*High‑volume tickets*: resolution time may be artificially low; apply percentile normalization.  
*Script violations that improve outcomes*: ensure compliance weight isn’t too high.

**Optimize & Communicate**  
Iteratively tune weights \(w_i\) using A/B testing on agent performance metrics (e.g., overall CSAT). Explain to stakeholders: “We reward balanced efficiency and quality while penalizing extreme deviations, preventing agents from gaming the system.” This keeps the PRM robust, interpretable, and aligned with business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
