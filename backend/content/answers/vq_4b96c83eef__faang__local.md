---
qid: vq_4b96c83eef__faang__local
question: How do you optimize storage cost in Azure Data Lake Storage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 526
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:25-05:00'
sources: []
---

**Clarify**  
We’re asked how to lower the bill for an Azure Data Lake Storage (ADLS) Gen2 account while still meeting performance and compliance needs. I’d confirm:  

* What data types are stored (raw logs, processed tables, archives)?  
* Are access patterns read‑heavy, write‑heavy, or both?  
* How long does each dataset need to be retained?  
* Do we have regulatory requirements for encryption, audit, or geo‑redundancy?

**Approach**  
1. Classify data into *hot*, *cool*, and *archive* tiers.  
2. Leverage hierarchical namespace (HNS) for efficient folder‑based lifecycle policies.  
3. Use Azure Blob Lifecycle Management to move blobs automatically between tiers or delete them.  
4. Enable **Blob Storage encryption** at rest (default) and transport security.  
5. Opt for **geo‑redundant storage (GRS)** only where required; otherwise use locally redundant storage (LRS).  
6. Combine with **Azure Data Lake Analytics** to process data in place, reducing the need to copy or duplicate.

**Depth**  
*Hot tier* (LRS) is cheapest and fastest for active data. *Cool tier* (also LRS) costs ~1/5 of hot but has 10× retrieval latency; ideal for infrequently accessed logs. *Archive tier* (~1/20 of cool) is best for long‑term retention (e.g., compliance). Lifecycle rules can move blobs after N days, e.g., 30→60→90→delete.  
Encryption and compression (gzip or Parquet) further cut storage bytes. Costs scale with I/O; moving data to cheaper tiers reduces read/write charges.

**Edge Cases**  
*Real‑time analytics*: Moving hot data to cool may break latency SLAs—test query performance after tier change.  
*Regulatory retention*: Some jurisdictions require immutable logs; ensure **Azure Blob Versioning** or **Immutable Storage (WORM)** is enabled before deleting.  

**Optimize & Communicate**  
Explain the trade‑off: cheaper tiers mean higher access costs and longer retrieval times. I’d show a cost model comparing scenarios, highlight that combining lifecycle policies with data compression can yield 30–50% savings, and reassure that security defaults remain intact. This structured reasoning demonstrates clear problem framing, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
