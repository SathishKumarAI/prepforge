---
qid: ing_2a39470306__think__local
question: 'Explain: Hexagonal architecture the original 2005 article'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 463
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:28:49-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “hexagonal architecture” refers to the *ports‑and‑adapters* pattern introduced by Alistair McKee in 2005 (not the later “Hexagon” for data).  
   - Assume the reader knows basic OO design but not the article’s context.  

**2. Adopt a mental model of the pattern**  
   - Think of the system as a *core domain* surrounded by concentric layers: core, ports, adapters, and external infrastructure.  
   - Visualise the hexagon as an “inner” domain that should be isolated from outer concerns.

**3. Step‑by‑step reasoning toward explanation**  
   1. **Identify the problem** McKee addressed (tight coupling between business logic and technology).  
   2. **Describe the core idea**: move all external dependencies outside the hexagon via interfaces (“ports”).  
   3. **Explain ports vs adapters**: ports are pure interfaces; adapters implement them for databases, UI, etc.  
   4. **Show the flow of control**: user input → adapter → port → domain logic → port → adapter → output.  
   5. **Highlight benefits**: testability, independence from frameworks, clear separation of concerns.

**4. Common traps to avoid**  
   - Mixing “hexagonal” with “clean architecture” or “onion architecture”; keep the focus on ports‑and‑adapters.  
   - Forgetting that the core domain *does not* know about adapters; it only knows about ports.  
   - Over‑engineering: adding unnecessary interfaces for trivial dependencies.

**5. Sanity‑check & verbalise**  
   - Ask yourself: does each component strictly adhere to its role?  
   - Explain aloud using a simple example (e.g., a banking transfer service) and trace the data path through ports and adapters.  
   - Ensure the explanation ends with concrete benefits that justify the added indirection.

Follow this checklist whenever you need to describe or teach hexagonal architecture from McKee’s 2005 article.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
