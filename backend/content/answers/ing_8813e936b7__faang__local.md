---
qid: ing_8813e936b7__faang__local
question: 'Explain: Pitfall 14: Defending Wrong Answers — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 392
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:36-05:00'
sources: []
---

**Clarify**  
Pitfall 14 refers to the tendency of models (or practitioners) to “defend” an incorrect or misleading prediction instead of admitting uncertainty. It shows up when a system is forced to produce a single answer and, upon receiving a contradictory user query, it justifies its original output rather than revising it. Key assumptions: we’re dealing with a closed‑form QA model or dialog agent that must provide confidence scores.

**Approach**  
1. Identify when the model’s prediction conflicts with new evidence.  
2. Flag uncertainty and request clarification.  
3. If no extra data, surface the probability distribution instead of a hard label.  
4. Log these instances for downstream calibration.

**Depth**  
- **Detection**: Use an auxiliary “re‑ranking” head that takes the user’s follow‑up query as input and compares its likelihood to the original prediction.  
- **Response**: Return something like, *“I’m not confident about that; could you clarify?”* rather than a forced answer.  
- **Complexity**: O(n) per token for the re‑ranking head; negligible overhead versus a single forward pass.

**Edge Cases**  
- Ambiguous queries where multiple correct answers exist.  
- Users who explicitly demand an answer—model should politely refuse or offer uncertainty metrics.  
- Extremely low‑resource domains where even confidence estimates are noisy.

**Optimize & Communicate**  
Introduce a “confidence threshold” that triggers the defensive mode; tune it via validation on a held‑out disagreement set. Communicate the trade‑off: higher thresholds reduce wrong answers but may increase user frustration from too many uncertainty prompts. Highlight that this mitigates cascading errors in downstream pipelines and improves long‑term trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
