---
qid: ing_47ac370e3c__star__local
question: What is considered an IT disaster? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:58-05:00'
sources: []
---

**Situation:**  
At a fintech startup, our customer‑facing API was hosted on a single GCP region. During a weekend maintenance window, a misconfigured Terraform script accidentally deleted the entire Cloud SQL instance holding transactional data. The outage lasted 4 hours and left us unable to process payments.

**Task:**  
I had to restore service with minimal downtime, recover all lost transactions, and prove that our disaster‑recovery strategy could withstand such an event without manual intervention.

**Action:**  
First, I triggered the automated Cloud SQL point‑in‑time recovery using a backup from 6 hours prior, which restored the instance in under 30 minutes. Then I set up a multi‑region replica and enabled cross‑region failover so that future incidents would not hinge on a single region. To validate the plan, I ran a full DR drill: I simulated a regional outage, verified automatic traffic routing to the standby, and confirmed that our CI/CD pipeline could redeploy services within 15 minutes using Terraform and Cloud Deployment Manager. I also added automated alerts in Stackdriver and documented the playbook in Confluence.

**Result:**  
Recovery time dropped from 4 hours to under 30 minutes, and we avoided any data loss. Post‑incident metrics showed a 90% reduction in mean time to recovery (MTTR). The exercise reinforced that an IT disaster is any event that causes prolonged service disruption or data loss, and that robust Disaster Recovery on GCP requires automated backups, multi‑region failover, and regular drills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
