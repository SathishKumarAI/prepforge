---
qid: ing_f453fa2c90__think__local
question: 'Explain: After Each Section — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 440
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:07:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What does “each section” refer to?*  
  Assume a typical AI‑project or research paper structure (problem, data, model, training, evaluation, ethics).  
- *Which pitfalls are relevant?*  
  Focus on conceptual, methodological, and practical errors that recur in these parts.

**2️⃣ Adopt a “Section‑by‑Section” mental map**

Create a template:  
```
[Problem] → [Data] → [Model] → [Training] → [Evaluation] → [Ethics]
```
For each slot list the usual trap, its cause, and an antidote.  

**3️⃣ Step‑by‑step reasoning**

- *Problem*: Over‑fitting to a narrow question → broaden scope or add counter‑examples.  
- *Data*: Biased samples → audit distribution, use balanced resampling.  
- *Model*: Choosing the wrong architecture → compare baselines, sanity‑check capacity.  
- *Training*: Learning‑rate mis‑tuned → use learning‑rate schedules, early stopping.  
- *Evaluation*: Relying on a single metric → report multiple metrics, cross‑validation.  
- *Ethics*: Ignoring societal impact → perform bias audits, stakeholder consultation.

**4️⃣ Common traps to avoid**

- Jumping straight into model selection without data exploration.  
- Assuming “more data” always fixes bias.  
- Treating accuracy as the sole success signal.  
- Neglecting reproducibility (missing random seeds, undocumented preprocessing).  

**5️⃣ Sanity‑check & verbalize**

- After drafting each pitfall, ask: *“Does this happen in real projects? Can I see a concrete example?”*  
- Summarize succinctly: “If you skip data audit before modeling, the model will inherit hidden biases.”  
- Keep explanations brief yet illustrative—use one sentence per section.

By rehearsing this 5‑step loop, you’ll consistently spot and communicate the most common pitfalls in AI work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
