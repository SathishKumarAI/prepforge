---
qid: ing_cbeab4375e__think__local
question: 'Explain: Building Custom Agent Skills — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 489
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:23:53-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
- *Goal*: Show how to extend an LLM‑powered agent with new “skills” (tools) it can call.  
- *Assumptions*: The reader knows what a prompt‑based or retrieval‑augmented agent is, has a basic Python environment, and understands the difference between a pure language model and one that invokes external functions.

**2. Adopt a mental model**  
Think of an agent as a **pipeline**:  
1. *Input* → 2. *Planner/LLM* decides what to do → 3. *Executor* runs a tool → 4. *Feedback loop*.  
Each new skill is just another executor step that the planner can pick.

**3. Step‑by‑step reasoning**  
- **Define the tool interface**: name, description, arguments (JSON schema), and return type.  
- **Implement the function** in Python (or a wrapper to an API).  
- **Register it with the agent framework** (e.g., LangChain’s `Tool` class or OpenAI’s new `function calling`).  
- **Update the LLM prompt** so that the planner can mention “call `tool_name` with …”.  
- **Handle tool output**: parse, validate against schema, feed back to the LLM.  
- **Iterate**: test with a few prompts, debug failures (e.g., wrong arguments), refine.

**4. Common traps to avoid**  
- *Hard‑coding arguments*: always use JSON schemas so the LLM can generate correct calls.  
- *Ignoring errors*: build retry logic and graceful degradation if a tool fails.  
- *Over‑prompting*: keep the prompt concise; too many tool descriptions dilute focus.

**5. Sanity‑check & communicate**  
Run a simple “Hello, world” test: ask the agent to compute π using your custom `compute_pi` tool. Verify that the LLM outputs a call in the correct JSON format and that the function returns the expected result. Explain each step aloud, highlighting how the planner’s decision is grounded in the tool’s description, ensuring readers see the tight coupling between prompt design, function signature, and execution flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
