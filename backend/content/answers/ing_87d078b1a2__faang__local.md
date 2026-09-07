---
qid: ing_87d078b1a2__faang__local
question: 'Explain: Optional Environment Variables — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 446
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:00:00-05:00'
sources: []
---

**Optional Environment Variables – Why and How?**

| Section | What I’ll Cover |
|---------|----------------|
| **Clarify** | *Problem:* In a GitHub‑hosted ML pipeline we often need configuration (API keys, DB URLs) but want to avoid hard‑coding them. Optional env vars let us fall back to defaults when the variable isn’t set. Assume the repo uses Docker/CI and may run locally or on Cloud CI. |
| **Approach** | 1. Define a clear naming convention (`GRAPHITI_API_KEY`, `GRAPHITI_DB_URL`). <br>2. In code, use `os.getenv('VAR', default_value)` to supply sensible defaults (e.g., local SQLite). <br>3. Add validation: if required vars are missing raise an error; otherwise log a warning that the default will be used. |
| **Depth** | *Implementation:* In Python, wrap env access in a `Config` class. Use type hints and Pydantic for stricter validation when the variable exists. For Docker, expose defaults via `ENV` instructions but override with `-e` at runtime. Complexity: O(1) lookup; no extra cost. Trade‑off: Defaults may mask misconfiguration until runtime – mitigated by explicit logging. |
| **Edge Cases** | • Variable set to an empty string → treat as unset. <br>• Wrong data type (string instead of int) for numeric defaults → Pydantic catches it. <br>• Running in CI without secrets → pipeline fails early if critical vars missing. |
| **Optimize & Communicate** | *Improvements:* Centralize config in a `.env` file for local dev; use GitHub Secrets for CI to avoid leaks. Narrate the design: “We’re keeping sensitive data out of code, allowing seamless local testing with fallbacks while enforcing strict checks in production.” This showcases clear problem framing, methodical solution, and awareness of security best practices—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
