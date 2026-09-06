---
qid: ing_f4638f48db__fp__local
question: 'Explain: When do you tell a customer that AI is the wrong tool? Give a
  concrete case and how you''d handle the conversation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 407
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:38:41-05:00'
sources: []
---

**When an AI system is the *wrong* tool**  
At its core, AI solves problems that can be expressed as a **learnable mapping** from input data to output predictions, given enough diverse examples and a clear objective function. If a task lacks this structure—e.g., it requires *human judgment*, *empathy*, or *ad‑hoc reasoning*—forcing an AI onto it will produce brittle, opaque, or ethically problematic results.

### Concrete case: Legal document review for a high‑stakes litigation  
The client needs to assess whether a confidential contract contains clauses that expose the company to liability. The relevant clauses hinge on nuanced statutory interpretation, industry precedent, and contextual risk assessment—elements that are **contextual, evolving, and often contradictory**. A purely data‑driven model would either over‑generalize from historical cases (ignoring new statutes) or under‑perform due to sparse training signals.

### How I handle the conversation  
1. **Explain the fundamental mismatch**: “AI thrives when there’s a clear input–output pattern; here, the decision hinges on evolving legal standards and human judgment.”  
2. **Show a short demo of an AI attempt** (e.g., highlighting false positives) to illustrate brittleness.  
3. **Propose a hybrid workflow**: use AI for *pre‑screening* (flagging obvious red flags) while expert lawyers perform final review, thereby combining speed with expertise.  
4. **Outline risks and ROI**: quantify potential legal exposure if the AI misclassifies versus the cost of human review.  

By grounding the discussion in the problem’s *structural requirements*, I help the customer see that a different approach—human‑in‑the‑loop—is not just preferable but necessary for reliable, ethical outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
