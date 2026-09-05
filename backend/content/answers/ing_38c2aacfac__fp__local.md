---
qid: ing_38c2aacfac__fp__local
question: 'Explain: A skill is just an agent. So measure your changes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 384
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:28-05:00'
sources: []
---

In the most abstract sense an **agent** is any entity that observes a state \(s\), takes an action \(a\), and receives a reward \(r\).  
A *skill* is nothing more than a particular policy \(\pi(a|s)\) that has been trained to maximise expected return in a given environment.  
Thus, by definition, **“a skill is just an agent.”**  

Why must this identification hold?  
1. **Decision‑making as inference:** In Bayesian terms, the agent’s policy is an inference procedure that maps observations to actions to minimise future loss (or maximise utility).  
2. **Learning as optimisation:** Training a skill means adjusting \(\pi\) so that the expected cumulative reward \(J=\mathbb{E}\big[\sum_t r_t\big]\) is maximised—exactly the same objective used for any reinforcement‑learning agent.  

Because a skill is an agent, its *state of competence* can be quantified by performance metrics (e.g., return, success rate).  
When you *measure your changes*, you are effectively evaluating how the policy’s expected reward shifts as new data or feedback are incorporated—precisely the learning curve in RL.

**Non‑obvious insight:**  
People often treat skill acquisition as a binary “learned/not learned” event. In reality, every incremental improvement is itself an *update* to the agent’s belief about the environment. Thus, monitoring **gradient norms or policy entropy over time** gives far richer diagnostics than raw success rates: it reveals whether learning is converging, plateauing, or diverging—information that raw metrics routinely hide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
