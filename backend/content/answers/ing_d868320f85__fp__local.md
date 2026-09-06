---
qid: ing_d868320f85__fp__local
question: 'What Is Context Pollution? — The Day 30 Problem: Why Your AI Agent Gets
  Worse Over Time | Cipher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 401
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:34-05:00'
sources: []
---

**Context pollution** is the phenomenon where an AI agent’s internal state drifts away from a reliable reference because it continually incorporates its own outputs as new inputs.  
At its core, the agent solves *sequential decision‑making*: at step t it observes context \(c_t\), produces action \(a_t = f(c_t)\), and receives feedback. In practice, many agents feed their own past actions back into the next observation (e.g., a chatbot re‑injecting its reply). If the model’s predictions are imperfect, each round injects an error \(\varepsilon_t\) into the context.  
Mathematically, after \(k\) steps the accumulated bias is  
\[
b_k = \sum_{i=1}^{k}\alpha^{\,k-i}\,\varepsilon_i,
\]
where \(\alpha\) (≈ 1 for recurrent nets) reflects how much past errors influence the present. Even tiny \(\varepsilon_i\) can grow exponentially, turning the agent into a *self‑reinforcing noise amplifier*.  

This is essentially a **catastrophic forgetting** problem in disguise: the system’s internal representation diverges from the true environment because it over‑weights its own (now corrupted) history.  
A non‑obvious insight—often missed—is that context pollution can be mitigated by *explicitly maintaining a separate, noise‑filtered memory bank*. By training the agent to query this clean archive rather than its raw recent outputs, we decouple learning from self‑generated drift and preserve long‑term performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
