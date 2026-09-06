---
qid: ing_feca3dc88b__think__local
question: 'Explain: So there''s a Wave office hour earlier — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 461
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:50:16-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation of *Google Wave* as presented in a 2009 Google I/O talk titled “Under the hood.”  
- Assume they’re familiar with basic ML concepts but not the internals of Google Wave.  
- Keep the answer concise, focusing on architecture and key design choices rather than a full deep dive.

**2️⃣ Adopt a mental model: “Layered System Architecture”**  
- **Presentation layer** (client UI).  
- **Communication protocol** (XMPP/Real‑Time API).  
- **Core data store & consistency engine** (Wavelet storage, CRDTs).  
- **Service orchestration** (Wave servers, persistence, security).

**3️⃣ Step‑by‑step reasoning**  

1. *Describe the problem*: real‑time collaboration needs low latency, eventual consistency, and conflict resolution.  
2. *Show how Wave solves it*: uses a replicated data structure called a “wavelet”; each wavelet is a CRDT that merges changes automatically.  
3. *Explain the protocol*: clients send operations over XMPP; servers apply them via a “Wave Server” that guarantees ordering with vector clocks or Lamport timestamps.  
4. *Highlight persistence & scalability*: Wave data is sharded across multiple storage nodes; metadata drives routing, and the system can grow horizontally.  
5. *Mention ML tie‑ins*: while not core to Wave, Google uses ML for spam filtering and recommendation of collaborators.

**4️⃣ Common pitfalls to avoid**  

- Don’t overemphasize “machine learning”; it’s peripheral here.  
- Avoid jargon like “CRDT” without a quick definition.  
- Resist the urge to detail every API call; focus on high‑level flow.  

**5️⃣ Sanity check & verbalization**  

- Run through a simple use‑case: Alice edits a paragraph, Bob sees it instantly—explain how operations propagate and merge.  
- Confirm that each layer’s responsibility is clear.  
- End with why this architecture mattered for Google’s broader ML ecosystem (e.g., data quality from collaborative inputs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
