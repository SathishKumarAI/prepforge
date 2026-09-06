---
qid: vq_35a2f8b828__faang__local
question: Do we need exactly-once processing guarantees?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 394
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:43-05:00'
sources: []
---

**Clarify**  
We’re deciding whether our streaming pipeline must provide *exactly‑once* semantics (each event is processed once, no duplicates or losses).  
Assumptions to confirm:  

1. What data sources are we ingesting? (e.g., Kafka, Pub/Sub)  
2. Is idempotence of downstream systems guaranteed?  
3. Are failures transient (network blips) or catastrophic (node crash)?  
4. How costly is duplicate processing versus re‑processing after a loss?

**Approach**  
1. Map the fault‑tolerance model of the source.  
2. Evaluate downstream idempotency and state persistence.  
3. Quantify the cost/impact of duplicates vs. missed records.  
4. Decide on the minimal guarantees required.

**Depth**  
- **Exactly‑once** requires transactional commits from source → processor → sink (e.g., Kafka `transactional.id`, Flink checkpointing).  
- If downstream is idempotent, *at‑least‑once* plus deduplication suffices; this removes the need for two‑phase commits.  
- For non‑idempotent sinks or regulatory requirements, we must use source‑side offsets + sink checkpoints to avoid re‑processing.

**Edge Cases**  
- Source crashes mid‑transaction → potential data loss if not replayed.  
- Network partitions may cause duplicate offset commits.  
- High throughput could make transactional overhead prohibitive.

**Optimize & Communicate**  
Start with *at‑least‑once* + deduplication; benchmark duplicates impact. If duplication cost is high or compliance mandates, upgrade to *exactly‑once* using source‑sink transactions and consistent checkpointing. Explain trade‑offs: higher latency and complexity vs. guarantee level, ensuring interviewers see clear reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
