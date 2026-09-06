---
qid: ing_7b363dfea0__think__local
question: 'Deadline pressure: do you spend the next two weeks on eval infrastructure
  or the feature itself? How have you actually made this call?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 415
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:10:16-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
*   Identify the concrete goal: is it a user‑facing feature or a reliable evaluation pipeline?  
*   Assume both deliver value but one may unlock future work (e.g., the eval system powers many downstream features).  

**2️⃣ Adopt a decision framework**  
*Use the “Cost–Benefit, Risk & Dependencies” matrix:*  
| Criterion | Feature | Eval infra |  
|-----------|---------|------------|  
| Immediate impact | ★★★★ | ★☆☆☆ |  
| Long‑term ROI | ★★☆☆ | ★★★★★ |  
| Development risk | ★★☆☆ | ★★★★ |  

**3️⃣ Step‑by‑step reasoning**  
1. List all stakeholders’ pain points.  
2. Map each requirement to either feature or infra.  
3. Estimate effort/time for both paths (using past sprint data).  
4. Quantify downstream benefits: how many future features depend on a solid eval system?  
5. Rank options by weighted score, then pick the one that clears the highest‑priority blocker.  

**4️⃣ Avoid common traps**  
* “Feature first” bias – ignore hidden dependencies.*  
* Underestimating infra effort – it often takes longer than the feature itself.*  
* Over‑optimism about rapid prototyping—real infra needs rigorous testing.*

**5️⃣ Sanity‑check & communicate**  
*   Run a quick “what‑if” scenario: if eval fails, what’s the cost to the feature?  
*   Present the matrix and rationale in a short slide deck to stakeholders.  
*   Ask for one‑sentence confirmation that the chosen path aligns with product goals.*

By following this structured, transparent approach you can confidently decide whether to sprint on the feature or lay down the evaluation foundation under deadline pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
