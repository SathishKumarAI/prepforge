---
qid: ing_34b2f6b9c1__faang__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 461
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:46:58-05:00'
sources: []
---

**CAP Theorem in the Context of a Distributed Version‑Control System (GitHub)**  

| **Clarify** |  
*We’re asked to explain CAP and relate it to GitHub’s design.*  
Key assumptions: we consider a globally replicated storage layer that serves millions of concurrent users, with write‑heavy operations (pushes/pulls) and strong consistency requirements for source code integrity.  

| **Approach** |  
1. Define Consistency, Availability, Partition tolerance.  
2. Map each to GitHub’s architecture (e.g., RDBMS + Redis cache).  
3. Show the trade‑off GitHub makes (CP vs AP) and why.  

| **Depth** |  
- **Consistency**: Every read sees the latest commit; Git objects are immutable, so once written they’re permanent—strong consistency is required to avoid diverging repositories.  
- **Availability**: Users must be able to pull/push even during transient failures; GitHub uses load balancers and multiple data centers for high uptime.  
- **Partition tolerance**: Network splits are inevitable at scale; GitHub tolerates them by routing traffic through a global CDN, but writes may temporarily block until the partition heals (eventual consistency for metadata).  

GitHub therefore opts for a **CP** configuration: it sacrifices some availability during severe partitions to guarantee that all replicas converge on the same commit history.  

| **Edge Cases** |  
- *Network split affecting a single region*: GitHub’s read‑replicas can still serve pulls, but pushes may be blocked until replication resumes.  
- *Concurrent conflicting pushes*: resolved via merge commits or pull requests—ensuring consistency at the cost of temporary unavailability for the conflicting branch.  

| **Optimize & Communicate** |  
Explain that adding a second layer (e.g., eventual‑consistency cache) could push GitHub toward AP, but would risk stale code views. Emphasize how CAP guides trade‑off decisions: we can’t have all three at once; choosing CP ensures developers never see corrupted histories. This structured reasoning mirrors the signal interviewers look for in FAANG system‑design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
