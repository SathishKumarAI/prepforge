---
qid: ing_9b86b077bd__think__local
question: What is the 3-2-1 rule for backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 424
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:21:30-05:00'
sources: []
---

**Thinking Process (Meta‑Guide)**  

1. **Clarify & Scope**  
   - *What* exactly is being asked? The “3‑2‑1 rule” in the context of backup and disaster recovery.  
   - *Assumptions*: The user likely wants a concise definition, not implementation details.  

2. **Identify Core Concept**  
   - Recognize that the 3‑2‑1 rule is a widely cited best practice for data protection: three copies, two media types, one off‑site location.  

3. **Step‑by‑Step Reasoning**  
   - *Recall*: The rule originates from ITIL/ISO standards and popularized by backup vendors.  
   - *Decompose*:  
     1. **Three copies** – original + at least two backups.  
     2. **Two media types** – e.g., disk and tape or SSD + cloud.  
     3. **One off‑site** – physically separate location (cloud, another building).  
   - *Check* that each component aligns with the definition.  

4. **Avoid Common Traps**  
   - Don’t conflate “3‑2‑1” with other backup ratios like “5‑3‑2”.  
   - Don’t assume it mandates specific storage hardware; focus on redundancy principles.  
   - Avoid over‑technical jargon if the user’s background is unclear.  

5. **Sanity‑Check & Communicate**  
   - Verify that the explanation covers all three elements and explains why each is critical (e.g., protection against data loss, media failure, site disasters).  
   - Present it succinctly: “Three copies, two media types, one off‑site location.”  

Follow this pattern for any technical rule or principle: define scope → recall core idea → break into components → watch for misinterpretation → confirm completeness before answering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
