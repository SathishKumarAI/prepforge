---
qid: ing_dd12e0d726__fp__local
question: 'Explain: File metadata — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 470
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:14-05:00'
sources: []
---

**File‑metadata for a PyPI package**

A PyPI upload is not just a bunch of source files; it is an *information set* that tells the index and its consumers how to locate, verify and install the distribution.  
The metadata lives in two places:

| File | Purpose |
|------|---------|
| `setup.cfg` / `pyproject.toml` | Declarative build configuration – name, version, dependencies, entry‑points. These are *static* descriptors that the packaging tool (e.g., Poetry or setuptools) reads to generate the wheel and source‑tarball. |
| `METADATA` inside the wheel (`*.whl`) | The *runtime manifest*: a PEP 566 record of all files, their hashes, required Python tags, and the dependency graph. It is produced by the build system from the static descriptors and the actual file layout. |

Why this split?  
- **Separation of concerns**: build‑time configuration is independent of the runtime environment; it can be edited without rebuilding the wheel until a new version is released.
- **Integrity & reproducibility**: `METADATA` contains SHA‑256 digests for every file, so pip can verify that the wheel hasn’t been tampered with and that the exact files declared by the author are present.  
- **Declarative vs. procedural**: The static config is declarative (what you want), whereas the runtime metadata is procedural (how to get it). This mirrors the *optimization principle* of separating objective from constraints.

A non‑obvious insight: the `METADATA` file also encodes *Python tags* (`py3-none-any`, etc.). These tags are a compact representation of a *probabilistic compatibility matrix*: they say “this wheel will work on any interpreter ≥ 3.0” or “only on CPython 3.8+”. When pip resolves dependencies, it treats these tags as a likelihood function over target environments, selecting the wheel that maximizes expected install success. Thus, file metadata is not merely bookkeeping; it’s an information‑theoretic signal that guides deterministic yet probabilistic dependency resolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
