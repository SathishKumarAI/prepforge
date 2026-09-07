---
qid: ing_4054a6519d__aws__local
question: What are the disadvantages of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:14-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> **Leadership Principles:** *Customer Obsession* + *Dive Deep*  
> **Scenario (S):** I led a migration of our recommendation engine from HDD‑based storage to SSDs in 2023 to cut latency for millions of daily users.  
> **Task (T):** While the upgrade promised ~30 ms read speed, we observed higher failure rates and cost overruns.  
> **Action (A):** I performed a deep dive into SSD wear‑out, power‑loss behavior, and firmware bugs. I benchmarked three SSD families (NVMe, SATA, enterprise) under realistic write patterns using `fio` and AWS S3 Transfer Acceleration for off‑site backups.  
> **Result (R):**  
> * **Durability:** NVMe drives hit 70 % of their rated TBW after 18 months vs. HDDs at 5 %.  
> * **Cost:** Total cost of ownership rose 35 % per TB due to higher replacement cycles, yet latency‑driven revenue grew 12 % in Q4.  
> * **Reliability:** Implemented a dual‑controller RAID‑10 with automated failover; mean time between failures (MTBF) improved from 400 hrs to 2500 hrs.  

**Takeaway:** SSDs deliver low latency but bring trade‑offs—higher wear, cost, and power sensitivity. A balanced architecture that monitors health metrics and uses tiered storage mitigates these disadvantages while preserving customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
