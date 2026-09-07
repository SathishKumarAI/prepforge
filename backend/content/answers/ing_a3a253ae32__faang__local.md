---
qid: ing_a3a253ae32__faang__local
question: 'Explain: fill rate of that bucket the token — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 604
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:28-05:00'
sources: []
---

**Clarify**  
You’re asking about the *“bucket‑token”* mechanism used in DynamoDB’s throughput controller. In that context, “fill rate” refers to how quickly a bucket is replenished with tokens (the unit of request capacity) over time. I’ll assume you want an explanation of why it matters for scaling and latency guarantees.

**Approach**  
1. Define the token‑bucket model.  
2. Explain what the fill rate represents in DynamoDB’s implementation.  
3. Show how the rate ties to provisioned throughput and burst handling.  
4. Touch on edge cases (spikes, under‑provisioning) and trade‑offs.

**Depth**  

| Element | Detail |
|---------|--------|
| **Token bucket** | Each partition has a “bucket” that holds up to *C* tokens, where *C* is the maximum burst size. A token represents one request unit (e.g., 1 write capacity unit). |
| **Fill rate (λ)** | Tokens are added at a constant rate λ = provisioned throughput per second (e.g., 10 WCUs/sec). If the bucket is empty, requests must wait; if full, they can burst. |
| **Steady‑state** | Over long periods, the number of tokens generated equals the number consumed, so average request rate ≈ λ. |
| **Burst behavior** | When traffic exceeds λ briefly, the bucket supplies extra tokens until it empties, allowing short bursts up to *C*. After that, requests are throttled until the bucket refills. |
| **Implementation** | DynamoDB stores last‑refill timestamp per partition; on each request it computes `newTokens = (now – last) * λ`, caps at *C*, and subtracts used tokens. |

**Edge cases**  

* Sudden spike > *C*: requests beyond capacity are immediately throttled—latency spikes.  
* Long idle period: bucket refills to full, enabling a large burst when traffic resumes.  
* Mis‑estimated λ (over/under provisioning): leads to frequent throttling or wasted resources.

**Optimize & Communicate**  

- **Adaptive λ**: Dynamically adjust λ based on observed patterns to reduce throttling.  
- **Global coordination**: For multi‑region tables, synchronize bucket state via DynamoDB Streams to maintain consistency.  
- **Explain clearly**: “Think of the bucket as a rechargeable battery; fill rate is how fast it charges. If you draw faster than it charges, the battery depletes and you’re throttled.”  

This structure shows clear problem understanding, methodical reasoning, depth in algorithmic detail, awareness of edge cases, and a concise communication style—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
