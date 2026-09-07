---
qid: ing_98285f3514__aws__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 418
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:35-05:00'
sources: []
---

**Situation & Task**  
During a summer internship at a fintech startup, I was tasked with designing an algorithm to cluster transaction graphs for fraud detection. The core requirement was to build a *Minimum Spanning Tree* (MST) over millions of nodes so that we could identify low‑weight edges that represented suspicious activity.

**Action – Technical Design**  
I chose **Kruskal’s algorithm** because it scales linearly with the number of edges and is easy to parallelize. I implemented an edge list in S3, used **AWS Glue** to run a Spark job that sorted the edges (O(E log E)), and streamed the result into **Amazon Neptune** for graph storage. The Union‑Find data structure was persisted via **DynamoDB** with optimistic locking to guarantee consistency across distributed workers.

- *Scalability*: Sorting in parallel reduced runtime from 12 hrs to <30 min on an EMR cluster.
- *Availability*: S3 + Glue are multi‑AZ; Neptune offers automatic failover.
- *Cost*: Spot instances for Glue and a single DB instance kept spend under $200/day.

**Result**  
The MST allowed us to flag 1.8× more fraudulent transactions with a false‑positive rate of only 0.4 %. The algorithm now runs nightly, delivering insights in real time.

**Reflection – Leadership Principles**  
*Customer Obsession*: Delivered a solution that directly reduced losses for merchants.  
*Ownership & Dive Deep*: I took full ownership of the data pipeline and debugged edge‑case failures (e.g., duplicate edges) that initially caused 12 % error rates, learning to validate input schemas early.  

Bar‑raisers will notice my end‑to‑end ownership, quantified impact, deep technical dive, and iterative improvement mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
