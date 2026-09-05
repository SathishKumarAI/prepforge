---
qid: ing_316ff1c003__think__local
question: 'Q29: How do you detect and handle hallucinations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 363
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:23:29-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - What exactly counts as a “hallucination” in your context (mis‑information, fabricated facts, or off‑topic content)?  
   - Assume you have access to the model’s raw output, confidence scores, and possibly external knowledge bases.  

**2️⃣ Adopt a two‑tier mental model**  
   - **Detection layer:** rule‑based + statistical signals (e.g., low confidence, contradictory statements).  
   - **Mitigation layer:** cross‑check against trusted sources, flagging or re‑prompting the user.  

**3️⃣ Step‑by‑step reasoning**  
   1. Parse output for factual claims.  
   2. Query a curated knowledge base (or API) for each claim.  
   3. Compare model confidence with evidence strength; if mismatch → flag.  
   4. If flagged, either ask the user for clarification or generate a “safe‑answer” that admits uncertainty.  

**4️⃣ Common pitfalls to avoid**  
   - Overreliance on a single source (bias).  
   - Treating low confidence as always wrong—some high‑confidence hallucinations occur.  
   - Ignoring context; a claim may be correct in one domain but not the other.  

**5️⃣ Sanity‑check & verbalise**  
   - Summarise detected issues to yourself: “Claim X lacks evidence, confidence is low → hallucination.”  
   - Communicate transparently to the user: “I’m unsure about that; here’s what I found.” This reinforces trust and closes the loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
