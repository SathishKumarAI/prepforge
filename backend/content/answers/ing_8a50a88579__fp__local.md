---
qid: ing_8a50a88579__fp__local
question: 'Explain: Problem statement — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 369
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:58:54-05:00'
sources: []
---

### Problem Statement – *Meeting Assistant*

A **meeting** is a bounded interaction where several agents exchange information with the goal of making a joint decision or advancing a project. The fundamental challenge is that each participant has a private, time‑constrained knowledge state and can only attend a subset of the meeting’s agenda items. Consequently:

1. **Information asymmetry** – Some facts known to one attendee are unknown to others.
2. **Temporal misalignment** – Attendees arrive or depart at different times; their attention spans differ.
3. **Cognitive overload** – The volume of dialogue, documents, and decisions quickly exceeds human working memory.

A meeting assistant must therefore *aggregate* partial knowledge streams into a coherent, shared representation while *synchronizing* participants’ mental models in real time. This boils down to an online inference problem: given noisy, incomplete observations (speech transcripts, notes, actions), infer the latent state of the discussion and predict the next salient topic.

The deeper principle is **optimal information fusion** under bandwidth constraints. The assistant must decide *what* to surface, *when* to surface it, and *how* to encode it so that downstream decision‑making is maximally informed with minimal cognitive load.  

> **Non‑obvious insight:**  
> Most systems treat the meeting as a linear transcript. In reality, meetings are *causal graphs*: each utterance influences future topics in a non‑Markovian way. A true assistant models this graph structure, enabling it to anticipate upcoming agenda shifts and pre‑fetch relevant documents—effectively turning passive note‑taking into proactive context provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
