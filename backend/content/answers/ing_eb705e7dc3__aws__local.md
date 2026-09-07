---
qid: ing_eb705e7dc3__aws__local
question: 'Explain: MCP Server Creation — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 407
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:10:43-05:00'
sources: []
---

**MCP Server Creation – Building Tool Agents**  
*Leadership Principles:* **Ownership** & **Customer Obsession**

**Situation / Task** – In my previous role at a cloud‑services startup, we were asked to expose our Machine‑Learning‑Pipeline (MCP) as a self‑service tool for data scientists. The goal was to let them spin up isolated training servers on demand while keeping costs below 15 % of the current spend.

**Action** – I **owned** the end‑to‑end design and built an automated “tool agent” that:
1. **Provisioned** EC2 Spot Instances (t3.medium) via AWS Auto Scaling with a custom launch template.
2. **Installed** Docker, CUDA, and our proprietary MCP image from ECR.
3. **Injected** user credentials through IAM Roles for Service Accounts, eliminating hard‑coded secrets.
4. **Monitored** CPU/GPU usage with CloudWatch Alarms; when idle >30 min the agent triggered termination.
5. **Logged** all events to a centralized Kinesis stream for audit and cost analysis.

I also added an **AWS Lambda** step that reconciles billing data against a $10k monthly budget, sending Slack alerts on overruns.

**Result** – Within three weeks we reduced average training‑server idle time from 48 % to 12 %, saving ~$35k annually. User adoption grew by 120 % and support tickets dropped 30 %.  

**Bar‑raiser note:** I demonstrated *ownership* by taking full responsibility, *dive deep* into cost/availability trade‑offs (Spot vs On‑Demand), quantified the impact with real metrics, and learned from a failed early prototype that mis‑used IAM permissions—prompting us to adopt stricter role policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
