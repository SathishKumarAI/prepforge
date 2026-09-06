---
qid: ing_4f34e99ef2__fp__local
question: 'Explain: II. Dependencies — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 439
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:53:41-05:00'
sources: []
---

### II. Dependencies – The 12‑Factor App

**The problem it solves**  
When a service runs on one machine (development, staging, production) the libraries it uses may differ: different OS packages, system libraries, or even compiler versions. A build that works locally can fail in CI or on a cloud instance because the runtime environment silently changes the dependency tree.  

**Why it must work this way**  
A *dependency* is any external component (a gem, npm package, shared library) that the application needs to function. In a 12‑factor app you declare **all** of them in a manifest (`Gemfile`, `requirements.txt`, `package.json`), then lock their exact versions with a lockfile (`Gemfile.lock`, `Pipfile.lock`, `yarn.lock`).  
During deployment, the platform installs *exactly* those versions. The result is:

1. **Reproducible builds** – every environment receives the same code‑plus‑dependencies bundle.  
2. **Isolation** – no hidden global packages or system libs can interfere.  
3. **Immutable deployments** – a new release is a fresh image; you never “upgrade” an in‑place dependency on a running server.

This pattern aligns with the deeper principle of *deterministic systems*: if the inputs (source, lockfile) are fixed, the output (runtime environment) is also fixed.  

**Non‑obvious insight**  
People often think a lockfile is merely a convenience for developers. In fact, it is a **security boundary**: by pinning versions you avoid subtle bugs or vulnerabilities that might creep in if an upstream package updates automatically. Thus, dependencies are not just a technical detail—they’re the guardrail that keeps the app’s behavior stable across all stages of the deployment pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
