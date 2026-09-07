---
qid: ing_6156c9c00d__aws__local
question: Half our application code is now written by AI tools. How does your job
  change - and how do you use those tools yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 404
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:42-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
When our team migrated 50 % of the codebase to ChatGPT‑generated snippets, I realized my role shifted from *writer* to *validator and optimizer*. The customer’s uptime SLA was 99.95 %, so any AI‑produced defect could directly hurt revenue.

**Action (Dive Deep + Bias for Action)**  
1. **Automated Review Pipeline** – built a CI job that runs `semgrep` + `SonarQube` on every PR, flagging style and security gaps introduced by AI.  
2. **Unit‑Test Amplification** – used AWS CodeBuild to generate 200 + additional tests via GPT-4 prompt “write edge‑case tests for this function”.  
3. **Performance Benchmarking** – deployed the new modules on an Amazon ECS cluster with Fargate Spot, measured latency vs legacy code (average 15 ms faster).  
4. **Rollback Strategy** – implemented a blue/green deployment in AWS CodeDeploy; if AI‑code hit >1 % error rate, traffic automatically switched back.

**Result (Deliver Results)**  
- Reduced defect density from 3.2 defects/KLOC to 0.8 defects/KLOC within two sprints.  
- Cut manual code review time by 40 %, freeing engineers for feature work.  
- Maintained SLA; no customer incidents in the first quarter post‑migration.

**Learning & Trade‑offs (Invent & Simplify)**  
I learned that AI accelerates iteration but requires rigorous guardrails. Future plans: integrate a “confidence score” from the LLM and trigger human review only when below 0.7, balancing speed with safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
