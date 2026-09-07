---
qid: ing_9f19394dc9__faang__local
question: 'Explain: Q12: Explain the ReAct pattern — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:53:57-05:00'
sources: []
---

**ReAct Pattern (Reason‑Act)**  
A modern paradigm for building intelligent agents that combine reasoning and action in a single loop.

---

### Clarify
* **What is asked?**  Describe the ReAct pattern—its purpose, how it works, and why it matters.
* **Assumptions to confirm:**  
  * The agent has access to a language model (LLM).  
  * It can invoke external tools or APIs.  
  * The goal is to produce correct outputs while reasoning transparently.

---

### Approach
1. **Explain the loop**: “Reason → Act → Reason …” until termination.  
2. **Show components**: LLM, action interface, environment feedback.  
3. **Illustrate with a concrete example** (e.g., booking a flight).  
4. **Highlight benefits & trade‑offs** (explainability vs. latency).

---

### Depth
* **Reason step** – LLM generates a *reasoning trace* and a tentative *action* token.  
* **Act step** – The action is executed via an API; the result is fed back to the LLM.  
* **Iteration** – The LLM updates its internal state with new evidence, producing refined reasoning or a final answer.  
* **Termination** – When the LLM outputs a terminal token (e.g., “Answer”) or reaches a step limit.  

*Complexity:* Each loop invokes the LLM once → O(n·LLM_cost). Tool calls are lightweight compared to LLM inference.

---

### Edge Cases
* **Infinite loops** – enforce max steps.  
* **Tool failure** – handle exceptions and fallback reasoning.  
* **Ambiguous actions** – use confidence thresholds or clarifying questions.

---

### Optimize & Communicate
* **Caching** results of deterministic tools to cut cost.  
* **Parallelize** independent tool calls when possible.  
* **Explainability**: expose the reasoning trace in logs for auditability.  

Narrate your answer by walking through the loop, emphasizing how ReAct bridges pure LLM output and real‑world interactions—exactly what FAANG interviewers look for in a well‑structured, deep response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
