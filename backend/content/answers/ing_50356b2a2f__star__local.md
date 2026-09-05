---
qid: ing_50356b2a2f__star__local
question: 'Explain: Assertions and Constraints — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 311
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:51-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our new risk‑assessment model was generating outlier predictions that the compliance team flagged as “unreasonable” and the data science lead asked us to enforce business rules at inference time.

**Task**  
I needed to add real‑time assertions and constraints to our dspy pipeline so the model would refuse outputs violating regulatory thresholds, while still allowing the user to see why a prediction was rejected.

**Action**  
Using dspy’s `assertion` decorator I wrapped the final scoring function with `@dspy.assertion(lambda score: 0 <= score <= 1)` to guarantee probability bounds. For constraints I defined a custom `Constraint` subclass that checked the model’s risk score against a dynamic threshold loaded from our policy database, raising an informative exception if violated. I integrated these into the dspy `Chain` and exposed the result through FastAPI, logging each rejection for audit.

**Result**  
Within two weeks the compliance team approved the pipeline; we reduced false‑positive alerts by 42 % and cut manual review time from 3 hours to under 10 minutes daily. I learned how dspy’s declarative assertion/constraint system can embed domain rules directly into LLM workflows, turning opaque predictions into auditable decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
