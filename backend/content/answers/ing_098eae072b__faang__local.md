---
qid: ing_098eae072b__faang__local
question: Design the tool schema for a coding agent. How many tools, and how do you
  handle tool errors?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 468
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:06:31-05:00'
sources: []
---

**Clarify**  
We’re building a *coding agent* that can generate, run, test, and debug code by invoking external “tools” (e.g., compilers, linters, unit‑test runners).  
Assumptions:  
1. The agent runs in a sandboxed environment with limited CPU & memory.  
2. Tools expose deterministic APIs and return structured JSON.  
3. We need to support multiple languages (Python, JavaScript, C++).  

**Approach**  
1. **Tool taxonomy** – group tools into 4 categories: *Compiler*, *Interpreter*, *Linter*, *Test Runner*.  
2. For each language create a *tool bundle* that contains the minimal set of these four.  
3. Design a central *Tool Manager* that (a) loads bundles on demand, (b) validates tool health via a heartbeat ping, and (c) records execution metrics.  

**Depth**  
- **Schema**: `ToolBundle { id, language, compiler, interpreter, linter, testRunner }`. Each sub‑tool has `{ name, version, endpoint, timeout, retryPolicy }`.  
- **Error handling**: Wrap each call in a try/catch, log the stack, and surface an *error intent* back to the agent. The agent can then decide to “retry”, “fallback to another bundle”, or “prompt user”.  
- **Retries**: Exponential back‑off up to 3 attempts; if still failing, mark tool as unhealthy in the manager.  

**Edge Cases**  
- Tool crash → sandbox kill & reset.  
- Timeout → abort and return a timeout error intent.  
- Version mismatch → agent can request an updated bundle or downgrade code style accordingly.  

**Optimize & Communicate**  
- Cache healthy bundles to reduce startup latency.  
- Use circuit‑breaker patterns for flaky tools, notifying the manager after N consecutive failures.  
- In interviews I’d illustrate this with a simple diagram and explain that the 4‑tool bundle approach scales linearly: adding a new language just adds another bundle, keeping the agent logic agnostic to tool internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
