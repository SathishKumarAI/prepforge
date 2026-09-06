---
qid: ing_cd20654017__fp__local
question: 'Explain: But you''re not going to find eight — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 369
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:19-05:00'
sources: []
---

**Why “you’re not going to find eight” is a design‑time assertion**

When Google built *Wave* they had to expose an API that was both **expressive** and **safe**.  
A wavelet can contain multiple *blips*, each of which may be edited by any participant.  
If the client were allowed to *index* blips arbitrarily (e.g., `wave.getBlip(8)`), it would silently expose a non‑deterministic state: who owns that index, how does a concurrent edit shift indices, and can an attacker fabricate a request for a non‑existent blip?  

Instead of a numeric address, Wave uses **stable identifiers** (UUIDs).  The server guarantees that every identifier is unique across all waves and participants.  This is essentially the *invariant* behind *consistency*.  By refusing to let clients search by “eight”, the system eliminates a class of race conditions where two users could simultaneously create blips, resulting in ambiguous ordering.

**Non‑obvious insight:**  
The rule isn’t about hiding the number eight; it’s a *prevention of accidental aliasing* that would otherwise break *eventual consistency*.  In distributed systems, the most subtle bugs come from assuming that “position” is stable when it isn’t.  Using immutable IDs turns an unbounded search space into a bounded, deterministic one—an elegant application of *information‑theoretic entropy minimization* to API design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
