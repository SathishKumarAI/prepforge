---
qid: ing_1f9387add4__think__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 493
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:47:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Define “coding agent” (e.g., an LLM that can write, debug, and test code).  
   * Assume a set of external tools: file‑system access, compiler/interpreter, unit‑test runner, static‑analysis engine, version‑control CLI.  
   * Assume the agent communicates via JSON‑formatted requests/responses (a common schema).

**2️⃣ Adopt a “tool contract” framework**  
   * Each tool exposes an **API surface**: `name`, `description`, `parameters` (typed), and `return_type`.  
   * Use OpenAI’s Tool‑Use spec or LangChain’s Tool interface as the mental model.

**3️⃣ Step‑by‑step reasoning for a request**  
   1. Agent parses user intent → selects relevant tool(s).  
   2. Builds a JSON payload matching the chosen tool’s schema.  
   3. Sends request to tool executor (could be a wrapper around shell commands or cloud services).  
   4. Tool executes, captures stdout/stderr, exit codes, and any artifacts (e.g., compiled binaries).  
   5. Wraps results in a JSON response: `output`, `status`, optional `error`.  
   6. Agent interprets the result, possibly chains to another tool.

**4️⃣ Avoid common pitfalls**  
   * **Schema mismatch** – ensure parameter names/types exactly match tool expectations.  
   * **Security** – sandbox or whitelist commands; avoid arbitrary shell injection.  
   * **State leakage** – keep a clear separation between transient and persistent data (e.g., file writes).  
   * **Error handling** – always provide fallback paths when a tool fails.

**5️⃣ Sanity‑check & articulate**  
   * Run a dry‑run: feed a simple “print hello” task, trace the JSON flow.  
   * Verify that each tool’s `return_type` aligns with downstream consumers (e.g., agent’s next step).  
   * Communicate the design by showing a diagram of request → executor → response, and by documenting the JSON schema for each tool in a shared spec file.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
