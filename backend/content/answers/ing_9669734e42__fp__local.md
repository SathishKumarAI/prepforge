---
qid: ing_9669734e42__fp__local
question: 'Explain: How do you evaluate an LLM feature online? Design the A/B test
  and name the implicit feedback signals you''d use.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 659
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:15-05:00'
sources: []
---

**Why we evaluate an LLM feature online**

A language model’s *utility* is defined by how well it satisfies the user’s intent while preserving system efficiency. In a live setting the only observable evidence of satisfaction is **implicit feedback**—behaviour that correlates with “I liked this answer.” Because explicit ratings are scarce, we must design an experiment that turns those behaviours into a statistically sound signal.

---

### 1. A/B‑test architecture

| Component | Purpose |
|-----------|---------|
| **Randomized traffic split** (e.g., 10 % control vs. 90 % treatment) | Ensures comparable user pools while keeping most users on the baseline for business continuity. |
| **Feature flag** | Turns the new LLM logic on/off per session, guaranteeing that each request is tagged with its arm. |
| **Event pipeline** | Streams raw telemetry (search query, response, click‑throughs, dwell time) to a real‑time analytics layer. |
| **Statistical engine** | Computes lift metrics (e.g., conversion, satisfaction) using Bayesian A/B test frameworks that handle skewed distributions. |

---

### 2. Implicit feedback signals

1. **Click‑through rate (CTR)** on answer snippets or follow‑up actions.  
2. **Dwell time** on the answer page – a proxy for engagement.  
3. **Session length / number of queries** after the first prompt – shorter sessions often indicate higher satisfaction.  
4. **Return visits** to the same query within 24 h (negative signal).  
5. **Keyboard/scroll interactions** that suggest exploration vs. immediate exit.  

Each signal is mapped to a *reward* \( r_t \in [0,1] \) and aggregated per session.

---

### 3. Deeper principle: *Bandit‑guided evaluation*

Treat the A/B test as a multi‑armed bandit where each arm is an LLM variant. The implicit rewards become the feedback for online learning:

\[
\pi_{t+1}(a) \propto \exp(\eta \, \hat{Q}_t(a))
\]

where \( \hat{Q}_t(a) \) is a running estimate of expected reward and \( \eta \) controls exploration. This bridges offline evaluation with real‑time adaptation, ensuring that the system learns from *actual* user behaviour rather than pre‑defined metrics.

---

### 4. Non‑obvious insight

**Calibration matters more than raw accuracy.** Users judge relevance not only by factual correctness but also by *how confident* the model appears to be. A highly calibrated LLM—whose confidence scores match empirical success rates—generates implicit signals that are cleaner and more actionable for bandit updates, leading to faster convergence and fewer costly experiments.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
