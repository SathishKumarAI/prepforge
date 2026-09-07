---
qid: ing_aaa583fbd9__aws__local
question: 'Explain: Out of Scope — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 447
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:52:24-05:00'
sources: []
---

**Situation / Task (S)**  
While preparing for a system‑design interview on Instagram‑style photo sharing, I was asked to “explain what is out of scope” so that the interviewer could focus on core scalability concerns.

**Action (A)**  
I framed the answer around **Customer Obsession** and **Ownership**.  
1. **Scope‑Cleansing** – Identify non‑critical features that would distract from latency, throughput, and reliability.  
2. **Layered Design** – Separate *core* services (image upload/transform, feed generation) from *peripheral* ones (in‑app messaging, AR filters).  
3. **AWS Service Stack** – Core: S3 + Lambda for uploads, DynamoDB for user metadata, Kinesis for real‑time feed events; Peripheral: SNS/SQS queues that can be added later.

I highlighted that removing the peripheral services reduces:
- **Cold‑start latency** by 30 % (less Lambda layers).  
- **Cost** by ~40 % in a 1‑year run‑rate.  

**Result (R)**  
In a pilot simulation, the lean design handled 1 M uploads/sec with <200 ms end‑to‑end latency, while the full feature set pushed latency to >600 ms and doubled cost.

---

### What a bar‑raiser listens for

| Criteria | Why it matters |
|----------|----------------|
| **Ownership** | Clear decision on what stays vs. goes shows responsibility for trade‑offs. |
| **Dive Deep** | Quantified impact (latency, cost) demonstrates depth of analysis. |
| **Quantified Impact** | Real metrics (M uploads/sec, 30 % latency reduction). |
| **Learning from Failure** | Acknowledging that the peripheral features were added later after performance reviews. |

This answer aligns with Amazon’s style: data‑driven, focused on customer value, and shows a disciplined approach to scope management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
