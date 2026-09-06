---
qid: ing_cd38fce24e__fp__local
question: 'Explain: Q: A teammate followed a six-month-old LlamaIndex tutorial and
  it fails on import. Walk me through what happened and how you would fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 681
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:42-05:00'
sources: []
---

**Why the import blows up**

A *six‑month‑old* LlamaIndex tutorial was written against a particular snapshot of its dependency graph – Python 3.9, `llama-index==0.8.5`, and a set of transitive packages (`faiss-cpu`, `tiktoken`, etc.).  
When you import it now:

1. **Version drift** – the current environment has newer releases (e.g., `llama-index 0.10.x`), which changed public APIs.
2. **Transitive conflicts** – a newer `numpy` or `pandas` dropped a symbol that LlamaIndex still expects, so the import fails with an `ImportError` or `AttributeError`.
3. **Environment bleed** – if you’re not in a clean virtual environment, old compiled wheels (e.g., `faiss-cpu‑0.6.1‑cp310‑manylinux2014_x86_64.whl`) may still be imported.

These are classic *dependency constraint* failures: the package graph no longer satisfies the constraints encoded by the tutorial’s lockfile.

**How to fix it**

| Step | What to do | Why |
|------|------------|-----|
| 1. **Isolate** | `python -m venv .venv && source .venv/bin/activate` | Prevents global packages from leaking in. |
| 2. **Pin** | Create a `requirements.txt` matching the tutorial’s version, e.g. `llama-index==0.8.5\nfaiss-cpu==1.7.4\n...` | Ensures the exact API surface used by the code. |
| 3. **Install** | `pip install -r requirements.txt --no-cache-dir` | Guarantees fresh, matching wheels. |
| 4. **Verify** | Run a minimal script: `import llama_index; print(llama_index.__version__)` | Confirms the import works before proceeding. |
| 5. **Upgrade safely** | If you must use newer LlamaIndex, read its migration guide, update imports (`from llama_index.core import VectorStoreIndex`) and adjust API calls accordingly. | Aligns with the new public interface. |

**Non‑obvious insight**

Most people fix an `ImportError` by “upgrade everything.” The deeper principle is that *import time* is a **constraint satisfaction problem**: every package declares requirements on symbols of its peers. A single mismatched version can cascade into a full failure. By pinning the entire dependency graph (or using a lockfile like `pip‑freeze > requirements.txt`), you convert this dynamic, fragile system into a static, reproducible one—exactly what containerized deployments aim for.

---

*In short:* The tutorial fails because the current environment no longer satisfies its original dependency constraints. Recreate those constraints in an isolated virtualenv, pin the exact versions, and the import will succeed.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
