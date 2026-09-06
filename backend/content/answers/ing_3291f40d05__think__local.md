---
qid: ing_3291f40d05__think__local
question: 'Explain: Alert Fatigue, Cognitive Load, and On-Call Toil'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 409
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:52:07-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

* Confirm we’re speaking about clinical or IT contexts (the same terms apply but nuance differs).  
* Assume the audience knows basic AI terminology but not these specific workflow concepts.

**2️⃣ Adopt a “workflow‑impact” mental model**

* Map each term to its place in an information‑processing loop: *input → cognitive load → decision → output*.  
* Treat “alert fatigue,” “cognitive load,” and “on‑call toil” as layers that can accumulate or amplify one another.

**3️⃣ Step‑by‑step reasoning**

1. **Alert Fatigue** – too many AI‑generated notifications → user ignores alerts, potentially missing critical events.  
2. **Cognitive Load** – the mental effort required to interpret each alert; high load reduces accuracy and speed.  
3. **On‑Call Toil** – repetitive, low‑value tasks (e.g., triaging false positives) that occupy on‑call staff, draining time from higher‑impact work.

Show how AI can reduce toil by filtering alerts but, if not tuned, can increase fatigue and load—creating a vicious cycle.

**4️⃣ Common traps to avoid**

* Confusing *alert fatigue* with general “notification overload.”  
* Assuming lower alert volume always equals better outcomes.  
* Ignoring that cognitive load also includes emotional stress, not just information quantity.

**5️⃣ Sanity‑check & verbalize**

* Verify each concept’s definition against authoritative sources (e.g., NHS or ITIL guidelines).  
* Rephrase the explanation in one sentence: “AI alerts can overwhelm users (fatigue), strain their mental resources (load), and force repetitive work on‑call staff (toil).”  
* Use concrete examples (e.g., a hospital ICU monitor) to illustrate each layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
