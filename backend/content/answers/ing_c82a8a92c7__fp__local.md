---
qid: ing_c82a8a92c7__fp__local
question: 'Explain: Gemini 2.5 Computer Use Preview — Gemini Developer API pricing
  \u00a0|\u00a0 Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 409
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:50-05:00'
sources: []
---

### Why the “Computer‑Use” tier is priced the way it is  

When a large language model (LLM) can invoke external tools—executing code, querying databases, or calling APIs—it becomes *a programmable agent*.  
The cost of such an agent is no longer just token‑based. Each **tool invocation** consumes:

1. **Compute cycles** – the LLM must generate the prompt for the tool, parse its response, and stitch it back into the conversation.  
2. **External service usage** – calling a database or executing Python code may incur separate charges (e.g., cloud compute, storage).  

Google’s pricing therefore splits the bill:

| Component | What it covers |
|-----------|----------------|
| **Prompt tokens** | Tokens sent to Gemini for context and instruction. |
| **Tool‑execution fee** | Fixed per‑call surcharge that reflects the average cost of running a single external operation on Google Cloud infrastructure. |
| **Optional GPU/TPU usage** | If you enable higher‑capacity compute (e.g., 8‑core TPUs) to speed up code execution, an extra tier appears. |

### The deeper principle  

This model aligns with *resource‑based pricing* used in cloud services: you pay for the actual operations your application performs, not just the raw text. It also enforces a **fair‑use guardrail**—the per‑call fee discourages frivolous tool calls that could otherwise saturate backend resources.

### Non‑obvious insight  

Most developers assume higher token limits alone give better performance. In reality, *tool usage* is often the bottleneck: each external call introduces latency and a cost independent of token count. Optimizing the conversation to batch or reduce unnecessary invocations can cut both time and money more effectively than simply increasing prompt size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
