---
qid: ing_dc0af96b36__faang__local
question: 'Explain: Architecture Patterns for Tool-Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 544
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:10:01-05:00'
sources: []
---

**Clarify**  
The question asks which *architecture patterns* are effective when building **tool‑use agents**—AI systems that decide which external APIs or software tools to invoke to solve a task (e.g., summarization, data extraction). I’ll assume we’re dealing with large language models (LLMs) orchestrated by a controller and that the goal is modular, explainable, and updatable.

**Approach**  
1. Identify core components: **Planner**, **Executor**, **Memory**, **Tool Registry**.  
2. Map each component to known patterns: *Chain‑of‑Thought*, *Modular Design*, *Microservice* style, *Command Query Responsibility Segregation (CQRS)*, and *Event‑Sourcing*.  
3. Show how these interact in a loop: Planner → Tool Selection → Executor → Feedback → Memory Update.

**Depth**  

| Pattern | Role | Implementation |
|---------|------|----------------|
| **Chain‑of‑Thought (CoT)** | Generates intermediate reasoning steps that include tool calls. | LLM prompts embed “I will call X with Y” tokens; the agent parses and routes them. |
| **Modular/Plugin** | Decouples tools from core logic. | Each tool is a micro‑service exposing a simple JSON API; registry holds metadata (name, schema). |
| **CQRS + Event‑Sourcing** | Keeps deterministic state of actions for auditability. | Planner emits *Command* events (`CallTool(tool_id, args)`); Executor emits *Event* (`ToolResult`). |
| **Memory‑Augmented** | Provides context and prevents redundant calls. | Short‑term memory stores recent tool outputs; long‑term vector store indexes past interactions. |

Complexity: Planner runs in \(O(n)\) per step (n tools), Executor is constant‑time per call, Memory retrieval is logarithmic with index size.

**Edge Cases**  
- Tool failure → retry logic or fallback planners.  
- Infinite loops of tool calls → depth limit and cycle detection.  
- Ambiguous prompts → confidence scoring before selection.

**Optimize & Communicate**  
To improve latency, batch tool invocations where possible; cache frequent results. I would present this flow diagrammatically to interviewers, emphasizing how each pattern isolates concerns (planning vs execution) and enables incremental upgrades (e.g., swapping a tool without retraining the planner). This demonstrates clear problem‑solving structure, depth of understanding, and awareness of trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
