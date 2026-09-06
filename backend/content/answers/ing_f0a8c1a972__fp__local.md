---
qid: ing_f0a8c1a972__fp__local
question: 'Explain: So, print x run the program, x — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 432
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:30:48-05:00'
sources: []
---

**Why `print(x)` shows the value of `x` after a program runs**

At its core, a program is a *sequence of instructions* that manipulate data stored in *memory cells*.  
When Python starts executing a file, it parses the source into an abstract syntax tree (AST) and then compiles each statement into bytecode. The interpreter’s runtime has a *frame object* for every call, which contains a *locals dictionary* mapping variable names to objects on the heap.

1. **Binding** – When the line `x = 42` is executed, Python creates an integer object `42`, stores it in memory, and records the reference under the key `"x"` in the locals dict of the current frame.
2. **Lookup** – The statement `print(x)` triggers a name lookup: the interpreter searches the locals dict for `"x"`. Because the binding above exists, it retrieves the object `42`.
3. **I/O** – `print` is a built‑in function that calls the object's `__str__` method and writes the resulting string to stdout.

The *why* lies in the *binding–lookup* model of dynamic languages: variables are names bound to objects, and every access performs a lookup at runtime. This flexibility enables features like closures, decorators, and late binding, but it also means that `print(x)` will raise a `NameError` if no binding exists.

**Non‑obvious insight:**  
The locals dictionary is *not* a simple hash table; Python uses a *mixed array of string keys and pointers to objects*, optimized for the common case where most names are defined once. This design keeps lookups fast while still allowing the dynamic addition or deletion of variables, which is why `print(x)` can succeed even if `x` was created in a deeply nested function that has just returned—its reference lives on until garbage‑collected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
