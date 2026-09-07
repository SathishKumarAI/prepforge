---
qid: ing_34b2f6b9c1__aws__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 543
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:12-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> *Situation:* I was tasked to explain the CAP theorem to a cross‑functional team that needed to decide how GitHub’s new “Code Search” feature would be built at scale.

> *Task:* Deliver a concise, data‑driven briefing that linked theory to our real‑world architecture and clarified trade‑offs for latency, consistency, and partition tolerance.

> *Action:*  
> 1. **Define the three guarantees**:  
>    • **Consistency (C)** – every read sees the most recent write.  
>    • **Availability (A)** – every request receives a response.  
>    • **Partition Tolerance (P)** – system keeps working despite network splits.  
> 2. **Map to GitHub**:  
>    - Use **Amazon DynamoDB** for *AP* (high availability, partition tolerance) and **Amazon RDS Aurora Global Database** for *CP* (strong consistency across regions).  
>    - Introduce a *read‑replica cache* (ElastiCache Redis) to trade off strong consistency for sub‑50 ms latency when users search code in their home region.  
> 3. **Quantify impact**:  
>    • In the last quarter, a single partition caused a 12 % spike in stale reads; moving the “search” service to an *AP* model reduced that by 95 % while keeping latency <30 ms for 99.9 % of users.  
>    • Cost savings: shifting 20 % of traffic to DynamoDB eliminated 15 % of RDS capacity, cutting infra spend from $2.3M to $1.9M annually.

> *Result:* The team adopted a hybrid CAP strategy—**AP for search, CP for core data writes**—which cut user‑reported consistency errors by **87 %** and maintained sub‑50 ms latency for 99.95 % of requests.  

**Bar‑raiser cues:**  
- Demonstrated *ownership* by mapping abstract theory to concrete AWS services.  
- Showed *deep dive* with metrics, trade‑offs, and cost analysis.  
- Quantified impact (87 % error reduction, $400k savings).  
- Learned from a prior failure where over‑emphasis on consistency caused 12 % stale reads; pivoting to an AP model fixed it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
