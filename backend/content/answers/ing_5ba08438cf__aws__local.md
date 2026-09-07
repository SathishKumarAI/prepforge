---
qid: ing_5ba08438cf__aws__local
question: Design the harness for an agent that makes multi-file changes from a natural-language
  task. How do you keep it from wrecking a codebase?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 411
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:25-05:00'
sources: []
---

**Situation** – I was tasked with building an AI‑powered “Code‑Change Agent” that could take a natural‑language request (e.g., *“Add pagination to the user list endpoint and update docs”*) and apply changes across multiple files without corrupting the repo.

**Task** – Design a safe harness: isolate the agent, enforce safety nets, and measure impact on code quality and CI/CD latency.

**Action**  
1. **Sandbox + Ownership** – Spin up an isolated EC2 instance per request (Amazon EC2 Spot for cost), mount the repository read‑only, and let the agent write to a temp branch only.  
2. **Static Analysis + Dive Deep** – Run CodeGuru Reviewer & ESLint before applying changes; require at least 90 % pass rate. If any rule fails, abort.  
3. **Incremental Diff & Review** – Generate a Git diff and push it as a pull request to CodeCommit. The PR triggers CodeBuild (AWS CodePipeline) that runs unit tests, integration tests, and a custom “semantic‑diff” script comparing API contracts.  
4. **Rollback + Bias for Action** – If any test fails or the PR is rejected after 3 reviewers, automatically delete the branch and notify the team via SNS.

**Result** – In production (10 k+ files), the agent processed 1,200 requests/month with a *0.2 %* merge failure rate vs. *4 %* baseline manual edits, and reduced average code‑review time from 3 h to 45 min. Cost per request stayed under $0.25 due to Spot usage.

**Learnings** – Ownership surfaced in the sandbox design; diving deep into static tools uncovered hidden lint issues early; quantifying merge success drove continuous improvement of safety checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
