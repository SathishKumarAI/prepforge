---
qid: ing_098eae072b__think__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 411
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:20:53-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   - *What is “tool”* in this context (API calls, language models, external services)?  
   - Assume the agent runs locally but can invoke external APIs; errors are runtime exceptions or HTTP failures.  

**2️⃣ Adopt a modular framework**  
   - Treat each capability as an independent “tool”: `CodeGen`, `Debug`, `TestRunner`, `DocFetcher`.  
   - Use a registry pattern so tools can be added/removed without touching the core loop.  

**3️⃣ Step‑by‑step reasoning to the answer**  
   1. Enumerate essential functions → ~4–6 core tools.  
   2. For each tool, define: input schema, output schema, and error contract (e.g., `success:true/false`, `message`).  
   3. Implement a *Tool Executor* that wraps calls in try/catch, logs, and returns a standardized response.  
   4. Build a fallback policy: retry once for transient errors, else surface the failure to the planner with context.  

**4️⃣ Common traps to avoid**  
   - Over‑splitting into too many tiny tools (verbosity).  
   - Ignoring side‑effects; e.g., a test runner that mutates state without rollback.  
   - Not normalizing error responses, leading to ambiguous planner decisions.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify each tool’s contract covers all edge cases.  
   - Run unit tests that simulate failures and ensure the executor returns the expected standardized payload.  
   - Communicate: “We’ll expose 5 core tools, each with a `status` flag; errors are caught by the executor, retried when safe, and otherwise reported back to the planner for adaptive action.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
