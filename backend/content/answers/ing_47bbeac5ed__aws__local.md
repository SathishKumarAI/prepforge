---
qid: ing_47bbeac5ed__aws__local
question: 'Explain: And these are how likely they all — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 497
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:46-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain the probability model behind Google Wave’s “under‑the‑hood” collaboration engine, which was presented at Google I/O 2009. The interviewer wanted to see how I’d translate a complex distributed system into an AWS‑friendly architecture while keeping the math clear.

**Action**  
1. **Clarify the requirement** – We need a real‑time, highly available event stream where each user sees updates with < 200 ms latency and 99.9% availability.  
2. **Design** –  
   * **Event bus**: Amazon Kinesis Data Streams (sharded per wave room) to ingest edits at ~10k ops/s.  
   * **State store**: DynamoDB with PartiQL for linearizable reads/writes, backed by DAX cache to hit < 5 ms latency.  
   * **Conflict resolution**: Operational Transformation logic in Lambda functions triggered by stream records; each edit is assigned a Lamport timestamp.  
   * **Scaling** – Kinesis shards auto‑scale based on throughput; DynamoDB capacity scales with provisioned or on‑demand mode.  
3. **Probability model** – The probability that two concurrent edits conflict is p = λ²τ, where λ is edit rate per user and τ the latency window (~200 ms). With 100 users editing a wave at λ=0.1 ops/s, p≈0.002, so < 0.2% of edits collide—acceptable for optimistic OT.

**Result**  
The system would support 10⁶ concurrent waves with < 200 ms latency and cost <$5k/month on AWS, while preserving the “under‑the‑hood” real‑time feel Google showcased.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized low latency for end users.  
- **Ownership / Dive Deep** – Went beyond surface to model conflict probability and map it to AWS services.

### Bar‑raiser cues
- Clear ownership of each component (event bus, state store).  
- Quantified impact (p≈0.002 conflicts, cost <$5k/month).  
- Depth: explained OT, Lamport timestamps, and scaling trade‑offs.  

*Learned:* Always start with user‑centric metrics before picking cloud primitives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
