---
qid: ing_edda4cda41__faang__local
question: 'Explain: CP - consistency and partition tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 404
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:22-05:00'
sources: []
---

**Clarify**  
You’re asking about the *CAP theorem* for distributed systems, specifically why a system can be consistent (C) or partition‑tolerant (P), but not both when a network split occurs. I’ll assume “consistency” means *strict consistency* (all replicas see the same value immediately after an update) and that “partition tolerance” is the ability to keep operating when nodes cannot communicate.

**Approach**  
1. Define CAP components.  
2. Explain what happens during a partition.  
3. Show why a system must choose C or P.  
4. Illustrate with a simple read/write protocol.  

**Depth**  
- **Consistency (C)**: Every read returns the most recent write; all replicas are in sync.  
- **Partition tolerance (P)**: The system continues to accept requests even when some nodes are unreachable.  
During a network split, two sub‑clusters exist. If we insist on C, one cluster must block writes/reads until connectivity is restored—losing P. If we keep P and allow both clusters to serve traffic, they may diverge; reads could return stale data, violating C. The theorem states: *in the presence of a partition you can choose either consistency or availability, but not both.*

**Edge cases**  
- *Partial partitions*: some nodes reachable, others not—same trade‑off applies.  
- *Eventual consistency* relaxes C; systems like Dynamo accept it to keep P.  

**Optimize & communicate**  
When interviewing, highlight that real‑world designs often favor **AP** (availability + partition tolerance) with eventual consistency, then explain how a strict CP system would throttle operations during splits. Emphasize the decision matrix: business requirements → CAP choice → protocol design. This demonstrates clear reasoning and depth within the word limit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
