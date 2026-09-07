---
qid: ing_d7024268df__faang__local
question: 'Explain: Reduce Global Dependencies — 10 Good Coding Principles to Improve
  Code Quality'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 630
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:59:15-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise list of ten coding principles that minimize *global* state (e.g., singletons, static fields) in ML code so that modules are testable, maintainable, and scalable. I’ll assume the target is Python/Java‑style projects used in production ML pipelines.

---

**Approach**  
1. Identify 10 high‑impact principles.  
2. For each, give a one‑sentence rationale + a quick example.  
3. Keep total length 160–240 words, use markdown bullets for readability.

---

**Depth**

| # | Principle | Why it cuts globals | Mini‑example |
|---|-----------|---------------------|--------------|
| 1 | **Dependency Injection (DI)** | Pass collaborators via constructors or function args instead of hard‑coding globals. | `model = MyModel(config)` |
| 2 | **Configuration Objects** | Keep settings in immutable data classes; avoid global config dicts. | `cfg = Config(host='db', port=5432)` |
| 3 | **Stateless Functions** | Pure functions have no side‑effects, making them deterministic. | `def scale(x, factor): return x * factor` |
| 4 | **Context Managers for Resources** | Encapsulate I/O (files, sockets) in `with` blocks; prevent leaking globals. | `with open(path) as f:` |
| 5 | **Factory Functions** | Hide object creation behind a factory to control lifetimes. | `create_preprocessor()` |
| 6 | **Module‑Level Constants Only** | Allow constants but never mutable state at module level. | `MAX_FEATURES = 1000` |
| 7 | **Explicit State Passing** | Pass model weights or counters explicitly rather than reading globals. | `predict(x, weights)` |
| 8 | **Avoid Singletons** | Use DI instead of global singletons to enable multiple instances. | `class Cache:` (no static instance) |
| 9 | **Immutable Data Structures** | Use tuples, frozensets for shared data; prevents accidental mutation. | `params = (lr, batch)` |
|10 | **Unit‑Test Hooks** | Design APIs that accept mock objects; no hidden globals. | `train(data_loader=mock_loader)` |

---

**Edge Cases**

* Legacy code may still expose global state—use wrapper adapters to gradually refactor.  
* Performance‑critical loops should avoid repeated DI overhead; cache locally inside the loop.

---

**Optimize & Communicate**

These ten rules reduce coupling, enable parallelism, and make CI pipelines deterministic. In a real interview I’d illustrate each with a short snippet and discuss trade‑offs (e.g., DI can increase boilerplate but saves hidden dependencies). This structured answer shows clear problem framing, actionable steps, and awareness of edge scenarios—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
