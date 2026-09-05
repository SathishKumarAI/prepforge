---
qid: ing_d371a8dd14__star__local
question: MCP connects an agent to tools. What does A2A solve that MCP does not, and
  how do the two compose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 398
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:27-05:00'
sources: []
---

**Situation:**  
At my last company we built a virtual assistant for customer support. The MVP used an MCP‑style architecture: the core agent sent text prompts directly to external APIs (knowledge base, ticketing system) and concatenated their responses back into one reply. When we added a new feature—automatically scheduling follow‑up calls—we noticed that the agent was still generating all content in a single pass, which made it hard to insert dynamic calendar data without bloating the prompt.

**Task:**  
I needed to integrate real‑time scheduling while keeping the agent’s context intact and preventing prompt size explosions. The goal was to let the assistant ask for availability, query the calendar API, then incorporate that answer into a final message—all within a single interaction flow.

**Action:**  
I introduced an Agent‑to‑Agent (A2A) pattern on top of MCP. First, the main agent issued a “schedule_call” intent and called a lightweight sub‑agent dedicated to interacting with the calendar API. That sub‑agent handled authentication, queried free slots, and returned only the most relevant slot in JSON. The main agent then merged this structured output into its final response without re‑prompting the external tools. I used LangChain’s `AgentExecutor` for the sub‑agent and OpenAI’s function calling to keep the prompt length minimal.

**Result:**  
The scheduling feature launched two weeks ahead of schedule, reduced average ticket turnaround by 30%, and cut API call costs by 25% because we avoided redundant tool invocations. I learned that A2A lets you encapsulate complex tool interactions in modular agents, preserving MCP’s simplicity while solving the prompt‑bloat problem that MCP alone can’t address.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
