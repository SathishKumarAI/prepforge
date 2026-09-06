---
qid: ing_bb8d4c2362__think__local
question: 'Explain: Common Patterns to Know — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 498
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:20:41-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants a *metacognitive* outline for answering “Common Patterns to Know – Whiteboard Exercises” in an AI context.  
   - Assume they’re preparing for technical interviews or internal training; focus on patterns that surface repeatedly on whiteboards (e.g., DP, graph traversal, greedy, backtracking).  
   - Keep the explanation concise yet actionable—no deep dives into code but enough to rehearse.

**2️⃣ Adopt a “pattern‑first” mental model**  
   - View each exercise as a *problem archetype* that maps to one or more algorithmic strategies.  
   - Structure the answer around:  
     1. **Problem type** (e.g., “max subarray”)  
     2. **Key insight** (“Kadane’s linear scan”)  
     3. **Common pitfalls** (“forget negative numbers”)  
     4. **Typical whiteboard steps** (draw diagram, state variables, iterate).  

**3️⃣ Step‑by‑step reasoning**  
   - List 5–7 core patterns: DP on intervals, graph DFS/BFS, greedy with sorting, divide‑and‑conquer, backtracking + pruning, sliding window, and recursion stack.  
   - For each pattern, give a brief “whiteboard script”: start by restating constraints, sketch the data structure, write pseudocode skeleton, then walk through a small example on paper.

**4️⃣ Avoid common traps**  
   - Don’t over‑generalize; remember that interviewers often twist patterns (e.g., ask for *minimum* instead of *maximum*).  
   - Resist writing full code—focus on the conceptual flow.  
   - Beware of “magic numbers”; always justify choices (why sort? why memoize?).  

**5️⃣ Sanity‑check & verbalize**  
   - After drafting, mentally rehearse explaining each pattern to a peer: can I justify the key insight in 30 seconds?  
   - Ensure each bullet is *actionable*: “If you see a longest‑path problem on a DAG, think topological sort + DP.”  
   - Finally, deliver the answer as a concise cheat‑sheet the candidate can flip during an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
