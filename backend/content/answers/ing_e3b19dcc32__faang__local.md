---
qid: ing_e3b19dcc32__faang__local
question: 'Explain: Functions, Tools and Agents with LangChain - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 536
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:26-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *how* LangChain organizes an LLM‑driven application: the **Functions** (small, reusable blocks), the **Tools** (external services or APIs that a chain can invoke) and the **Agents** (policies that decide when/which function or tool to call).  
Assumptions:  
- The candidate knows what an LLM is.  
- “LangChain” refers to the open‑source framework by DeepLearning.AI for building language‑model pipelines.

**Approach**  
1. Define each concept in plain terms.  
2. Show how they compose a chain (function → tool → agent).  
3. Highlight use‑cases and trade‑offs.

**Depth**  

| Component | Role | Example |
|-----------|------|---------|
| **Function** | Self‑contained logic that can be called by the LLM; usually returns structured JSON. | `summarize_text(text)` that outputs a 2‑sentence summary. |
| **Tool** | Wrapper around an external API or system (e.g., weather, database). The LLM generates a tool call request; LangChain routes it to the real service and feeds back the result. | `search_google(query)` → calls Bing/Google API. |
| **Agent** | Decision engine that interprets the LLM’s output and selects the next step: continue text generation, invoke a function/tool, or finish. Agents can be rule‑based (e.g., *stop when “DONE”*) or RL‑fine‑tuned. | A “search‑then‑summarize” agent that first calls `search_google` then feeds results into `summarize_text`. |

**Edge Cases**  
- **Non‑JSON outputs**: the LLM might not return valid JSON → need parsing guards.  
- **Infinite loops**: an agent could repeatedly call the same tool; implement max‑steps or a “stop” keyword.  
- **Tool failure**: network errors must be caught and handled gracefully.

**Optimize & Communicate**  
Explain that by modularizing logic into functions and tools, you achieve composability, easier testing, and clearer debugging. Agents allow dynamic control flow without hardcoding steps, enabling flexible pipelines (e.g., a chatbot that searches the web only when needed). Finally, stress that this architecture scales: add new tools without touching existing agents; swap agents to change behavior.

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
