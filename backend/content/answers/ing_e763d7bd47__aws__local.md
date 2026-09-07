---
qid: ing_e763d7bd47__aws__local
question: 'Explain: Tree & Graph Traversals (DFS/BFS) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 490
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:01:57-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build a real‑time fraud detection engine that needed to traverse user transaction graphs (≈ 10⁶ nodes) for each new payment. The goal was to flag suspicious patterns within 200 ms while keeping AWS bill < $5k/month.

**Action – Technical Design**  
*Traversal Engine*: A stateless Lambda function orchestrates a **BFS** on the graph stored in DynamoDB (global tables). For deep DFS‑style risk scoring we use an EC2 Auto‑Scaling group running a custom Go service that streams adjacency lists from S3 into an in‑memory **GraphX** cluster (Spark) for heavy analytics.  
*Data Flow*: New transactions trigger EventBridge → Lambda → update DynamoDB + push to Kinesis Data Streams. The stream feeds the Spark job every 30 s for batch risk scoring, while Lambda handles on‑demand BFS for instant checks.  
*Scalability & Availability*: Lambda scales to 10k concurrent invocations; EC2 uses Spot Instances with On-Demand fallback for high availability. DynamoDB global tables provide multi‑region read latency < 20 ms.  
*Cost*: Roughly $1,200/month on Lambda + $800/EC2 + $500/DynamoDB + $300/Kinesis = $2.8k; well below target.

**Result**  
The system reduced false positives by **42%** and increased detection accuracy from 78 % to 94 %. Response time averaged **150 ms**, meeting SLA.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a faster, more accurate fraud tool that protected users’ funds.  
- **Ownership / Dive Deep**: Built end‑to‑end pipeline, tuned AWS services, and iterated on cost/latency trade‑offs until metrics hit target.  

Bar‑raisers look for ownership, depth of analysis (e.g., why choose Lambda vs EC2), quantified impact (42% reduction), and learning from failures (initial 300 ms latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
