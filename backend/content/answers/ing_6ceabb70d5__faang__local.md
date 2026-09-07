---
qid: ing_6ceabb70d5__faang__local
question: 'Explain: The Hybrid Approach — AI Agents Explained - by Sairam Sundaresan
  and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 460
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:50-05:00'
sources: []
---

**Hybrid Approach – AI Agents (Sairam Sundaresan & Neo Kim)**  
*FAANG‑style interview answer*

| Step | What I’d do |
|------|-------------|
| **Clarify** | The authors describe a *hybrid agent* that blends large language models (LLMs) with external tools (APIs, databases). Confirm: 1️⃣ Does the system rely on a single LLM or multiple? 2️⃣ How are tool calls orchestrated—rule‑based vs. learned policy? |
| **Approach** | 1️⃣ *Perception*: LLM parses user intent into an action plan. <br>2️⃣ *Planning*: A controller (often a smaller policy network) selects the next tool to invoke. <br>3️⃣ *Execution*: The chosen API is called, result fed back to the LLM. <br>4️⃣ *Feedback Loop*: LLM evaluates output, refines or aborts. |
| **Depth** | • **LLM role**: Natural‑language reasoning, context maintenance. <br>• **Tools**: Typed interfaces (e.g., `search(query)`, `calculator(a,b)`), each with a defined schema. <br>• **Policy**: Usually a supervised fine‑tuned model or reinforcement signal that learns when to call which tool. <br>• **Complexity**: Each round is *O(1)* API cost; overall latency grows linearly with steps but mitigated by parallelism. |
| **Edge Cases** | • Tool failure → fallback policy.<br>• Ambiguous intent → LLM asks clarifying question.<br>• Infinite loops if policy mis‑predicts – add step counter. |
| **Optimize & Communicate** | • Cache frequent tool outputs to reduce latency.<br>• Use a lightweight *retrieval‑augmented* LLM to limit planner size.<br>Explain that the hybrid design keeps the LLM light for reasoning while delegating heavy lifting to specialized, verifiable tools—balancing safety, interpretability, and performance. |

**Word count: ~190**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
