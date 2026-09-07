---
qid: ing_aa81829bff__faang__local
question: 'Explain: Anti-Patterns to Avoid — Answer Frameworks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:20:42-05:00'
sources: []
---

**Anti‑Patterns to Avoid in AI Answer Frameworks**

| Stage | What to Do | Why It Matters |
|-------|------------|----------------|
| **Clarify** | Restate the question, confirm “AI” scope (ML/LLM/robotics), ask if we’re focusing on *answers* or *model design*. | Avoids assumptions; sets a common frame for discussion. |
| **Approach** | Outline: 1) Identify answer‑type (definition, comparison, critique). 2) Map to suitable AI technique (retrieval‑augmented generation vs. zero‑shot inference). 3) Validate with user intent and domain constraints. | Gives interviewers a clear roadmap; shows you consider multiple axes before coding or explaining. |
| **Depth** | 1️⃣ *No “black‑box” claims*: always explain the model’s reasoning path, e.g., how an LLM cites sources. <br>2️⃣ *Avoid over‑fitting to data*: test with out‑of‑domain prompts. <br>3️⃣ *Don’t ignore biases*: include counter‑examples or fairness checks. | Demonstrates technical rigor: complexity (O(n) for retrieval), trade‑offs (speed vs. faithfulness). |
| **Edge Cases** | • Ambiguous prompts → ask clarifying questions. <br>• Contradictory data → surface uncertainty. <br>• Extremely long context → truncate or summarize. | Shows robustness and awareness of failure modes. |
| **Optimize & Communicate** | Use *retrieval‑augmented generation* for factual accuracy; fallback to *knowledge distillation* for latency constraints. Narrate: “Given the user’s intent, I first check if a fact‑based answer is required; if so, I retrieve top‑k sources and generate a concise summary.” | Communicates design choices, justifies trade‑offs, and highlights scalability. |

**Takeaway:**  
Avoid presenting AI answers as unqualified truths. Always *clarify*, *approach systematically*, *provide depth with explainability*, *handle edge cases proactively*, and *communicate the rationale behind your optimization decisions*. This framework keeps responses accurate, trustworthy, and interview‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
