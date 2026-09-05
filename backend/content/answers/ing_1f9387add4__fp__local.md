---
qid: ing_1f9387add4__fp__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 526
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:13:04-05:00'
sources: []
---

**Designing a Tool Surface for a Coding Agent**

At its core, a coding agent must *transform* high‑level intent into executable artifacts while keeping the developer in control. This requires a **tool surface** that exposes discrete capabilities (e.g., code generation, static analysis, test execution) as *first‑class services*.

1. **Tool Registry**  
   Each tool is identified by a unique name and a JSON‑Schema describing its parameters. For example:
   ```json
   {
     "name": "generate_function",
     "schema": {
       "type":"object",
       "properties":{
         "language":{"enum":["python","js"]},
         "signature":{"type":"string"},
         "docstring":{"type":"string"}
       },
       "required":["language","signature"]
     }
   }
   ```
2. **Invocation Protocol**  
   The agent sends a POST to `/invoke` with `{tool: <name>, args: {...}}`. The backend validates the payload against the schema, executes the tool, and returns a JSON response containing:
   - `status`: `"ok"` or `"error"`
   - `output`: raw text or structured data
   - `metadata`: e.g., execution time, diagnostics

3. **Result Composition**  
   Results are streamed back as *immutable patches* to the codebase. A patch record contains `path`, `range` (start/end line/col), and `replacement`. The agent can apply multiple patches atomically, ensuring consistency.

4. **Tool Types**  
   - **Syntactic**: `format_code`, `refactor_variable`.
   - **Semantic**: `static_analysis`, `type_check`.
   - **Runtime**: `run_tests`, `profile`.

5. **Non‑obvious Insight**  
   Treating each tool as a *stateless microservice* forces the agent to reason about *side effects*. Because patches are immutable, the agent can backtrack or roll‑back changes without global state, enabling safe experimentation—something most “black‑box” LLMs cannot guarantee.

This architecture aligns with *optimisation theory*: each tool is a costed operator; the agent selects a sequence minimizing total effort while satisfying constraints. It also mirrors *probabilistic inference*: the agent updates beliefs about the code’s correctness after observing tool outputs, guiding subsequent calls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
