---
qid: ing_81704af5f8__think__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 708
total_tokens: 918
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:32:50-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**

- *What is “exposing 130 tools as function definitions”?*  
  Think of each tool being a JSON‑RPC endpoint with a fixed signature that the agent can call directly.

- *What does “expose them as a code API the agent writes scripts against” mean?*  
  The agent generates (e.g., Python) code that imports a library exposing those tools, then runs it in an execution environment.

- *Assume:*
  - Agent has code‑generation and runtime capabilities.
  - Security & sandboxing are manageable for both approaches.
  - Performance requirements differ (API calls vs. script execution).

---

**2️⃣ Mental model / framework**

Use a **trade‑off matrix** covering:

| Dimension | Function API | Code API |
|-----------|--------------|----------|
| Simplicity | Low: direct call syntax | Medium–high: code writing + parsing |
| Flexibility | Limited to pre‑defined calls | Full programmatic control (loops, conditionals) |
| Extensibility | Adding a tool → new function signature | Add a wrapper or module – no API change |
| Debugging | Straightforward stack trace | Requires introspection of generated script |
| Security | Fine‑grained permissions per function | Whole script sandboxing needed |
| Latency | One network call per tool use | Potentially one bulk run (lower round‑trips) |

---

**3️⃣ Step‑by‑step reasoning**

1. **Assess use cases** – If the agent needs to perform a single, deterministic action, a function API suffices. For complex workflows (iterative data processing, branching), code is more natural.
2. **Measure overhead** – Function calls involve serialization/deserialization per tool; scripts can batch multiple calls into one execution unit, reducing round‑trip time.
3. **Consider maintainability** – Adding a new tool to the function API forces changes in the agent’s call logic; with a code API, you only update or add a module wrapper.
4. **Evaluate safety** – Function APIs allow per‑tool access controls; scripts require sandboxing all possible operations, which can be more restrictive and harder to audit.
5. **Plan for debugging** – Function calls produce clear logs; script execution may obscure the origin of errors unless you instrument the generated code.

---

**4️⃣ Common traps**

- *Assuming “code API” is always better*: It introduces complexity (parsing, runtime errors) that may outweigh benefits for simple tasks.
- *Ignoring security*: A sandboxed interpreter can be bypassed if not carefully designed; function APIs can limit exposure more cleanly.
- *Over‑optimizing latency*: The perceived speed gain of scripts may be negated by the cost of compiling or interpreting them.

---

**5️⃣ Sanity‑check & communicate**

- **Ask**: “What kind of workflows will the agent run?”  
  If mostly linear, function API is fine; if branching/looping, code API shines.
- **Benchmark**: Run a micro‑benchmark comparing single calls vs. script execution for representative workloads.
- **Explain trade‑offs in plain terms**: “Function APIs give you safety and low overhead for one‑off actions; code APIs give you the power to write complex logic but at the cost of more security work and potential debugging headaches.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
