---
qid: ing_471c037d3e__faang__local
question: 'Explain: Use environment variables — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 468
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:32-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise rundown of nine Docker best practices that involve *environment variables*. We’ll assume the goal is secure, maintainable containers for production workloads.

**Approach**  
1. List the nine practices in order of impact.  
2. For each, explain why it matters and how to implement it.  
3. Keep language tight (≈20 words per point) to hit 160–240 words total.

**Depth**

| # | Practice | Why & How |
|---|----------|-----------|
|1|Use `.env` files for local dev only|Keep secrets out of source; load via `docker-compose --env-file`. |
|2|Prefer explicit `ENV` in Dockerfile over defaults|Explicitness avoids surprises in CI pipelines. |
|3|Avoid hard‑coding credentials|Pass via Docker secrets or external vault (e.g., HashiCorp Vault). |
|4|Use `ARG` for build‑time variables only|Keep them unset at runtime; prevents accidental exposure. |
|5|Leverage multi‑stage builds|Only expose env vars needed in the final image. |
|6|Set defaults with `ENV VAR=${VAR:-default}`|Graceful fallback, but audit defaults to avoid leaks. |
|7|Restrict container user privileges|Run as non‑root; environment variables cannot elevate permissions. |
|8|Validate env vars at entrypoint|Shell script checks presence/types before launching the app. |
|9|Rotate secrets via orchestration tools|Kubernetes `Secret` objects or Docker Swarm secrets auto‑rotate. |

**Edge Cases**  
- Empty strings vs unset values can trigger defaults incorrectly.  
- Overriding `.env` with CI environment may leak sensitive data if not masked.  
- Multi‑stage build env vars leaking into intermediate layers.

**Optimize & Communicate**  
Explain that combining these practices reduces attack surface, simplifies CI/CD, and ensures reproducible builds. Highlight trade‑offs: using Docker secrets adds orchestration overhead but yields the highest security. Conclude by stressing continuous monitoring of environment variable leaks in container registries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
