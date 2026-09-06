---
qid: ing_ebdf5a3c17__think__local
question: 'Explain: Golden Set Composition Guidelines — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 397
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:36:02-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Identify that “Golden Set” refers to a curated, high‑quality collection of prompts or examples used for evaluating AI models.  
- Assume the audience knows basic evaluation concepts (precision, recall) but not this specific framework.

**2️⃣ Choose a mental model**  
- Think of the Golden Set as a *benchmarking toolkit* built on three pillars: **Coverage, Relevance, and Difficulty**.  
- Map each pillar to concrete design rules (e.g., “cover all intent types”, “use real‑world data”, “include edge cases”).

**3️⃣ Step‑by‑step reasoning**  
1. List the *Rag Evaluation Patterns* (Recall‑Agnostic Generation, Redundancy‑Aware Generation, etc.).  
2. For each pattern, explain its purpose and how it informs one of the pillars.  
3. Translate that into a concrete guideline (e.g., “for Recall‑Agnostic Generation, ensure no duplicate semantic content in the set”).  
4. Organize guidelines hierarchically: top‑level principles → sub‑rules → implementation tips.

**4️⃣ Avoid common traps**  
- Don’t mix up *evaluation metrics* with *composition rules*.  
- Beware of over‑emphasizing quantity; quality and balance matter more.  
- Skip the temptation to copy generic “diversity” advice without tying it back to Rag patterns.

**5️⃣ Sanity‑check & communicate**  
- Run through a mock example: pick one guideline, show how it would shape an actual prompt in the set.  
- Ask yourself: does this rule prevent a known failure mode? If yes, great; if no, refine.  
- Finally, explain the chain from pattern → pillar → guideline → practical step so the audience can see the logic flow clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
