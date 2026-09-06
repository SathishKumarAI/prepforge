---
qid: ing_ad418b60bc__fp__local
question: 'Explain: Set environment variables first — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 386
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:56-05:00'
sources: []
---

**Why you must set environment variables first**

At the core of any AI‑evaluation pipeline is *configurability without code changes*.  
When a library like **Langwatch** or **Langfuse** launches, it expects to read a handful of keys (API tokens, endpoint URLs, model names) from the process’ environment. These values are not hard‑coded because:

1. **Separation of concerns** – the evaluation logic should never depend on deployment details.  
2. **Security through obscurity** – secrets stay out of source control and can be rotated without redeploying code.  
3. **Statelessness** – each run must start from a clean, deterministic state; environment variables are the canonical way to inject that state.

The *deeper principle* is **inversion of control (IoC)**: the library inverts the responsibility for configuration onto the host process. By reading `os.getenv()`, it becomes agnostic to where values come from—local shell, Docker secrets, or CI/CD vaults—making the same binary work across all environments.

**Non‑obvious insight:**  
Even if you set variables only once (e.g., in a `.env` file), they persist for the lifetime of the process. If your evaluation script spawns child processes (common with Langwatch’s parallel worker model), those children inherit the environment automatically—no need to re‑export. This implicit propagation is why missing one `export` line can silently break all downstream workers.

**Bottom line:**  
Set your variables first, because they are the *single source of truth* that keeps the evaluation engine both secure and portable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
