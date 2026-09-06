---
qid: ing_237a024f20__think__local
question: How would you implement sub-question decomposition, and when does it make
  things worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 387
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:00:20-05:00'
sources: []
---

**Metacognitive Checklist for Sub‑Question Decomposition**

| # | Thought Step | What to do / watch out for |
|---|--------------|----------------------------|
| **1️⃣ Clarify the goal & assumptions** | • Ask: *What is the overall problem?* <br>• Identify constraints (time, resources, domain). <br>• Assume that each sub‑question can be answered independently and recombined. |
| **2️⃣ Choose a mental model / framework** | • Map the problem into a hierarchy: *Goal → Sub‑goals → Tasks*. <br>• Use decomposition trees or dependency graphs to visualize relationships. |
| **3️⃣ Reason step‑by‑step toward the answer** | • Break the main question into atomic, answerable parts. <br>• For each part, decide whether it needs further split (e.g., “how” vs. “why”). <br>• Keep track of intermediate outputs that will feed back into higher levels. |
| **4️⃣ Spot common traps & wrong turns** | • Avoid over‑splitting: tiny sub‑questions may waste effort. <br>• Beware of circular dependencies (sub‑question A needs B, but B needs A). <br>• Don’t ignore cross‑cutting concerns that affect multiple sub‑questions (security, data quality). |
| **5️⃣ Sanity‑check & communicate** | • Re‑assemble the sub‑answers mentally and verify they form a coherent whole. <br>• Explain each step aloud to a colleague or rubber‑duck; if it feels forced, re‑merge some parts. |

Use this checklist whenever you’re tempted to decompose a complex AI task—ensuring that the process actually simplifies rather than complicates the problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
