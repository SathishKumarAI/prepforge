---
qid: ing_7ad4493a41__fp__local
question: How would you build an execution-based eval for a code-generation feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 615
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:04-05:00'
sources: []
---

## Why an execution‑based evaluator is essential

A code‑generation model does not simply output tokens; it promises *behaviour*.  
If the goal is functional correctness, we must test that behaviour in the same
environment the user will run it. Static checks (syntax, style) miss bugs that only surface when data flows through the program.

The evaluator therefore **must** satisfy two requirements:

1. **Determinism** – each run should produce a reproducible result so that
   we can compare outputs and compute metrics.
2. **Safety & isolation** – generated code may be malicious or buggy; it must not compromise the host system.

From these constraints we derive a minimal architecture:

| Layer | Purpose | Implementation |
|-------|---------|----------------|
| *Sandbox* | Isolate process, limit resources (CPU, memory, time) | Docker/Firecracker + seccomp; run each snippet in its own container. |
| *Input pipeline* | Feed deterministic test cases to the code | Pre‑defined fixtures or property‑based generators; feed via stdin or API call. |
| *Execution harness* | Run the snippet and capture stdout/stderr, exit status | Use a lightweight runtime wrapper (`python - <<'EOF'\n...EOF`) that redirects streams to temporary files. |
| *Result extractor* | Parse output into a canonical form | JSON‑serialise stdout; normalize whitespace; optionally compute hashes for large outputs. |
| *Metric calculator* | Compare against expected results | Exact match, fuzzy diff (e.g., Levenshtein), or domain‑specific checks (numeric tolerance). |

### Non‑obvious insight

**The evaluation problem is itself a form of *controlled randomness***: the test cases must be rich enough to exercise edge behaviours but limited so that the sandbox’s resource budget remains predictable. A common pitfall is to generate too many diverse inputs, causing the evaluator to run for hours and skewing the training signal. The solution is to *anchor* each evaluation on a **minimal sufficient set** of inputs derived from static analysis of the generated code (e.g., infer required arguments from function signatures) and then augment with property‑based random values only where the signature is underconstrained.

### Putting it together

```python
def run_eval(code, tests):
    # 1. spin up sandbox
    container = start_container()
    try:
        for inp in tests:
            out = container.exec(['python', '-c', code], input=inp,
                                 timeout=TIME_LIMIT)
            if out.returncode != 0: return False
            if not compare(out.stdout, expected(inp)): return False
        return True
    finally:
        container.stop()
```

This pipeline guarantees deterministic, safe, and informative feedback for every generated snippet, turning raw token sequences into verifiable programs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
