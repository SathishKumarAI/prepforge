---
qid: ing_0936778c7a__aws__local
question: 'Explain: Local setup 💻 — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 425
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:46:54-05:00'
sources: []
---

**Situation / Task**  
When I joined a startup focused on LLM benchmarking, the team had a monolithic local repo (`langwatch/langwatch`) that ran tests on multiple models and agents. The repo was bloated, CI failed 30 % of the time, and developers struggled to run experiments locally.

**Action**  
I took full ownership:  
1. **Modularize** – split the repo into three self‑contained services (`core`, `agent‑runner`, `metrics`). Each had its own Docker image and a single responsibility.  
2. **Infrastructure as Code** – wrote Terraform modules to spin up an EKS cluster with spot nodes, an Aurora Serverless database for results, and S3 buckets for artifacts.  
3. **CI/CD Pipeline** – replaced the flaky GitHub Actions workflow with CodePipeline that triggers on PRs, runs unit tests in a Fargate task (cost ≈ $0.04/hr), and deploys to a canary environment.  
4. **Observability** – added CloudWatch Logs & X-Ray traces for every agent run; set up dashboards showing latency, throughput, and failure rates.

**Result**  
- Local dev time dropped from 45 min to <5 min (90 % reduction).  
- CI success rate improved from 70 % to 99.8 %.  
- Cost of running nightly benchmarks fell by 60 % due to spot usage and serverless scaling.  
- The new architecture enabled us to onboard two additional LLMs in under a week.

**Reflection (Bar‑raiser)**  
I demonstrated **Ownership** by leading the full redesign, **Dive Deep** with performance metrics, and **Bias for Action** through rapid iteration. I also documented a failure case where a misconfigured spot node caused data loss; we added automated state checks to prevent recurrence. This approach aligns with Amazon’s principles of *Customer Obsession* (fast, reliable experiments) and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
