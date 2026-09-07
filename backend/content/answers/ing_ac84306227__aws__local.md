---
qid: ing_ac84306227__aws__local
question: 'Explain: Greedy (8 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:58-05:00'
sources: []
---

**Greedy (8 Problems) – Neetcode 150**

**Situation / Task**  
While leading a cross‑functional ML pipeline at my previous company, I was asked to refactor the feature‑selection step that ran nightly on 4 TB of raw data. The existing solution took 12 hrs and hit quota limits on our SageMaker training jobs.

**Approach (Technical)**  
I mapped each problem to a classic greedy strategy:  
1️⃣ *Activity Selection* – pick earliest finish, O(n log n).  
2️⃣ *Job Sequencing with Deadlines* – sort by profit, assign latest slot.  
3️⃣ *Minimum Number of Arrows* – sweep line over intervals.  
4️⃣ *Gas Station* – track cumulative fuel and reset on deficit.  
5️⃣ *Jump Game II* – maintain current/max reach in one pass.  
6️⃣ *Max Consecutive Ones III* – sliding window with at most k zeros.  
7️⃣ *Paint House II* – DP + greedy tie‑break on cheapest color.  
8️⃣ *Minimum Cost to Connect Sticks* – priority queue (min‑heap) merging smallest sticks.

**Result**  
Implemented a unified microservice in Python using AWS Lambda and Step Functions, leveraging S3 for input streams and DynamoDB for intermediate state. Execution time dropped from 12 hrs to **2 hrs** (80% reduction), cost fell by **$1,200/month**, and we eliminated the SageMaker quota issue.

**Leadership Principles**  
- *Customer Obsession*: Delivered faster, cheaper ML insights to product managers.  
- *Ownership*: Took end‑to‑end responsibility for refactor, tested in staging before production roll‑out.  

**Bar‑raiser focus** – I demonstrated deep dive into each greedy problem, quantified performance gains, and learned that a single generic implementation can solve multiple domain problems efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
