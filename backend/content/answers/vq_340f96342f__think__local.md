---
qid: vq_340f96342f__think__local
question: What is PYTHONPATH?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 438
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:24:06-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The question likely comes from someone new to Python who saw `PYTHONPATH` in docs or terminal output.  
   - Assume they know basic environment variables but not how Python uses them.

**2. Choose a mental model**  
   - Treat `PYTHONPATH` as *Python’s import search list* – an extension of the default module lookup order.  
   - Map it onto the familiar “search path” concept used in shells, libraries, etc.

**3. Step‑by‑step reasoning**  
   1. Explain that Python imports modules by scanning a sequence of directories (`sys.path`).  
   2. The first entry is the directory containing the script being executed; then standard library dirs follow.  
   3. `PYTHONPATH` (if set) inserts additional directories at the front of this list, allowing custom or third‑party packages to be found before the standard ones.  
   4. Show how it’s set: `export PYTHONPATH=/foo:/bar` on Unix, `set PYTHONPATH=C:\foo;C:\bar` on Windows.  
   5. Mention that you can view current search order with `import sys; print(sys.path)`.

**4. Avoid common traps**  
   - Don’t conflate it with `PYTHONHOME`; the latter changes the base of the standard library, not module lookup.  
   - Beware of path separators (`:` vs `;`) and that the variable is optional – Python works fine without it.  

**5. Sanity‑check & communicate**  
   - Verify by creating a dummy module in a custom folder, adding that folder to `PYTHONPATH`, then importing it from another script.  
   - Summarize: *“`PYTHONPATH` is an environment variable that tells Python where else to look for modules, extending the default import search list.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
