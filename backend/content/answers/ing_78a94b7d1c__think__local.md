---
qid: ing_78a94b7d1c__think__local
question: 'Explain: DocumentDB lets you pick your read consistency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 422
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:58:54-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify what “read consistency” means in a distributed DB context (e.g., eventual vs strong).  
- Assume the reader knows basic NoSQL concepts but not Amazon DocumentDB specifics.  
- Note that the question asks *how* you can “pick” it, so focus on configuration options rather than internal mechanics.

**2️⃣ Mental model / framework**  
- Think of consistency as a spectrum: *eventual → bounded staleness → strong*.  
- Map each point to DocumentDB’s settings (e.g., read‑only replica lag, `readConcern` level).  
- Use the “consistency knob” metaphor: you turn a dial between two extremes.

**3️⃣ Step‑by‑step reasoning**  
1. Start with the default (eventual on replicas).  
2. Show how to request a *strong* read by pointing at the primary or setting `readConcern: "majority"`.  
3. Explain intermediate options (e.g., reading from a secondary within a latency window).  
4. Tie each choice back to trade‑offs (latency vs freshness).

**4️⃣ Common traps to avoid**  
- Don’t conflate “write consistency” with read consistency; they’re separate knobs.  
- Avoid implying that you can arbitrarily mix settings per query—DocumentDB enforces the chosen level for a session.  
- Be careful not to oversimplify: mention that some consistency levels are only supported in specific regions or instance types.

**5️⃣ Sanity‑check & communicate clearly**  
- Re‑read your explanation from a beginner’s viewpoint; if it feels too jargon‑heavy, simplify.  
- Use concrete examples (e.g., “If you need the latest data for a checkout page, read from primary”).  
- End with a quick recap: *You pick the consistency by choosing where to read and what `readConcern` level to apply.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
