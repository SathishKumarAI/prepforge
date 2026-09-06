---
qid: ing_1a76a684eb__think__local
question: 'Explain: Correcting Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 603
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:28:58-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**

- *Audience*: Law‑tech professionals familiar with AI but not necessarily ML experts.  
- *Goal*: Explain how “hallucination” is detected and corrected in a legal‑document‑generation model, using the BigLaw Bench as a concrete example.  
- *Assumptions*: The model is fine‑tuned on court opinions; it can produce plausible yet inaccurate text (“hallucinations”).  

**2️⃣ Adopt a layered mental model**

1. **Input → Model → Raw Output** – the pipeline that generates text.  
2. **Hallucination detection** – flags inconsistencies with source data or factual databases.  
3. **Correction mechanisms** – either post‑processing filters or iterative re‑generation.  

Think of it as a *feedback loop* where the model’s own output is verified against trusted references before being delivered to the user.

**3️⃣ Step‑by‑step reasoning**

1. **Tokenization & embedding**: The model processes the legal prompt and generates tokens based on learned patterns.  
2. **Internal consistency check**: During decoding, a lightweight neural “hallucination detector” (e.g., a classifier trained on known hallucinated vs. factual outputs) scores each token or span.  
3. **External validation**: The system queries authoritative sources—court databases, statutes, prior opinions—to verify key facts (dates, case numbers).  
4. **Correction pathways**:
   - *Re‑generation*: If a mismatch is detected, the model re‑samples that section with constrained temperature or a “fact‑aware” prompt.  
   - *Post‑editing*: Replace hallucinated text with the verified snippet from the source.  
5. **Human‑in‑the‑loop**: The final draft is flagged for legal review; the system highlights any residual uncertainties.

**4️⃣ Common traps to avoid**

- Assuming a single pass of generation suffices; hallucinations often appear in multi‑step outputs.  
- Overreliance on internal consistency alone—legal texts can be internally coherent yet factually wrong.  
- Neglecting version control: source documents change, so the validator must use the same snapshot that the model was trained on.

**5️⃣ Sanity‑check & verbalize**

- **Check numbers**: Verify dates, case citations against a database; if mismatched, trigger re‑generation.  
- **Explain to stakeholders**: “The system flagged this clause because the cited case number isn’t in our legal corpus for that jurisdiction.”  
- **Iterate**: If corrections still produce errors, adjust the hallucination detector’s threshold or retrain it with more examples.

By layering detection and correction, BigLaw Bench turns a raw generative model into a reliable drafting assistant—reducing the risk of erroneous legal advice while keeping the workflow efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
