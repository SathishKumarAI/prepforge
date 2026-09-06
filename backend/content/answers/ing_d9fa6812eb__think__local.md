---
qid: ing_d9fa6812eb__think__local
question: 'Explain: Installing with Kuzu Support — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 617
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:20:48-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**

- *Goal:* Explain how to install the `graphiti` package with optional **Kuzu** (a column‑store DB) support.
- *Assumptions:*  
  - The user has a recent Python environment (`3.8+`).  
  - They have `git`, `pip`, and a C++ compiler installed.  
  - They understand that Kuzu is optional; the core library works without it.

**2️⃣ Mental model / framework**

Treat installation as two parts: (a) *base* install of `graphiti` from PyPI or source, (b) *extra* build step to compile and link against the Kuzu C++ libraries. Use a **feature flag** (`kuzu`) that PyPI exposes via `extras_require`.

**3️⃣ Step‑by‑step reasoning**

1. **Clone the repo**  
   ```bash
   git clone https://github.com/getzep/graphiti.git
   cd graphiti
   ```
2. **Create a virtual environment (optional but recommended)**  
   ```bash
   python -m venv .venv && source .venv/bin/activate
   ```
3. **Install dependencies** – the `setup.py` declares `kuzu` as an optional dependency.  
   *If you want Kuzu support:*  
   ```bash
   pip install "graphiti[kuzu]"
   ```  
   This pulls in the `kuzu-python` wheel and triggers a CMake build that links against the system’s Kuzu installation.
4. **If installing from source** (for latest features):  
   ```bash
   pip install -e .[kuzu]
   ```
5. **Ensure Kuzu is available** – either pre‑installed on the machine or bundled via `conda`/`apt`. If missing, the build will fail; consult the repo’s docs for binary packages.

**4️⃣ Common traps to avoid**

- Forgetting the brackets: `pip install graphiti[kuzu]` (not `graphiti-kuzu`).  
- Using an older Python that can’t compile C++ extensions.  
- Missing system libraries (`libz`, `protobuf`, etc.) required by Kuzu; the build logs will point this out.  
- Trying to import `graphiti.kuzu` before installation completes.

**5️⃣ Sanity‑check & verbal communication**

After installation, run:

```python
import graphiti
print(graphiti.__version__)
import graphiti.kuzu  # should succeed if Kuzu was enabled
```

If the import fails, re‑run the install with `-e .[kuzu]` or check the build logs for missing dependencies.  

By following these steps you’ll have a fully functional `graphiti` installation that can interact with a Kuzu knowledge‑graph backend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
