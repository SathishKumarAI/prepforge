---
qid: ing_5e8979c5a4__fp__local
question: 'Explain: Evaluation plan — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 410
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:25:34-05:00'
sources: []
---

**Why an evaluation plan is essential**

A customer‑support AI must *solve the core problem*: reduce human effort while keeping or improving customer satisfaction. That dual objective forces a trade‑off between speed (response time) and quality (accuracy, empathy). Any metric that ignores one side skews the optimisation landscape.

**Deriving the metrics from first principles**

1. **Cost per interaction** –  
   \[
   C = \frac{\text{Human hours saved}}{\text{Total interactions}}
   \]  
   Minimising \(C\) is equivalent to maximising the *information‑theoretic* gain of the AI: every token it produces should reduce uncertainty about the next best action.

2. **Resolution rate** –  
   \[
   R = \frac{\text{Issues closed by AI}}{\text{Total tickets}}
   \]  
   This is a direct proxy for *utility* in reinforcement‑learning terms; higher \(R\) means the policy learns more rewarding states.

3. **Customer sentiment score** – derived from NLP sentiment models on post‑interaction surveys, capturing *emotional utility* beyond task completion.

4. **Escalation probability** – the chance that a human agent must intervene. It is mathematically linked to the *entropy* of the AI’s confidence distribution: high entropy → more escalations.

**Non‑obvious insight**

Most plans stop at \(R\) and latency, but ignoring **confidence calibration** (how well predicted probabilities match true outcomes) leads to systematic over‑ or under‑trust. A properly calibrated agent can self‑escalate when uncertainty is high, reducing costly mis‑resolutions even if raw speed suffers slightly. Thus, the evaluation plan must include a *calibration curve* metric as a primary objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
