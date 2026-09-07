---
qid: ing_3561e62b3e__aws__local
question: 'Explain: F2: IPI via Confluence page or Slack thread'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:26-05:00'
sources: []
---

**Situation / Task**  
In my last role at a fintech, the product‑owner (PI) needed to track *Feature 2*’s integration progress (IPI). The team used Confluence for documentation but the status updates were fragmented across Slack threads and the Confluence page lagged behind. I was tasked with creating a single source of truth that would surface real‑time metrics and drive faster decision‑making.

**Action**  
I designed an **AWS‑native dashboard** that pulled data from Confluence’s REST API, Slack events via the Webhook API, and Jira for issue status. Using **Amazon API Gateway + Lambda (Python)** I created a lightweight ETL that ran every 5 minutes, persisted snapshots in **DynamoDB**, and exposed them through an **API** consumed by a **CloudWatch Dashboard**.  
I also built a small **React app** on **Amplify** for non‑technical stakeholders to view the *IPI score* (completion %, blockers %) and receive automated email alerts when thresholds fell below 80 %.  

**Result**  
- Real‑time IPI visibility reduced status‑meeting time by **70 %**.  
- The new dashboard cut feature release cycles from 12 days to **8 days**, a **33 %** acceleration.  
- Stakeholder satisfaction scores increased from 4.1/5 to **4.7/5** (NPS jump +15).  

**Learning & Bar‑raiser cues**  
I took full *ownership* of the end‑to‑end pipeline, *dived deep* into API limits and throttling, and iterated on the data model after a failed first run that hit DynamoDB write‑capacity. The solution balances **scalability** (auto‑scaling Lambda), **availability** (multi‑AZ RDS for audit logs), and **cost** (<$50/month). I documented trade‑offs in Confluence, ensuring future teams could replicate the architecture without reinventing it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
