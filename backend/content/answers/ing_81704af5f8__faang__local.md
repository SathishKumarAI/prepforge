---
qid: ing_81704af5f8__faang__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 548
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:45-05:00'
sources: []
---

**Clarify**  
The question asks why an AI system might choose to expose its capabilities as a *code‑API* (e.g., a set of callable classes/methods) rather than as 130 discrete function definitions that the agent can invoke directly. Key assumptions: we’re building a “tool‑aware” LLM agent, the code API is compiled/interpreted in a sandboxed environment, and performance, safety, and extensibility are critical.

**Approach**  
1. Enumerate tradeoffs (expressiveness vs. overhead).  
2. Map each to concrete metrics: latency, memory, error handling.  
3. Provide a recommendation tree for when to pick one over the other.

**Depth**  
| Tradeoff | Code‑API | Function List |
|----------|----------|---------------|
| **Expressiveness** | One API can expose rich objects (e.g., a `Database` class with query/commit). Agents write reusable scripts. | Limited to stateless calls; harder to model stateful workflows. |
| **Performance** | Overhead of interpreting code + sandboxing; ~5–10 ms per script run. | Direct calls are ~1–2 ms, no interpreter cost. |
| **Safety** | Sandbox can restrict filesystem/exec, but still allows loops/long‑running scripts → need timeouts. | Each function is pre‑validated; risk of misuse lower. |
| **Extensibility** | Adding a new tool means updating the API surface; clients recompile or reload modules. | Add a new function definition—no code changes needed on agent side. |
| **Debugging** | Agents produce logs and stack traces, easier to trace complex logic. | Errors are localized to single calls but harder to chain failures. |

**Edge Cases**  
- *Infinite loops* in scripts → enforce strict time limits or static analysis.  
- *State leakage* between runs → isolate each script execution.  
- *Version drift*: API changes break existing scripts; require migration tooling.

**Optimize & Communicate**  
If the agent needs to orchestrate multi‑step workflows, a code API offers composability and maintainability, outweighing the interpreter overhead. For high‑frequency, low‑complexity tasks (e.g., lookups), direct function calls are preferable. Communicate this trade‑off by presenting the table above and advising a hybrid approach: expose core primitives as functions, wrap them into higher‑level API classes for complex logic. This balances speed, safety, and developer ergonomics—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
