---
qid: vq_6b2c8049ce__fp__local
question: How Python module is imported?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 367
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:07-05:00'
sources: []
---

**Why Python imports modules the way it does**

At its core, importing is a *resolution* problem: “Given an identifier `foo`, find a callable or value that implements it.”  
Python turns this into a search over *module specifiers*, each of which may be:

1. **Built‑in** – compiled into the interpreter (e.g., `sys`).  
2. **Frozen** – embedded in the binary for distribution.  
3. **File‑based** – a `.py`, `.pyc`, or extension module located via *search paths* (`sys.path`).

The search is linear: Python scans each path entry, looks first for a package directory (containing `__init__.py`) then for a module file. The first match becomes the *module object*. Importing populates that object’s namespace and caches it in `sys.modules`. Subsequent imports of the same name simply return the cached object, ensuring a single instance per interpreter.

**Deep principle:** this is an *eager, memoized* lookup, analogous to a **hash table with linear probing**, guaranteeing O(1) average lookup after the first import. The cache also enforces *singleton semantics*, essential for module‑level state (like `math`’s constants).

**Non‑obvious insight:**  
The order of `sys.path` is not arbitrary—it reflects *environmental precedence*. Adding a directory to the front allows local overrides of standard libraries, which is how virtual environments work. Thus, the import system doubles as a lightweight dependency resolution mechanism: the first match wins, enabling both isolation and extensibility without explicit configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
