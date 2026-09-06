---
qid: ing_2c015aaa10__think__local
question: 'Explain: Um, so today, I''m going to talk — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 405
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:34:45-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- The user wants an explanation of “Google I/O 2009 – Google Wave: Under the hood.”  
- Assume they’re looking for a high‑level overview, not a deep dive into code.  
- Treat it as a historical tech talk rather than a research paper.

**2. Choose a mental model**  
Use the *“technology stack + design goals”* framework:  
1) What problem was Google Wave solving?  
2) How is its architecture layered (network, protocol, client)?  
3) What key innovations made it “under the hood”?  
4) Why did it ultimately fail?

**3. Reason step‑by‑step**  
- Start with context: 2009, Google’s push for real‑time collaboration.  
- Describe the core idea: a distributed, eventually‑consistent data model (the “wave”).  
- Explain the transport layer: WebSocket‑like protocol, binary message framing, and use of XMPP/JSON.  
- Highlight the client side: JavaScript “Wavelets,” state diffing, and optimistic UI updates.  
- Note performance tricks: delta compression, batching, caching, and offline sync.  
- Finish with lessons learned (security, API design, scalability).

**4. Avoid common traps**  
- Don’t confuse Google Wave with Google Docs or Google+ features.  
- Skip over obscure implementation details that aren’t part of the “under the hood” narrative.  
- Don’t assume the reader knows WebSocket internals; keep it approachable.

**5. Sanity‑check & communicate**  
- Re‑read the outline to ensure each bullet addresses a unique layer.  
- Use simple analogies (e.g., wave as a shared whiteboard).  
- Deliver in concise, numbered points so the user can easily follow and recall the structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
