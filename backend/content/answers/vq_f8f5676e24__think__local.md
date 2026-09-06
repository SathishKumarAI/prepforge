---
qid: vq_f8f5676e24__think__local
question: What is Pure function in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 414
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:41:25-05:00'
sources: []
---

**1. Clarify the scope & assumptions**

* Make sure you understand that “pure function” is a functional‑programming concept, not Scala‑specific.
* Assume the reader knows basic Scala syntax (functions, immutability) but may not know formal definitions.

---

**2. Adopt a mental model / framework**

Use the *functional‑programming triad*:
1. **Referential transparency** – same inputs → same outputs.
2. **No side effects** – does not alter state or external objects.
3. **Determinism** – behavior depends only on arguments, no hidden state.

Map these to Scala constructs (e.g., `val` vs `var`, immutable collections).

---

**3. Step‑by‑step reasoning**

1. Start by stating the formal definition of a pure function.
2. Break it into its two core properties: determinism & side‑effect‑free.
3. Give a simple Scala example that satisfies both (e.g., `def add(a:Int,b:Int)=a+b`).
4. Contrast with an impure version (`var counter`, `def inc()=counter+=1`).
5. Highlight how pure functions enable reasoning, memoization, and parallelism in data pipelines.

---

**4. Common traps to avoid**

* Confusing “pure” with “immutable”. A function can be pure while mutating local immutable structures.
* Overlooking hidden side effects (e.g., printing, logging, database calls).
* Assuming all Scala methods are pure; many library functions are impure by design.

---

**5. Sanity‑check & verbalizing**

* Verify each property with a quick mental test: “If I call `f(2,3)` twice, will I always get 5 and nothing else changes?”
* When explaining, start with the definition, then illustrate with code, finish by summarizing the benefits (easier testing, composability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
