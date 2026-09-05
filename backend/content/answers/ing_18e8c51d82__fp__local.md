---
qid: ing_18e8c51d82__fp__local
question: What Is an Agent? — AI Agents Explained - by Sairam Sundaresan and Neo Kim
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 341
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:55-05:00'
sources: []
---

**From first principles: the problem of autonomous interaction**

An *agent* is a system that observes its environment through sensors, processes those observations, and takes actions via effectors so as to maximise some goal function (utility).  
The fundamental challenge this solves is **sequential decision‑making under uncertainty**. A robot must decide what to do now while anticipating future states; a software bot must choose responses without knowing user intent.  

Why must it be *autonomous*? Because the environment can change independently of the agent, and any pre‑written script would quickly become brittle. Autonomy is thus an embodiment of **online optimisation**: at each step we solve
\[
a_t = \arg\max_{a}\mathbb{E}[U | s_t,a]
\]
given a model or sample estimate of how actions transform states.

The deeper principle is that agents encode *information flow*: sensors reduce uncertainty about the state; effectors influence that very uncertainty. The agent’s policy is therefore a mapping from information to action, optimising expected utility—a formalisation of the **control‑theoretic** trade‑off between exploitation (using current knowledge) and exploration (gathering new data).

**Non‑obvious insight:**  
An agent *does not* need an explicit world model; it can learn a policy directly from experience via reinforcement learning. This means the “agent” is really a *function approximator* that maps raw observations to actions, implicitly capturing the geometry of the environment without ever constructing it explicitly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
