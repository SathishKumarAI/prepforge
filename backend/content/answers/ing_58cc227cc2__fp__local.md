---
qid: ing_58cc227cc2__fp__local
question: 'Explain: The interview loop — Together Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 402
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:12:52-05:00'
sources: []
---

**The Interview Loop – Together AI**

At its core the interview loop is a *closed‑feedback optimisation* scheme for aligning an artificial agent with human intent.  
1. **Problem statement**: A learning system must decide which action maximises future utility, yet the reward function is only partially observable—humans can judge outcomes but cannot hand‑craft a perfect scalar signal.  
2. **Why it must work this way**: The loop turns *human preference* into an explicit loss by letting the model pose *clarifying questions*. Each question is a query \(q_t\) that reduces uncertainty about the true reward function \(R^*\). The human’s answer \(a_t = H(q_t)\) updates a posterior over \(R^*\), tightening the policy gradient.  
3. **Deeper principle**: It is an instance of *Bayesian active learning* embedded in a reinforcement‑learning trajectory. By selecting queries that maximally reduce expected entropy, the agent allocates its limited human attention where it yields the greatest information gain—an optimal trade‑off between exploration and exploitation.  
4. **Non‑obvious insight**: The loop is not merely about eliciting preferences; it *redefines* the policy’s objective as a *belief‑weighted expected reward*. This guarantees that even if the human never fully specifies \(R^*\), the agent learns to act optimally under the most probable interpretation, thereby sidestepping brittle hand‑coded heuristics.  

Thus the interview loop is a principled bridge between probabilistic inference and policy optimisation, enabling scalable, human‑aligned AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
