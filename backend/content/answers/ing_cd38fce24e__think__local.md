---
qid: ing_cd38fce24e__think__local
question: 'Explain: Q: A teammate followed a six-month-old LlamaIndex tutorial and
  it fails on import. Walk me through what happened and how you would fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 211
output_tokens: 602
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:30:03-05:00'
sources: []
---

**1️⃣ Clarify first & state assumptions**

- **What exactly fails?** Is it an `ImportError`, syntax error, or runtime crash?
- **Environment details:** Python version, OS, virtualenv, package versions.
- **Exact import line(s)** that break (e.g., `from llama_index import ...`).
- Assume the tutorial is outdated: LlamaIndex has been renamed to *LangChain*‑based `llama-index` and its API changed.

**2️⃣ Mental model / framework**

Treat this as a *dependency version mismatch* problem.  
Use the classic “diagnose, isolate, fix” cycle:

1. **Diagnose:** Reproduce error → read traceback → locate root cause.  
2. **Isolate:** Check installed package (`pip show llama-index`), compare to docs.  
3. **Fix:** Update or downgrade packages, adjust import syntax.

**3️⃣ Step‑by‑step reasoning**

1. Run the failing script; note the exact exception message.  
2. Verify the `llama-index` version:  
   ```bash
   pip show llama-index
   ```
3. Look up that version’s docs (e.g., v0.6.x) and see its import paths.  
4. If the tutorial uses an old name like `from llama_index.core import ...`, but your package is newer, adjust imports to match current API (`from llama_index import ...` or `from llama_index.llama import ...`).  
5. If the installed version is too new for the tutorial code, pin a compatible release:
   ```bash
   pip install "llama-index==0.6.1"
   ```
6. Re‑run and confirm success.

**4️⃣ Common traps & wrong turns**

- **Assuming “import error” means missing package:** It might be an API change.
- **Reinstalling the latest package expecting backward compatibility:** New releases often break old code.
- **Ignoring virtual environments:** System Python may have a different version installed.
- **Skipping the traceback details:** They reveal whether it’s `ModuleNotFoundError` or `AttributeError`.

**5️⃣ Sanity‑check & communicate**

- After fixing, run a minimal import test (`python -c "import llama_index; print(llama_index.__version__)"`).  
- Explain to the teammate: “We’re on version X, which changed its API. Let’s pin to Y or update the code accordingly.”  
- Suggest checking the official repo’s *CHANGELOG* for migration guides.  

This structured approach turns a confusing import failure into a reproducible debugging workflow that can be reused for other dependency mismatches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
