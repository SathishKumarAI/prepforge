---
qid: ing_187cd255ba__think__local
question: 'Explain: The Planning Spectrum — Planning And Decomposition'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 516
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:20:28-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “Planning Spectrum” exactly?*  Assume it’s a conceptual continuum that links high‑level planning (strategic goals) with low‑level task decomposition (operational details).  
   - *Who is the audience?*  If they’re novices, keep jargon minimal; if experts, dive into formal models.  

**2️⃣ Adopt a mental model / framework**  
   - Treat the spectrum as a **two‑axis diagram**:  
     - *Horizontal axis*: from “Vision” (broad, abstract) to “Execution” (concrete, actionable).  
     - *Vertical axis*: from “Global Planning” (top‑down) to “Local Decomposition” (bottom‑up).  
   - Map classic AI concepts onto it: STRIPS, PDDL at the top; Hierarchical Task Networks (HTNs), Goal‑oriented Action Planning (GOAP) toward the middle; concrete action sequences near the bottom.  

**3️⃣ Step‑by‑step reasoning to explain**  
   1. **Define planning levels** – describe high‑level goals, intermediate subgoals, and atomic actions.  
   2. **Show decomposition flow** – how a top‑level plan is recursively broken down until executable steps emerge.  
   3. **Illustrate with an example** – e.g., “Plan to cook dinner” → “Prepare ingredients” → “Chop onions” (illustrates moving left→right and top→bottom).  
   4. **Discuss trade‑offs** – flexibility vs. computational cost, abstraction vs. precision.  

**4️⃣ Avoid common traps**  
   - Don’t conflate *planning* with *control*.  
   - Beware of oversimplifying decomposition as purely hierarchical; many modern planners use graph‑based or constraint‑driven decompositions.  
   - Resist the urge to list every AI planner; focus on illustrating the spectrum, not exhaustive taxonomy.  

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this explain why a single algorithm can’t cover both vision and execution?”  
   - Rephrase in plain terms: “Think of it as moving from a map to stepping stones.”  
   - End with a quick recap that ties the spectrum back to real‑world AI applications (robotics, game AI, decision support).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
