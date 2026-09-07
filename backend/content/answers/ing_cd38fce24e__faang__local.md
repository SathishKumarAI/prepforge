---
qid: ing_cd38fce24e__faang__local
question: 'Explain: Q: A teammate followed a six-month-old LlamaIndex tutorial and
  it fails on import. Walk me through what happened and how you would fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 508
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:37:33-05:00'
sources: []
---

**Clarify**  
The issue is an `ImportError` when a teammate runs a six‑month‑old LlamaIndex (now *LlamaHub*) example. Likely the library has moved, renamed modules, or changed its API. We need to confirm:  

- Which exact import fails (`from llamaindex import ...` or submodule)?  
- The runtime environment (Python 3.10+, pip version).  
- The installed package version (`pip show llama-index`).  

**Approach**  
1. Reproduce the error locally.  
2. Inspect the current LlamaIndex documentation for breaking changes.  
3. Update or pin the dependency to a compatible version.  
4. Refactor imports if module names changed.  

**Depth**  
Recent releases (≥ 0.9) split core into `llama-index` and sub‑packages (`llama-index-embeddings`, etc.). The old import `from llamaindex import Document` now throws because the top‑level package was renamed to `llama_index`. Additionally, many classes moved under `llama_index.llms`, `llama_index.embeddings`, etc. Fix:  

```bash
pip install --upgrade "llama-index>=0.9,<1.0"
```

Then adjust code:

```python
from llama_index import Document  # still works for core
# or, if using embeddings:
from llama_index.embeddings import OpenAIEmbedding
```

If the tutorial uses `LLMPredictor`, update to `llama_index.llms.OpenAI`.  

**Edge Cases**  
- Mixing old and new imports causes circular dependencies.  
- In CI, cached wheels may still hold the legacy package.  
- The code might rely on deprecated methods (`load_from_json` vs `from_dict`).  

Test: run unit tests after each change; use a minimal script that imports all referenced classes.

**Optimize & Communicate**  
Explain to the teammate that LlamaIndex’s API is now modular, so pinning a specific minor version (e.g., 0.9.4) guarantees compatibility with the tutorial. Suggest adding a `requirements.txt` entry:

```text
llama-index==0.9.4
```

This eliminates future import failures and keeps the environment reproducible. Conclude by documenting the migration steps in the repo’s README for future reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
