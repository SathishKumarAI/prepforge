---
qid: ing_c51d53f575__fp__local
question: 'Explain: Reference Architecture — Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 398
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:50-05:00'
sources: []
---

**Reference Architecture for Agentic Systems**

At its core an agentic system is a *policy* that maps observations to actions in order to maximise expected cumulative reward.  
The reference architecture therefore decomposes the problem into three interacting layers:

| Layer | Function | Design rationale |
|-------|----------|------------------|
| **Perception** | Sensor‑to‑state encoder (CNNs, transformers) → latent state *s* | Compress raw data into a low‑dimensional representation that preserves all information relevant to future reward. This is an instance of the *information bottleneck*: we discard irrelevant noise while keeping predictive power. |
| **Decision Engine** | Policy network π(a|s) (actor–critic, Q‑learning, RL‑HF) | Learns a mapping from latent state to action distribution that optimises expected return. The actor/critic split mirrors the Bellman equation’s decomposition of value and policy gradients. |
| **Actuation & Feedback** | Execute *a*, observe next sensor data → new *s*; log trajectory | Provides the environment signal needed for temporal credit assignment (back‑propagation through time, TD errors). |

The architecture is agnostic to the particular agentic objective—whether it’s navigation, dialogue, or creative generation—because all such tasks reduce to the same Markov Decision Process (MDP) framework.  

**Non‑obvious insight:**  
*The perception layer must be **task‑agnostic yet reward‑sensitive*. A purely supervised encoder trained on unrelated labels can destroy the very features that make a policy effective, whereas an unsupervised contrastive loss that incorporates future‑reward signals preserves those features. Thus, training perception with *future‑state prediction conditioned on reward* (a form of “reward‑conditioned predictive coding”) yields representations that are both compact and intrinsically aligned with agentic goals.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
