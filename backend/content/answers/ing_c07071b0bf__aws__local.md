---
qid: ing_c07071b0bf__aws__local
question: 'Explain: Strong consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 482
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:54-05:00'
sources: []
---

**Strong Consistency – A Design‑First Lens**

**Situation (S)**  
At my previous firm we launched a real‑time recommendation engine that served 5 M users/day. The model relied on user interaction logs; stale data meant the algorithm would recommend irrelevant items, hurting click‑through rates by ~12 %.  

**Task (T)**  
I had to guarantee that every read reflected the latest write so the ML pipeline could ingest fresh signals without manual cache invalidation.

**Action (A)**  
* **Design:** I chose Amazon DynamoDB with *Strongly Consistent Reads* and a single‑region deployment.  
* **AWS services:**  
  * **DynamoDB** – low‑latency, auto‑scaling, strong consistency out of the box.  
  * **Lambda** – to trigger model retraining on every write event via DynamoDB Streams.  
  * **S3 + Athena** – for batch analytics of historical logs.  
* **Trade‑offs:** Strong consistency adds ~2 ms read latency and limits us to one region, but we avoided eventual‑consistency pitfalls that would have required a complex “last‑write‑wins” reconciliation layer.  
* **Cost/Scalability:** Provisioned throughput of 10 k RCU/WCU kept the monthly bill at ~$1.2K while supporting peak traffic spikes; auto‑scaling handled 200% load in minutes.

**Result (R)**  
The click‑through rate rose from 7.8 % to **9.6 %** (+23 %) within a month, and we eliminated the “stale data” incident that had cost us $35K in lost revenue.  

---

### Leadership Principles Highlighted
* **Customer Obsession:** Delivered fresher recommendations → higher engagement.  
* **Ownership & Dive Deep:** I architected end‑to‑end consistency, quantified impact, and iterated on trade‑offs.  

A bar‑raiser would listen for this ownership depth, data‑driven results, and the ability to learn from a failed stale‑data scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
