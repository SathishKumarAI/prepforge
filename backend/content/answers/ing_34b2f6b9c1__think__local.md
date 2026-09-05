---
qid: ing_34b2f6b9c1__think__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 422
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:30:54-05:00'
sources: []
---

**1. Clarify & Assume**  
- Identify the core concept: CAP theorem (Consistency, Availability, Partition tolerance).  
- Assume the audience knows basic distributed‑systems terms but may be new to CAP.  
- Note that the question references a GitHub repo; we’ll treat it as context rather than source material.

**2. Mental Model / Framework**  
- Use the “CAP triangle” visualization: three vertices, only two can be satisfied simultaneously.  
- Map each property to concrete system behaviours (e.g., consistency = all nodes see same data).  
- Recall real‑world examples (Cassandra → AP, MySQL Cluster → CP) to anchor abstract ideas.

**3. Step‑by‑Step Reasoning**  
1. Define each term clearly.  
2. Explain the trade‑off: why you can’t have all three in a partitioned network.  
3. Illustrate with a simple two‑node example under network split.  
4. Show how different systems choose which pair to prioritize, referencing the repo’s design‑primer snippets if relevant.  
5. End with a quick recap of the triangle and practical takeaways.

**4. Common Traps to Avoid**  
- Mixing up “availability” (system up) vs. “consistency” (data correctness).  
- Forgetting that partition tolerance is mandatory in distributed systems; CAP really means you can’t have all three, not that you might drop one arbitrarily.  
- Over‑simplifying: CAP doesn’t dictate the *how*, only the *what* of trade‑offs.

**5. Sanity‑Check & Communicate**  
- Re‑state the theorem in plain language: “In a split network, pick two out of three guarantees.”  
- Verify that each property’s definition is consistent with examples.  
- Summarize the answer aloud (or mentally) to ensure it flows logically and stays within a few minutes—ideal for an interview setting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
