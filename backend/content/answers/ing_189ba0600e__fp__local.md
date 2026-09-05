---
qid: ing_189ba0600e__fp__local
question: 'Explain: Sensors: — AI Agents Explained - by Sairam Sundaresan and Neo
  Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 427
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:58:08-05:00'
sources: []
---

### Why “Sensors” Matter for an AI Agent  
An agent’s **goal** is to act so that a *utility function* \(U\) over states of the world is maximized.  
But the agent never sees the true state \(s^*\); it only receives a stream of observations
\(o_t = \sigma(s_t, a_{t-1})\) produced by a **sensor** \(\sigma\).  

The sensor must satisfy two constraints:

| Constraint | Why it is necessary |
|------------|--------------------|
| **Completeness** | The set of possible observation sequences \(\{o_0,\dots,o_T\}\) must contain enough information to infer a *belief* over \(s^*\) that is compatible with the agent’s policy. If the sensor discards critical bits, no policy can achieve optimality. |
| **Efficiency** | The dimension of \(o_t\) should be small enough for learning algorithms (e.g., neural nets) to approximate the mapping \(\sigma^{-1}\) without overfitting. This is a trade‑off governed by *information bottleneck* theory: keep only what maximizes mutual information with future rewards. |

Thus, sensors are not arbitrary data collectors; they embody an **optimization problem** themselves: maximize \(I(o_t;\,s^*)\) subject to computational and bandwidth constraints.

---

#### A Non‑Obvious Insight  
Most people treat sensors as passive inputs. In fact, the *choice of sensor* can be framed as a **policy over the environment’s observation space**. By learning a *sensor policy*—for instance, deciding where to point a camera or which microphone array to activate—the agent can actively shape its own perception to reduce uncertainty most relevant to its objective. This meta‑learning of sensors is an emergent property of hierarchical reinforcement learning and has been shown to outperform hand‑crafted sensing setups in complex robotics tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
