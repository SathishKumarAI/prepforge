---
qid: ing_2bb5a591eb__think__local
question: 'Explain: Pattern 2 – Orchestrator agent (sub-agents as tools)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 596
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:33:14-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What is “Pattern 2” exactly?* It’s a design pattern in AI systems where one high‑level “orchestrator” agent coordinates several lower‑level agents that act as specialized tools.  
- *Assume*: We’re dealing with contemporary multi‑agent or LLM‑based architectures (e.g., LangChain, OpenAI’s Tool‑Use).  
- *Goal*: Explain the pattern, its purpose, and how it differs from other patterns.

**2️⃣ Adopt a mental model: “Command & Control”**  
Think of the orchestrator as a commander in an army. Each sub‑agent is a unit with a specific skill (e.g., data retrieval, summarization, image generation). The commander issues high‑level commands and delegates tasks to units that report back.

**3️⃣ Step‑by‑step reasoning**  

| Step | What happens | Why it matters |
|------|--------------|----------------|
| 1. **Define the overall task** | Orchestrator receives user intent or a problem statement. | Sets context for all sub‑agents. |
| 2. **Decompose into subtasks** | Orchestrator breaks the main goal into atomic actions (search, compute, write). | Enables parallelism and specialization. |
| 3. **Instantiate/Select tools** | For each subtask, choose the appropriate tool agent (e.g., a web‑scraper or math solver). | Keeps logic modular and replaceable. |
| 4. **Dispatch & monitor** | Orchestrator sends prompts to tool agents, waits for responses, may retry on failure. | Ensures reliability and handles uncertainty. |
| 5. **Aggregate results** | Combine outputs into a coherent final answer or action plan. | Produces the user‑visible outcome. |

**4️⃣ Common traps to avoid**

- *Over‑centralization*: Letting the orchestrator do too much logic instead of delegating; leads to bottlenecks.  
- *Blind trust in tools*: Assuming tool outputs are always correct—implement sanity checks or fallback strategies.  
- *Ignoring state management*: Failing to pass context between sub‑agents can break coherence.  

**5️⃣ Sanity‑check & verbalize**

- **Ask**: “Does each sub‑agent have a single responsibility?”  
- **Check**: “Can I swap one tool for another without touching the orchestrator?”  
- **Explain aloud**: “The orchestrator is like an air traffic controller—its job is to coordinate, not to fly planes. Each plane (tool agent) has its own autopilot.”  

By following this framework you can articulate Pattern 2 clearly and evaluate whether a given system actually implements the orchestrator‑with‑tool‑agents architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
