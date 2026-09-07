---
qid: ing_cf5977f83a__faang__local
question: 'Explain: Build AI agents — TypeScript AI Framework for Agents and Apps
  | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 448
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:42:39-05:00'
sources: []
---

**Clarify**  
You want a reusable **TypeScript framework** that lets developers build autonomous agents (chatbots, task‑oriented bots, etc.) and embed them into web or mobile apps.  
Assumptions:  
- Agents interact via natural language (LLM) and can call APIs.  
- The framework should be modular, testable, and support both browser and Node runtimes.  

**Approach**  
1. **Core abstractions** – `Agent`, `Skill`, `Context`.  
2. **LLM connector** – pluggable interface (`IChatProvider`) so users can swap OpenAI, Anthropic, etc.  
3. **Skill registry & executor** – each skill is a TypeScript class exposing an async `run(ctx)` method; the framework routes prompts to the right skill via intent parsing.  
4. **Context persistence** – simple in‑memory store with optional persistence layer (localStorage/IndexedDB for browser, Redis for server).  
5. **React hook & component** – `useAgent` and `<AgentChat />` for instant UI integration.  

**Depth**  
- *Agent*: holds LLM provider, skill registry, conversation history.  
- *Skill* interface: `{ name: string; run(ctx: AgentContext): Promise<AgentResponse> }`.  
- Intent extraction uses a lightweight prompt‑based classifier or spaCy NER.  
- Complexity: O(n) per message for intent lookup; memory grows linearly with conversation length (mitigated by context window truncation).  

**Edge Cases**  
- LLM rate limits → exponential backoff and request queuing.  
- API failures in skills → fallback to default response or retry logic.  
- Circular skill calls → detect via call stack depth.  

**Optimize & Communicate**  
- Cache intent results; batch skill calls when possible.  
- Provide clear error boundaries for UI components.  
- Document with examples and a “quick start” guide, so interviewers see a clean API surface and thoughtful design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
