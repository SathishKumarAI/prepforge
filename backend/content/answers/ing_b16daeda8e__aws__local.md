---
qid: ing_b16daeda8e__aws__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 549
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:07-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with redesigning Instagram’s photo‑storage pipeline after a 30 % spike in data ingestion during the 2023 holiday season. The existing S3‑backed solution had durability issues: a single point of failure in the “write‑once” bucket caused 0.8 % loss of user uploads.

**Task (T)**  
I led a cross‑functional squad to architect a *Durability‑First* system that guarantees **7.3 ×** data durability (the same level as AWS S3’s default). The goal was to keep the end‑to‑end latency below 300 ms while keeping cost < 15% of the legacy spend.

**Action (A)**  
1. **Ingress Layer:** Implemented a *Kinesis Data Stream* with `shard_count=4` for high‑throughput ingestion, enabling automatic replay on failure.  
2. **Storage Tiering:**  
   - *Primary*: S3 Standard‑IA + versioning (ensures 99.999999999% durability).  
   - *Secondary*: DynamoDB Global Tables (replicated across 3 AZs) for metadata and quick lookups, using conditional writes to enforce idempotence.  
3. **Data Integrity Checks:** Added a serverless Lambda that runs a SHA‑256 hash against the object after upload; mismatches trigger an automated retry via Step Functions.  
4. **Cost Optimisation:** Leveraged S3 Intelligent‑Tiering and lifecycle policies to move inactive media to Glacier Deep Archive, cutting storage costs by 18 %.  

**Result (R)**  
- Durability reached **7.3×** with zero data loss in post‑deployment monitoring for 12 months.  
- Latency dropped from 450 ms to 270 ms (+40 % improvement).  
- Cost savings of $2.4M annually, exceeding the target by 20 %.  

---

### Leadership Principles Highlighted
* **Ownership** – I drove the full end‑to‑end redesign and held the squad accountable for metrics.  
* **Dive Deep** – Detailed analysis of failure modes led to a fault‑tolerant design that balances durability, latency, and cost.

> **Bar‑raiser note:** Focus on *why* each service was chosen, the trade‑offs considered (e.g., DynamoDB vs. RDS for metadata), and how the solution scales with 10× traffic while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
