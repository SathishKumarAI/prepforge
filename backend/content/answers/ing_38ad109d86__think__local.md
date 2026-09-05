---
qid: ing_38ad109d86__think__local
question: The agent answers from a customer's knowledge base, which contains outdated
  and contradictory articles. How do you prevent confidently wrong answers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 472
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:39:44-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
- *What is “confidently wrong”?*  Assume it means the agent gives a high‑confidence response that contradicts newer, more accurate information.  
- *Data constraints:* KB contains both old and contradictory articles; no external source is guaranteed up‑to‑date.

**2️⃣ Adopt a safety‑first mental model**  
Treat the agent as a *“source‑aware”* system: it must (a) recognize which article it cites, (b) estimate that article’s reliability, and (c) weigh that against any internal consistency checks. Think of it like a fact‑checking workflow.

**3️⃣ Reason step‑by‑step**  
1. **Article scoring:** For each matching KB entry, compute a *recency* score (e.g., days since last edit) and a *consistency* score (how many other articles agree).  
2. **Confidence calibration:** Adjust the agent’s confidence output by blending its natural confidence with the article scores.  
3. **Contradiction detection:** If two high‑score sources disagree, flag the conflict.  
4. **Fallback strategy:** In a conflict or low‑score situation, either (i) ask for clarification from the user or (ii) default to a safe “I’m not sure” response instead of guessing.

**4️⃣ Common pitfalls to avoid**  
- *Over‑trusting timestamps:* An old article may still be correct.  
- *Ignoring article provenance:* A highly cited but outdated source can mislead.  
- *Blindly lowering confidence:* May cause the agent to become useless; balance safety with usefulness.

**5️⃣ Sanity‑check & communicate**  
- Run unit tests: feed known contradictory pairs and verify that the agent either defers or flags them.  
- In user interactions, explicitly state “Based on our records (updated X days ago) …” so users see the source’s age.  
- Log conflicts for human review to continuously improve the KB.

By treating each answer as a *source‑annotated* claim and calibrating confidence with recency/consistency metrics, you reduce confidently wrong outputs while keeping the agent helpful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
