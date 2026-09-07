---
qid: vq_c3b0f54c00__aws__local
question: How do you handle data encryption in ADLS?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 387
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:04-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of on‑prem Hadoop logs to Azure Data Lake Storage (ADLS) Gen2 for a compliance‑heavy financial client. The data contained PII and had to meet SOC 2 and GDPR requirements, so encryption at rest and in transit were non‑negotiable.

**Action**  
1. **Ownership & Customer Obsession:** I mapped every column that could contain PII and wrote a data‑classification policy.  
2. **Dive Deep & Invent & Simplify:** Implemented *Azure Key Vault* integration with ADLS to manage customer‑managed keys (CMK).  
   - Used Azure Disk Encryption for the underlying VMs running Databricks, ensuring no plaintext ever existed on disk.  
   - Configured *HTTPS only* and enabled *Azure AD authentication* so that only service principals could read/write data.  
3. **Bias for Action & Deliver Results:** Automated key rollover every 90 days via Azure Automation Runbooks; set up alerts in Azure Monitor when a key was about to expire.  

**Result**  
- Reduced encryption‑key audit time from **5 days → 30 minutes** per month.  
- Achieved zero data‑leak incidents over two years, passing all quarterly SOC 2 audits with **0 findings**.  
- Cost savings of ~12% by reusing a single CMK across multiple storage accounts instead of per‑file keys.

**Bar‑raiser takeaways:**  
- Demonstrated end‑to‑end ownership and compliance depth.  
- Quantified impact (audit time, audit findings, cost).  
- Learned that automating key lifecycle is essential; manual rollover had caused a near‑miss in a test environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
