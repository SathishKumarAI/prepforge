---
qid: ing_b0b7a9b713__faang__local
question: 'Explain: Availability — CAP Theorem: One of the Most Misunderstood Terms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 431
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:34:06-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain why *availability* is often mis‑interpreted in the context of the CAP theorem (Consistency, Availability, Partition tolerance). Confirm that they’re referring to *system availability* as “the probability a request receives a response”, not just uptime.  

**Approach**  
1. Define each CAP dimension.  
2. Show the trade‑off diagram.  
3. Highlight common misconceptions (e.g., “availability = 100 % uptime”).  
4. Illustrate with a real‑world example.  

**Depth**  
- **Consistency**: all nodes see the same data at the same time.  
- **Partition tolerance**: system keeps functioning even when network splits occur.  
- **Availability**: every request gets *some* response (success or failure) within a bounded time.  
  - Misunderstood as “never fail”, but CAP allows failures if they’re guaranteed to be *bounded*.  
  - In practice, many systems trade strict availability for stronger consistency during partitions.  
- Example: A key‑value store in a CDN may choose *CP* (consistency + partition tolerance), returning stale or error responses instead of guaranteeing an immediate reply, thus violating naive “availability”.  

**Edge cases**  
- Network latency spikes that mimic partitions.  
- Load balancers sending traffic to unhealthy nodes—still counts as availability if they return a response.  
- Systems that retry automatically: technically available, but user experience suffers.  

**Optimize & communicate**  
Wrap up by stressing that *availability* in CAP is about bounded responsiveness under partition, not 100 % uptime. Mention how modern architectures (e.g., Quorum reads/writes) balance these axes, and how you’d explain this to a non‑technical stakeholder: “We’re guaranteeing the system will always reply, but sometimes the data might be slightly out of date or the reply may be an error if we can’t sync across all replicas.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
