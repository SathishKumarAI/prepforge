---
qid: ing_1f9387add4__faang__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 550
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:58:02-05:00'
sources: []
---

**Clarify**  
You’re asking how a *coding‑agent* (e.g., an LLM that can execute code) should expose its “tool surface” so downstream systems or users can invoke it reliably. I’ll assume:  
1. The agent is stateless per request, but may maintain a short execution context.  
2. Tools are deterministic, side‑effect free except for the agent’s own sandboxed runtime.  

**Approach**  
1. Enumerate primitive tools (exec, compile, lint, test).  
2. Define a JSON schema per tool: name, input fields, return type, error model.  
3. Design a response envelope that normalizes outputs and status codes.  

**Depth**  
| Tool | Schema (JSON) | Result format |
|------|---------------|--------------|
| **execute** | `{ "language":"python", "code":"print(1)" }` | `{ "stdout":"1\n", "stderr":"" , "exit_code":0, "runtime_ms":12 }` |
| **compile** | `{ "language":"c++", "source":"int main(){return 0;}" }` | `{ "binary_path":"/tmp/a.out", "warnings":[] }` |
| **lint** | `{ "file":"utils.py" }` | `{ "issues":[{ "line":3, "msg":"unused variable" }]}` |
| **test** | `{ "tests":["test1()", "test2()"], "timeout_ms":5000 }` | `{ "passed":2,"failed":0,"details":[] }` |

All responses are wrapped:  
```json
{ "tool":"execute", "status":"success", "payload":{...} }
```
Errors use a standard code/message pair; timeouts surface as `status:"timeout"`.

**Edge Cases**  
- Invalid schema → 400 with field‑specific errors.  
- Runtime crashes → `stderr` and non‑zero exit_code.  
- Resource exhaustion → `status:"error", "msg":"out of memory"`.  

**Optimize & Communicate**  
- Cache lint results for unchanged files to reduce latency.  
- Expose streaming stdout/stderr for long jobs, using a server‑sent event channel.  
- Document the schema in OpenAPI/JSON‑Schema so consumers auto‑generate clients.  

By keeping tool definitions declarative and responses uniform, we enable composability, easy testing, and clear error handling—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
