---
qid: ing_4b384e97cb__fp__local
question: 'Explain: Non-Functional Requirements — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 510
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:09-05:00'
sources: []
---

### Why “Non‑Functional” matters for a chatbot

A conversational agent’s **core function** is to map an input utterance *x* to a response *y*.  
That mapping is the *functional* requirement: correct intent extraction, slot filling, and policy selection.

But in practice users judge success by *how* the system behaves—its responsiveness, reliability, security, and fairness.  
From an information‑theoretic view, the agent must **transmit intent signals** across noisy channels (speech recognition errors, network latency). The *rate–distortion trade‑off* tells us that to keep distortion low we need low latency, robust error handling, and graceful degradation—exactly what NFRs enforce.

#### Core NFR dimensions

| Dimension | Why it must hold |
|-----------|-----------------|
| **Performance** (latency < 200 ms) | Human conversational rhythm (~3–4 words/s). Exceeding this breaks the illusion of real‑time dialogue. |
| **Availability** (> 99.9%) | Users expect 24/7 access; downtime becomes a usability failure even if intent logic is perfect. |
| **Security & Privacy** | Handling personal data mandates encryption, consent, and compliance (GDPR). A breach erodes trust faster than any functional bug. |
| **Scalability** | Sudden traffic spikes (e.g., during product launches) must not degrade response quality; horizontal scaling is required. |
| **Explainability & Fairness** | Decision‑making models should avoid bias; users need to see why a refusal was issued, else the system feels opaque. |

#### Non‑obvious insight

Most designers treat NFRs as “nice‑to‑have” constraints, but they actually **shape the functional space**.  
For example, enforcing strict latency forces the agent to *pre‑compute* or *prune* policy trees; this architectural choice directly limits the complexity of intents it can support. Thus, a seemingly unrelated NFR (latency) becomes a *design principle* that determines which functional features are feasible.

In short, non‑functional requirements are not peripheral—they encode the physics of human conversation and the economics of deployment, and they dictate the very shape of the system’s functional capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
