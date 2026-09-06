---
qid: vq_340f96342f__faang__local
question: What is PYTHONPATH?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 418
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise definition of **`PYTHONPATH`**, a common environment variable in Python projects. I’ll confirm they want the purpose (module search path) and any usage scenarios (development vs production).

**Approach**  
1. Define `PYTHONPATH`.  
2. Explain how it modifies `sys.path`.  
3. Show typical use cases and pitfalls.  
4. Mention alternatives (`site-packages`, virtualenv, PEP 420).  

**Depth**  
`PYTHONPATH` is an environment variable that lists directory paths (separated by `:` on Unix/macOS or `;` on Windows) where the Python interpreter should look for modules and packages before falling back to the standard library. When a script imports a module, Python builds its search list (`sys.path`) starting with the script’s directory, then any directories in `PYTHONPATH`, followed by entries from `site‑packages`. Modifying this variable lets developers add custom package locations without installing them globally.

Typical use: during development you might set  
```bash
export PYTHONPATH=/my/project/src:/another/lib
```
so that imports resolve to the latest source code. In CI/CD pipelines, it can point to a build artifact directory.

**Edge Cases**  
- Duplicate entries or circular paths cause unnecessary lookups.  
- On Windows, forgetting the semicolon separator breaks imports.  
- Overriding `PYTHONPATH` unintentionally may shadow standard modules (e.g., naming a local file `random.py`).  

**Optimize & Communicate**  
In production, prefer virtual environments or packaging tools (`pip install .`) to avoid global `PYTHONPATH`. I’d explain that while it’s powerful for rapid prototyping, it can lead to hard‑to‑debug import errors if misused. This shows structured reasoning, clear communication, and depth—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
