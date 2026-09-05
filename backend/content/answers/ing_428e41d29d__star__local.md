---
qid: ing_428e41d29d__star__local
question: 'Explain: Per-PR eval budget — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:50-05:00'
sources: []
---

**Situation**  
At my previous company we had a monorepo of 120 micro‑services, each deployed via GitHub Actions. Every pull request triggered a full integration test suite that ran for ~30 min, costing us roughly $300 per PR on our cloud CI budget.

**Task**  
I was tasked with cutting the cost of nightly builds by 40 % without sacrificing quality, while ensuring any risky changes still got a full evaluation before merge.

**Action**  
I introduced a “per‑PR eval budget” system: each PR is first evaluated against a lightweight static analysis and unit‑test pass that must finish in under 2 min. If it passes, the CI pipeline proceeds to a gated stage—an “Eval Gated CICD” step—that runs the full integration suite but only for PRs that touch critical services or exceed a complexity threshold (measured by lines changed). We used GitHub’s `workflow_run` event to trigger the gated job and leveraged matrix strategies to parallelize across services. I also set up automated cost dashboards in Grafana so we could see real‑time spend per PR.

**Result**  
The average CI runtime dropped from 30 min to 7 min, cutting our monthly CI bill by ~45 % ($12k saved). The gated approach still caught all regressions (zero merge failures in production over six months). I learned that smart budgeting and conditional gating can dramatically improve resource efficiency while maintaining robust quality gates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
