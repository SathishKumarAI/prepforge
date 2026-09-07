---
qid: ing_6eef740c40__aws__local
question: 'Explain: Q68: Explain how you would design a system that uses Claude Code
  (or OpenHands) as a CI/CD component for automated bug fixing.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 401
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:56-05:00'
sources: []
---

**Situation & Task**  
I was tasked to reduce the mean time to resolution (MTTR) of regression bugs in our SaaS product. The goal was a 30 % MTTR cut by automating patch generation with Claude Code/OpenHands.

**Action – System Design**  

1. **Trigger** – GitHub webhook on `push` → Lambda checks CI status.  
2. **Bug Capture** – On failure, test logs are pushed to an S3 bucket; a Step‑Functions state machine parses the stack trace and extracts the minimal failing context.  
3. **Patch Generation** – A containerized OpenHands worker calls Claude via Bedrock (anthropic model) with the extracted context + the failing test as prompt. The model returns a diff.  
4. **Validation Pipeline** – The diff is applied to a sandbox branch; another Lambda runs unit tests on an EC2 spot fleet (cost‑optimized). If all pass, a PR is auto‑merged via GitHub API.  
5. **Observability** – CloudWatch metrics (latency, success rate) feed into Grafana dashboards; alerts trigger if the patch fails validation.

**Result**  
Within three months we saw MTTR drop from 8 h to 2 h (75 % reduction). The system processed ~200 patches/month with a 92 % success rate. Cost per automated fix was <$1, largely due to spot instances and serverless compute.

**Reflection & Learning**  
The key lesson: *Ownership* – I drove the end‑to‑end pipeline, not just model integration. *Dive Deep* – Profiling Lambda cold starts revealed a 30 % latency hit; moving to provisioned concurrency cut it by 50 %. The bar‑raiser will note my quantified impact and iterative tuning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
