---
qid: ing_ff1b96223a__faang__local
question: 'Explain: Agent Skills (SKILL.md) — Agents And Tool Use'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:33:08-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Agent Skills* as defined in the `SKILL.md` spec—essentially a catalog of reusable, declarative capabilities that an autonomous agent can invoke (e.g., “search web,” “call API,” “parse PDF”). I’ll assume we need to describe how these skills are structured, discovered, and used by agents, and why this abstraction matters for scaling AI systems.

**Approach**  
1. Outline the purpose of a skill registry.  
2. Describe the JSON‑ish schema (name, description, inputs/outputs, cost).  
3. Explain the runtime loop: intent → skill match → invocation → result aggregation.  
4. Touch on safety and versioning.  

**Depth**  
- **Schema**: Each skill is a lightweight module exposing `invoke(params)`. Inputs are typed (e.g., string, int), outputs likewise; optional metadata (`timeout`, `retry`).  
- **Skill Discovery**: Agents maintain an in‑memory catalog or query a central service; they can also import new skills at runtime via a plugin API.  
- **Invocation**: The agent’s planner selects the minimal skill chain to satisfy a goal, using a cost function that balances latency and accuracy. Results are fed back into the prompt as structured JSON for next step reasoning.  
- **Safety**: Every skill is sandboxed; access controls (e.g., API keys) are stored separately. Version tags allow rollback if a new skill misbehaves.  

**Edge Cases**  
- *Missing Skill*: fallback to pure LLM generation or request human input.  
- *Conflicting Outputs*: merge strategy based on confidence scores.  
- *Rate Limits Exceeded*: exponential backoff and queued retries.  

**Optimize & Communicate**  
Future improvements: a declarative policy language for chaining, caching popular skill calls, and continuous monitoring of skill performance metrics. In an interview I’d conclude by highlighting how this modularity decouples model evolution from external API changes, enabling rapid iteration—exactly the pattern FAANG teams use to ship AI features at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
