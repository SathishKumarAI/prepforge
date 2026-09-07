---
qid: ing_80f8d4167b__faang__local
question: 'Explain: Built Distribution — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 508
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:51-05:00'
sources: []
---

**Clarify**  
We’re asked what a *built distribution* is for the package **pydantic‑ai** on PyPI, and why it matters when installing or publishing.

**Approach**  
1. Define “built distribution” in packaging terms.  
2. Explain the two common formats (sdist & wheel).  
3. Describe how `pip` selects a build, and what metadata the built package contains.  
4. Touch on the role of `pyproject.toml`, `setup.cfg`, and the build backend.

**Depth**  
A *built distribution* is the artifact produced by running a build backend (e.g., Poetry, Flit, setuptools) that turns source code into something installable.  
- **sdist (source distribution)**: a tarball (`pydantic_ai‑0.1.0.tar.gz`) containing the raw source files and metadata. `pip` can install it by running the build on the target machine.  
- **wheel** (`pydantic_ai‑0.1.0‑py3-none-any.whl`): a pre‑compiled, platform‑agnostic package that contains compiled extensions (if any) and ready‑to‑install metadata. Wheels are preferred because they skip build time and avoid missing compiler toolchains.

On PyPI, the built distribution is uploaded via `twine upload dist/*`. The file names encode the version, Python tags (`py3`), ABI (`none` for pure Python), and platform (`any`). When a user runs `pip install pydantic-ai`, pip downloads the wheel that best matches their interpreter; if none exists, it falls back to the sdist.

**Edge Cases**  
- No compatible wheel → pip builds from sdist; fails on systems lacking required build tools.  
- Multiple wheels for different Python versions – ensure all are uploaded.  
- Wrong metadata (e.g., missing `requires_python`) can block installation.

**Optimize & Communicate**  
To improve reliability, always publish both a source distribution and at least one wheel per supported Python version. Use `python -m build` to generate them automatically. Explain this process in documentation so maintainers know that the “built distribution” on PyPI is not just the code but a ready‑to‑install artifact tailored for end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
