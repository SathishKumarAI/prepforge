---
qid: ing_546db2f376__faang__local
question: 'Explain: nbdev: use Jupyter Notebooks for everything'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 596
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:00:15-05:00'
sources: []
---

**Clarify**  
You’re asking how *nbdev* lets you build a full Python package entirely from Jupyter notebooks—writing code, tests, docs and packaging in one place. I’ll assume the audience knows basic notebook workflow but not nbdev’s specifics.

**Approach**  
1. Highlight the core idea: notebooks as source files (`*.ipynb`).  
2. Explain the tooling pipeline (export → `*.py`, run tests, build docs).  
3. Show how it integrates with GitHub/CI and standard packaging tools.

**Depth**  

| Step | What happens | Tools |
|------|--------------|-------|
| **Notebook authoring** | Cells marked with `#|` directives control export (e.g., `#| default_exp mymodule`). Code cells become module functions/classes; markdown becomes docstrings. | Jupyter, nbdev magic (`%load_ext nbdev`) |
| **Export** | `nbdev_export` converts notebooks → `.py` files in a `src/` tree, preserving docstrings and type hints. | nbdev CLI |
| **Testing** | Inline tests via `#| test` cells or separate `tests/*.ipynb`. `nbdev_test_nbs` runs them; results feed into CI (GitHub Actions). | pytest, nbdev |
| **Documentation** | `nbdev_docs` builds Sphinx docs from notebooks’ markdown & docstrings. Output lives in `/docs/`. | Sphinx + nbdev |
| **Packaging** | Standard `setup.py`/`pyproject.toml` read the generated `src/`; `pip install .` installs the package. | setuptools, Poetry |
| **CI/CD** | A GitHub Actions workflow can run `nbdev_export`, tests, docs build, and publish to PyPI or a private registry. | GitHub Actions |

*Complexity*: Export is linear in notebook size; test runs are O(n) over test cells. Memory overhead is modest because notebooks are parsed once per CI run.

**Edge Cases**  
- **Notebook ordering**: nbdev enforces import order via `#| export` directives; circular imports break the build.  
- **Large binary data**: Jupyter stores raw data in JSON, so heavy datasets inflate `.ipynb`; best to link or store externally.  
- **Non‑Python kernels**: Only Python kernels work with nbdev’s magic.

**Optimize & Communicate**  
To improve speed, cache exported modules and run tests only on changed notebooks (git diff). Explain trade‑offs: you gain a single source of truth but must manage notebook size and CI cost. Conclude that nbdev turns notebooks into first‑class software artifacts, streamlining development, testing, documentation, and packaging in one unified workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
