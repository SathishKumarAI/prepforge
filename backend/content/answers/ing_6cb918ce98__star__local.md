---
qid: ing_6cb918ce98__star__local
question: 'Explain: Pattern: ReAct — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 323
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:31-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a customer‑support chatbot that needed to answer complex queries while also asking clarifying questions when the user’s intent was ambiguous. The existing rule‑based system either over‑answered or stalled with no follow‑up, hurting satisfaction scores.

**Task:**  
I had to design an architecture that let the model both generate responses and decide when to ask for more information—essentially a “think‑and‑talk” loop—without sacrificing latency or requiring manual intervention.

**Action:**  
I implemented the ReAct (Reason + Act) pattern. The language model was prompted with a dual‑head format: first, it produced a short reasoning token (e.g., “Need clarification on shipping date”), then an action token (“Ask user for delivery date”). I wrapped this in a lightweight state machine that fed back the user’s reply as new context and iterated until a final answer was generated. The system used OpenAI’s GPT‑4 for inference, integrated with our existing Node.js backend via HTTP calls, and logged each reasoning–action pair to monitor drift.

**Result:**  
User satisfaction rose from 72 % to 88 % in three months, while average response time stayed under 1.2 s. The ReAct pattern also reduced developer effort by eliminating manual hand‑off rules, and I documented the workflow so other teams could reuse it for different domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
