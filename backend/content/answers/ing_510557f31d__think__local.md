---
qid: ing_510557f31d__think__local
question: 'Explain: Multi-agent and subagents — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 497
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:21:59-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is a “multi‑agent” system?* Assume it’s a set of autonomous entities that interact (cooperate or compete).  
   - *What are “subagents”?* Treat them as nested agents—components within a larger agent that can act independently.  
   - *Tool use context*: We’re focusing on how these agents employ external tools (software, APIs, hardware) to achieve goals.

**2. Adopt a mental model**  
   - View each agent as a **goal‑oriented loop**: sense → plan → act → learn.  
   - Subagents are smaller loops embedded inside the parent’s loop, often specialized for sub‑tasks or tool interactions.  
   - Tool use is an *action primitive* that can be invoked by any agent level.

**3. Step‑by‑step reasoning**  
   1. **Identify goals**: Parent goal → decomposes into subtasks → assign to subagents.  
   2. **Allocate tools**: Determine which tool each subagent needs (e.g., a language model, database API).  
   3. **Define interfaces**: Specify input/output contracts between parent and subagents, and between subagents and tools.  
   4. **Execution flow**: Parent sends request → subagent calls tool → receives result → returns to parent.  
   5. **Feedback loop**: Parent monitors outcomes, refines subagent strategies or tool usage.

**4. Common traps to avoid**  
   - *Over‑complex nesting*: Too many subagents can make debugging impossible.  
   - *Tool misuse*: Subagents calling tools outside their scope leads to failures.  
   - *Lack of coordination*: Without a clear protocol, agents may act redundantly or conflict.

**5. Sanity‑check & communicate**  
   - **Check consistency**: Does every subagent have a well‑defined goal and tool?  
   - **Test with a simple example**: e.g., a “search‑summarize” agent that delegates to a web‑scraper subagent and a summarizer subagent.  
   - **Explain aloud**: Outline the flow from parent to subagents to tools, highlighting how each layer contributes to the overall objective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
