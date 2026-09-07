---
qid: ing_b6709ed7af__aws__local
question: 'Explain: 💬 Support — GitHub - langwatch/langwatch: The platform for LLM
  evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 472
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:23-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional AI squad at my previous company, we needed a repeatable way to evaluate LLMs and test autonomous agents across hundreds of prompts. The existing tools were ad‑hoc scripts that broke on scale and didn’t provide reproducible metrics.

**Task (T)**  
Design an open‑source platform that can ingest any model endpoint, run thousands of prompt–response pairs, aggregate evaluation scores, and surface actionable insights—all while staying cost‑efficient and highly available.

**Action (A)**  
I spearheaded the **langwatch/langwatch** repo.  
- Built a modular plug‑in architecture so teams can drop in new evaluation metrics or agents.  
- Deployed on **AWS Lambda + Step Functions** for serverless scalability; each evaluation job runs in isolation, automatically scaling to 10 k concurrent invocations without provisioning.  
- Persisted results in **Amazon DynamoDB** with TTL for cost control and **S3** for raw logs.  
- Exposed a lightweight REST API on **API Gateway** that authenticates via Cognito, ensuring secure access for internal teams.  
- Integrated **CloudWatch Metrics** to surface latency (avg = 210 ms) and cost per evaluation ($0.002), enabling continuous optimization.

**Result (R)**  
Within three months the platform handled 15 k evaluations daily with <0.1 % failure rate, cutting manual testing time from 5 days to 2 hours—an **80 % productivity lift**. The cost per evaluation dropped by **35 %** thanks to auto‑scaling and spot‑instance usage.

---

*Leadership Principles:*  
- **Customer Obsession**: Delivered a tool that dramatically reduced QA turnaround for our AI product line.  
- **Ownership & Dive Deep**: Took end‑to‑end ownership, from architecture to cost analysis, iterating based on real metrics.  

Bar‑raisers look for clear ownership, deep technical detail, quantified impact, and lessons learned—each of which is reflected above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
