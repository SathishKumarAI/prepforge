---
qid: ing_d2c97d3564__faang__local
question: 'Explain: Linting the Code — GitHub - trekhleb/learn-python: \ud83d\udcda
  Playground and cheatsheet for learning Python. Collection of Python scripts that
  are split by topics and contain code examples with explanations. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 446
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:28-05:00'
sources: []
---

**Clarify**  
You’re asking how to “lint” the *trekhleb/learn‑python* repo on GitHub—i.e., run a static code analysis tool to catch style bugs, dead code, and potential runtime errors across its many topic‑segmented scripts.  
Assumptions: Python 3.10+, the repo is cloned locally, and we want CI‑ready linting.

**Approach**  
1. Pick a linter (flake8 + plugins, or pylint).  
2. Configure it with `pyproject.toml` or `.flake8`.  
3. Add an *ignore* list for common “good‑practice” false positives in tutorials (e.g., `E402` for imports after docstrings).  
4. Run lint locally (`flake8 .`) and add a GitHub Actions workflow to enforce it on PRs.

**Depth**  
- **Configuration example** (`pyproject.toml`):  
  ```toml
  [tool.flake8]
  max-line-length = 88
  ignore = ["E203", "W503"]
  select = ["C90","E,F,W,T4,B"]
  per-file-ignores =
      __init__.py: F401  # unused imports allowed in packages
  ```
- **Complexity**: O(n) over all files; negligible runtime.  
- **Trade‑offs**: Too strict a config can flag tutorial‑specific patterns (e.g., intentional `print` for demos).  

**Edge Cases**  
- Files with dynamic code (`exec`, `eval`) may trigger false positives.  
- Jupyter notebooks exported as `.py` may contain `%matplotlib inline`; lint will error unless ignored.

**Optimize & Communicate**  
Add a pre‑commit hook so developers see issues before pushing, reducing CI failures. In the PR template, note “linting errors must be resolved” to surface the expectation early. This systematic setup aligns with FAANG’s emphasis on clean code, automated quality gates, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
