---
qid: ing_eee9838e22__think__local
question: 'Explain: 2.3 Partition Tolerance — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 494
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:47:43-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
- Ask what level of depth is needed (high‑level overview vs. deep math).  
- Assume the reader knows basic distributed systems but not CAP specifics.  
- Note that “partition tolerance” is a property, not a metric to be maximized.

**2. Adopt a mental model: the CAP triangle**  
- Picture the theorem as a triangle with vertices *Consistency*, *Availability*, *Partition Tolerance*.  
- Remember the rule: *In the presence of a network partition you can choose at most two sides.*

**3. Step‑by‑step reasoning**  
1. Define each corner:  
   - **Consistency (C)** – all nodes see the same data at the same time.  
   - **Availability (A)** – every request receives a response, even if some nodes are down.  
   - **Partition tolerance (P)** – system keeps working when network splits occur.  
2. Explain why P is *non‑negotiable*: partitions happen in any real distributed system; ignoring them kills the system.  
3. Show the trade‑off:  
   - With C + A you sacrifice P → “CAP=CA” (e.g., a single‑node DB).  
   - With C + P you sacrifice A → “CAP=CP” (e.g., strongly‑consistent replicated store that may block on partitions).  
   - With A + P you sacrifice C → “CAP=AP” (e.g., eventual consistency stores like Dynamo).  
4. Use a concrete example (key‑value store) to illustrate each choice.

**4. Common traps to avoid**  
- Don’t say “you can’t have all three”; instead stress that *P is always required*.  
- Avoid overloading the reader with math; keep focus on intuition.  
- Don’t mix up consistency models—distinguish strong vs. eventual.  

**5. Sanity‑check & communicate**  
- Verify that every statement maps back to the triangle diagram.  
- End with a quick recap: “Partition tolerance is mandatory; you trade off either consistency or availability depending on your system’s goals.”  
- Offer a short quiz question (e.g., “If a network splits, which two properties can you keep?”) to reinforce understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
