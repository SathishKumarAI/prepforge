---
qid: ing_f7c4cc1b71__aws__local
question: 'Explain: Tier 2: Episodic Memory (L2) — Memory Architectures'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 453
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:51-05:00'
sources: []
---

**Scenario:**  
While leading the *AI‑Assist* product line, I was tasked with redesigning the **Tier 2 Episodic Memory (L2)** layer to support real‑time recommendation at scale.

| **Situation** | Our L1 embeddings served 50 M users but latency hit 200 ms under peak traffic. |
|---------------|--------------------------------------------------------------------------|
| **Task**      | Build a distributed episodic memory that stores user interaction histories and retrieves relevant episodes in < 30 ms while scaling to 500 k queries/sec. |
| **Action**    | • Adopted **DynamoDB Global Tables** for low‑latency, multi‑region reads.  
• Implemented an **in‑memory cache layer (ElastiCache‑Redis)** with LRU eviction and per‑user sharding.  
• Built a **Lambda‑based event pipeline** to ingest interactions into DynamoDB and publish updates to Kinesis Data Streams for downstream ML models.  
• Used **AWS Step Functions** to orchestrate cache warm‑ups during off‑peak hours, reducing cold‑start costs by 35 %. |
| **Result**    | Latency dropped from 200 ms to 28 ms (−86 %). Throughput increased to 550 k QPS with 99.9 % availability. Cost per request fell 22 % compared to the monolithic solution. |

**Leadership Principles:**  
- *Customer Obsession* – delivering instant, personalized recommendations that keep engagement above 70 %.  
- *Ownership* – owning the full data‑flow from ingestion to retrieval and iterating based on real‑world metrics.

**Bar‑raiser focus:**  
- Deep dive into DynamoDB partitioning and cache eviction logic.  
- Quantified impact (latency, cost).  
- Learned that a hybrid storage strategy—persistent DB + in‑memory cache—offers the best trade‑off for episodic recall at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
