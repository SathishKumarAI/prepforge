---
qid: ing_7e1f0861be__star__local
question: 'Explain: Billing — Cloud Computing without Containers | Cloudflare Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:57-05:00'
sources: []
---

**Situation:**  
In my previous role at a fintech startup, we were migrating our legacy monolithic application to the public cloud to support a projected 3× user growth over the next year. Our internal finance team was concerned that without container orchestration, we’d lose visibility into resource usage and end up with unpredictable bills.

**Task:**  
I needed to design a cost‑allocation framework that mapped individual micro‑services (still running as separate VMs) to their cloud spend, enabling accurate chargeback to product teams while keeping the architecture simple enough for our DevOps team to maintain.

**Action:**  
First, I deployed AWS Cost Explorer and enabled detailed billing reports. Then I implemented per‑service tagging (environment, feature flag, owner) on each EC2 instance and RDS database. Using Terraform modules, I automated tag propagation during provisioning. Next, I set up CloudWatch custom metrics to track CPU, memory, and network IO per tag, feeding those into a Grafana dashboard that visualized real‑time cost per service. Finally, I wrote a Lambda function that ran nightly, aggregated the tagged usage, applied our agreed‑upon rate cards, and pushed a CSV to each product owner’s Slack channel.

**Result:**  
Within two months we reduced monthly cloud spend by 18% through targeted scaling of underutilized services. The chargeback model increased cross‑team accountability; each feature team cut their infrastructure budget by ~25% while meeting SLA targets. I learned that even without containers, disciplined tagging and automated cost dashboards can provide the transparency needed for efficient cloud budgeting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
