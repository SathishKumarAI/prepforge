---
qid: ing_b840dc723a__fp__local
question: 'Explain: Clarifying questions & assumptions — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 362
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:56-05:00'
sources: []
---

**Clarifying Questions & Assumptions – the “Why” behind a Meeting‑Assistant AI**

A meeting’s purpose is an *optimization problem*: maximize value (decisions, actions) while minimizing waste (misunderstandings, idle time). The assistant’s job is to infer the hidden *state* of that problem from noisy signals: agenda items, speaker turns, body language. To solve this, it must ask *clarifying questions* and record *assumptions*.  

1. **Information‑theoretic view** – Every utterance has entropy; a good assistant reduces uncertainty by querying the minimal set of bits that most increase mutual information with the meeting’s goal.  
2. **Probabilistic inference** – The AI maintains a belief distribution over possible decisions. A clarifying question is chosen when its expected reduction in entropy (or KL‑divergence) exceeds a threshold, balancing cost vs benefit.  
3. **Assumption bookkeeping** – Because humans rarely state every premise explicitly, the assistant tags inferred premises (“we need to approve budget”) and tracks them as variables that can later be contradicted or refined.

*Non‑obvious insight*: The *optimal* question is often about a **latent variable** (e.g., “What outcome do we expect from this approval?”) rather than surface content. By targeting these hidden assumptions, the assistant turns vague intent into actionable constraints, dramatically accelerating consensus.  

Thus, clarifying questions and assumption logs are not optional niceties; they are the mechanism that turns conversational noise into a tractable optimization problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
