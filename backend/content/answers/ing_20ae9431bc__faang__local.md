---
qid: ing_20ae9431bc__faang__local
question: 'Explain: Do Not Ignore Mismatches — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 376
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:38-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why a design should *not* ignore checksum mismatches in distributed ML pipelines.  
Assumptions: data is streamed from storage → compute nodes, checksums are computed on both sides, and the system tolerates transient network failures but must guarantee data integrity for training.

**Approach**  
1. Detect mismatch via CRC/MD5 at consumer.  
2. Log, alert, and trigger a retry or fetch from an alternate source.  
3. If retries fail, quarantine the shard and surface it to operators.  
4. Use versioned checkpoints so that downstream models are not trained on corrupted data.

**Depth**  
- **Detection**: O(n) over payload; cheap compared to ML compute.  
- **Retry logic**: exponential back‑off + circuit breaker to avoid cascading failures.  
- **Quarantine policy**: store failed shards in a “bad‑data” bucket, tag with failure reason for later audit.  
- **Impact on training**: re‑train only the affected part of the model; use incremental checkpointing to reduce recomputation.

**Edge Cases**  
- *Transient checksum errors*: avoid infinite loops by limiting retries.  
- *Corrupted metadata*: fallback to secondary checksum (e.g., SHA‑256).  
- *Large files*: stream checksum to keep memory low.  

**Optimize & Communicate**  
Explain that ignoring mismatches risks silent data corruption, leading to biased models and costly rollbacks. Emphasize the trade‑off: a small overhead in latency vs. massive cost of incorrect predictions. Convey this by walking through a failure scenario, showing how the retry/quarantine pipeline preserves system integrity while keeping MTTR low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
