---
qid: ing_eb0500e27e__think__local
question: The system prompt says one thing, the user asks for another, and a retrieved
  document says a third. How do you design conflict resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 392
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:31:26-05:00'
sources: []
---

**1. Clarify the sources & intent**  
   - Identify *who* is speaking: system prompt (policy), user query (goal), retrieved doc (content).  
   - State assumptions: the system prompt sets a hard policy, the user wants the best answer, and the doc provides factual data that may or may not conflict with policy.

**2. Adopt a hierarchy framework**  
   - *Policy > Content > User intent*.  
   - The system prompt is non‑negotiable; any content that violates it must be filtered or re‑phrased.  
   - If the document conflicts with policy, treat it as unreliable for that aspect.

**3. Reason step‑by‑step**  
   1. Parse user question → intent & required info.  
   2. Check if requested info is disallowed by policy; if so, refuse or safe‑answer.  
   3. If allowed, evaluate the doc: does it contradict policy? If yes, ignore that part and flag uncertainty.  
   4. Synthesize a response that satisfies user intent while staying within policy bounds, citing the doc only for permissible facts.

**4. Avoid common traps**  
   - *Over‑trusting* the retrieved document; treat it as one source among many.  
   - *Ignoring policy nuance*: e.g., “allowed” in one context may be “restricted” in another.  
   - *Focusing solely on user tone* and overlooking hard constraints.

**5. Sanity‑check & communicate**  
   - Re‑read the answer: does it comply with policy? Is any contradictory doc content omitted or flagged?  
   - Verbally, explain briefly that you’re following system guidelines, referencing only permissible information, and offering clarification if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
