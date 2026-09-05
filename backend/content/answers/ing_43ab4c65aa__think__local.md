---
qid: ing_43ab4c65aa__think__local
question: 'Explain: Consistency patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 446
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:04:51-05:00'
sources: []
---

**1. Clarify what “consistency patterns” means in this context**  
- Assume the user wants a high‑level explanation of consistency models/patterns used when designing large‑scale distributed systems (e.g., those discussed in *System Design Primer*).  
- State that we’ll cover the main categories: strong, eventual, causal, session, and monotonic consistency, plus patterns like read‑your‑writes, write‑skew prevention, and quorum voting.

**2. Adopt a mental model of “data replication & coordination”**  
- Think of each pattern as a trade‑off between *availability* (CAP theorem), *latency*, and *consistency*.  
- Use the CAP triangle as an anchor: place each pattern along the axes to show its position.

**3. Step‑by‑step reasoning toward the answer**  
1. Define consistency in distributed systems.  
2. List the five classic consistency models, briefly describing each.  
3. For each model, give a concrete “pattern” or design technique that enforces it (e.g., two‑phase commit for strong consistency).  
4. Illustrate with a short example: read‑your‑writes using session guarantees in a key‑value store.  
5. Conclude by summarizing the trade‑offs and when to pick each pattern.

**4. Common traps to avoid**  
- Mixing up *consistency* with *durability*.  
- Overgeneralizing “eventual consistency” as always low latency; it can still require coordination for conflict resolution.  
- Forgetting that many real systems combine patterns (e.g., eventual + read‑your‑writes).

**5. Sanity‑check & communicate out loud**  
- Verify each pattern’s placement on the CAP diagram matches textbook definitions.  
- Rephrase the explanation in plain language: “Strong consistency means every read sees the latest write, but you might have to wait for all replicas.”  
- Ask a quick self‑quiz: “If I need low latency and can tolerate stale reads, which pattern fits?” (Answer: eventual or causal).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
