---
qid: ing_9d92f2dc2b__fp__local
question: 'Explain: What Makes Something an Agent — AI Agents Explained - by Sairam
  Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 452
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:40:28-05:00'
sources: []
---

**What Makes Something an Agent? A First‑Principles View**

The core problem a *decision system* solves is **mapping perceptions to actions that advance a goal under uncertainty**.  
From this optimization perspective, an *agent* must satisfy three structural conditions:

| Condition | Formalization | Why it is necessary |
|-----------|---------------|---------------------|
| **Perceptual Interface** | \(P_t = \mathcal{O}(S_t)\) – a function that extracts a state estimate from raw observations. | Without a concise representation of the world, any policy cannot be expressed or learned. |
| **Policy (Decision Rule)** | \(\pi_t : P_t \rightarrow A_t\) – a mapping from perceived state to an action. | This is the actual decision engine; it must be learnable and implementable in real time. |
| **Actuation / Feedback Loop** | \(S_{t+1} = f(S_t, A_t, \varepsilon_t)\) with reward \(r_t = R(S_t,A_t)\). | The environment’s dynamics provide the *credit assignment* signal that drives learning; without a loop, no adaptation occurs. |

These three pieces form a closed **perception–action cycle**. From an information‑theoretic angle, the agent compresses high‑dimensional sensory streams into a *belief state* \(P_t\) (minimal sufficient statistic), then maximizes expected cumulative reward—a classic Markov Decision Process (MDP).  

**Non‑obvious insight:**  
Many systems labeled “agents” only implement a policy (e.g., a scripted chatbot). They lack an explicit perceptual interface or a feedback loop, so they are *not* true agents—they cannot adapt to novel inputs. True agenthood requires that the system **continually updates its internal model** based on incoming data and uses it to inform future actions. In short, adaptability is not optional; it is the defining property of an AI agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
