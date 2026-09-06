---
qid: ing_afc9469db3__fp__local
question: 'Explain: Tools and Memory — AI Agents Explained - by Sairam Sundaresan
  and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 478
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:19-05:00'
sources: []
---

**Why an agent needs “tools” and “memory”**

An autonomous system is a *controller* that maps observations → actions to maximise cumulative reward \(R\).  
If the controller has only a short‑horizon policy \(\pi_\theta(o_t)\), it can only react to the current state. Any *long‑term dependency* (e.g., “save this file for later”) is impossible: the loss function cannot credit a delayed consequence because the gradient never flows back across the intervening steps.

The solution is to augment the controller with **external memory** \(M_t\) and a **toolset** \(\{T_i\}\).  
*Memory* acts as an implicit latent variable that can be written to and read from at arbitrary times, turning the policy into a *dynamic program*:  

\[
h_{t+1}=f(h_t,o_t,M_t),\quad
M_{t+1}=g(M_t,h_{t+1}),\quad
a_t=T_i(h_{t+1},M_{t+1})
\]

This decomposition is an instance of **decomposed optimization**: the controller optimises a *meta‑policy* over memory updates and tool usage, while each tool implements a sub‑problem (e.g., parsing, retrieval). The loss can now back‑propagate through both the memory write/read operations and the tool execution graph, satisfying the chain rule across arbitrarily long horizons.

**Non‑obvious insight**

Most people treat tools as black‑box APIs. In fact, *the internal representation of a tool (its interface) is itself a learned function*. If we parameterise \(T_i\) with neural networks and jointly train them with the controller, the agent learns to *invent* its own sub‑tasks that are optimally coupled to the main objective—essentially performing **automatic curriculum learning** without human‑defined sub‑skills.

In short, memory turns a stateless policy into a stateful dynamical system; tools modularise complex reasoning; together they enable long‑horizon optimisation that vanilla RL cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
