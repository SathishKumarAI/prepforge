---
qid: vq_6b2c8049ce__think__local
question: How Python module is imported?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 437
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:43:48-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Is the question about *how* an `import` statement works internally (search path, module caching, etc.) or just the syntax?  
   - Assume we’re talking about CPython’s import machinery as of Python 3.x.

**2. Adopt a mental model**  
   - Think of the import process as a **lookup → load → bind** pipeline:  
     1. Resolve the module name to a file/namespace.  
     2. Load or compile the code into a `module` object.  
     3. Cache it in `sys.modules`.  
   - Remember that `import` can be *statement* (`import foo`) or *expression* (`from foo import bar`).

**3. Step‑by‑step reasoning**  
   - Start with the module name: if dotted, treat each part as a package and walk through `__path__`.  
   - Use `sys.meta_path` to find an importer that can handle it; fall back to built‑in loaders.  
   - Once found, call the loader’s `create_module` (optional) and then `exec_module` to execute the code in a new namespace.  
   - After execution, insert the module into `sys.modules`.  
   - For `from … import`, fetch attributes from that namespace.

**4. Common traps**  
   - Forgetting that relative imports depend on the package’s `__package__`.  
   - Assuming `import foo` always loads a file; it can also load built‑ins or namespaces.  
   - Ignoring side effects: module code runs on first import only, subsequent imports reuse the cached object.

**5. Sanity‑check & verbalize**  
   - Verify by importing a simple module twice and inspecting `sys.modules`.  
   - Explain that Python keeps a global cache so repeated imports are cheap, and that custom import hooks can alter this pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
