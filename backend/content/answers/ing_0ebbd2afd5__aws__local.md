---
qid: ing_0ebbd2afd5__aws__local
question: 'Explain: Binary Search Trees (BSTs): — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 487
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:53-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

**Situation:**  
At my previous role I led a feature that exposed user‑segment analytics via a REST API. The backend stored millions of records in an in‑memory data structure and needed sub‑millisecond query latency for “top‑N” lookups.

**Task:**  
I chose to implement a Binary Search Tree (BST) as the core index because it offers O(log n) search, insertion, and deletion when balanced. The challenge was ensuring it stayed performant under heavy write churn while keeping memory footprint low.

**Action:**  
1. **Design** – I implemented an *AVL* self‑balancing BST in Go, wrapping nodes with atomic pointers for lock‑free reads.  
2. **AWS services** – Deployed the service on **Amazon ECS Fargate** (no server management) and used **Elasticache Redis** as a hot cache layer to avoid hitting the tree for frequent queries.  
3. **Scalability & Availability** – The Fargate task was autoscaled based on CPU (>70 %) with a *2×* replica factor, giving 99.999% uptime. I added CloudWatch metrics (latency, cache hit ratio) and set up alarms to auto‑scale Redis shards.  
4. **Cost** – By keeping the BST in memory (~8 MB per 1M nodes) and offloading hot paths to Redis, we reduced EC2 spend by 35 % versus a MySQL fallback.

**Result:**  
Query latency dropped from 120 ms to 18 ms (6× faster), cache hit ratio climbed to 92 %, and overall feature cost fell by $1.2K/month. The team adopted this pattern for all real‑time analytics modules, improving customer satisfaction scores by 12 pts in Q4.

**Bar‑raiser notes:**  
- Demonstrated ownership: full end‑to‑end delivery.  
- Dive deep: balanced algorithmic choice with operational realities.  
- Quantified impact and cost savings.  
- Learned from an earlier failure when a naïve BST caused O(n) degradation during bulk inserts; switched to AVL to maintain guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
