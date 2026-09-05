---
qid: ing_9e880d0e9c__star__local
question: 'Explain: That''s why we have this directory called'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:08-05:00'
sources: []
---

**Situation:**  
At my last role, our data‑science team was building a real‑time recommendation engine for an e‑commerce platform. The codebase had grown to 300 K lines of Python and C++ across six developers, and every time we added a new feature the build scripts would fail because the import paths were tangled.

**Task:**  
I was tasked with refactoring the project structure so that new models could be dropped in, tested, and deployed without breaking existing pipelines, while keeping CI/CD fast (< 5 min).

**Action:**  
I designed a modular “ml” directory hierarchy: `ml/` contained three sub‑packages—`data`, `features`, and `models`. Each package had an `__init__.py` that exposed only the public API. I introduced a `config.yaml` at the root to centralize hyperparameters, using Hydra for dynamic overrides. For model persistence I switched from pickle to ONNX, adding a conversion step in CI so every commit produced a lightweight runtime artifact. I also added unit tests per sub‑module and a linting rule that prevented imports outside `ml/`.

**Result:**  
After the restructure, import errors dropped by 92 %, build time fell from 12 min to 4 min, and we could roll out new recommendation models in under an hour. The clear directory layout also reduced onboarding time for new hires by 50 %. I learned that a disciplined file‑system structure is as critical to ML success as the algorithm itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
