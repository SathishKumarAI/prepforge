---
qid: ing_a3b3b4bff0__think__local
question: What is the lethal trifecta, and how would you use it in a design review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 393
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:53:54-05:00'
sources: []
---

**1. Clarify the terms & assumptions**  
   - *Lethal trifecta* is slang for three key metrics that together predict a product’s failure (e.g., poor usability, low performance, high cost).  
   - Assume the audience knows basic design‑review etiquette but may not be familiar with this idiom.

**2. Pick a mental model**  
   - Use a *triad framework*: **User Impact → Business Impact → Technical Feasibility**.  
   - Map each metric to one side of the triangle for balanced evaluation.

**3. Reason step‑by‑step**  
   1. Define the three metrics in concrete terms (e.g., task success rate < 70%, load time > 5 s, budget overrun > 15%).  
   2. Create a visual “Lethal Trifecta” chart for quick reference during review.  
   3. During the session, ask: *“Does this design hit any of these thresholds?”* and document responses.  
   4. If all three are breached, flag it as a critical risk; otherwise discuss mitigations.

**4. Avoid common traps**  
   - Don’t treat the trifecta as an absolute rule—context matters.  
   - Beware of over‑emphasizing metrics at the expense of qualitative insights.  
   - Resist the urge to fix all three simultaneously; prioritize based on impact.

**5. Sanity‑check & communicate**  
   - Re‑state the thresholds in plain language before the review starts.  
   - After the session, summarize findings in a one‑page “Risk Summary” that cites the trifecta outcomes.  
   - Ensure everyone understands how meeting or missing each metric will influence next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
