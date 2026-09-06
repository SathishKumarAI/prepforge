---
qid: ing_029224cb37__think__local
question: Why LLM for Explanation, Not SHAP/LIME? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 579
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:54:16-05:00'
sources: []
---

**1️⃣ Clarify the question and set assumptions**  
   - Identify the *problem domain*: fraud detection with a large language model (LLM) vs. local explainers like SHAP/LIME.  
   - Assume we’re comparing **explanatory fidelity, usability for stakeholders, and computational cost** in an operational setting.  
   - Note that “why LLM?” implies *situations where an LLM can provide richer explanations* than point‑wise feature attributions.

**2️⃣ Adopt a mental framework**  
   - Use the **Explainability Taxonomy**: *Intrinsic vs. Post‑hoc*, *Global vs. Local*, and *Human‑readable vs. Machine‑readable*.  
   - Map SHAP/LIME to *post‑hoc local* (feature importance), while LLMs can act as *intrinsic interpreters* that generate natural‑language narratives.

**3️⃣ Step‑by‑step reasoning**  

1. **Explainability needs in fraud detection**: regulators, analysts, and customers need *comprehensible reasons* for a flagged transaction.  
2. **Feature attribution limits**: SHAP/LIME produce lists of numbers; translating these into legal or business language is non‑trivial.  
3. **LLM strengths**:  
   - Can ingest the same model outputs plus context (e.g., user profile, historical patterns).  
   - Generate *coherent narratives* that tie feature values to domain concepts (e.g., “high transaction amount during off‑hours”).  
4. **Hybrid advantage**: LLM can incorporate SHAP scores as inputs, producing richer explanations while keeping fidelity.  
5. **Operational considerations**:  
   - SHAP/LIME are computationally heavy per instance; LLM inference can be cached or batched.  
   - LLMs allow *prompt‑tuning* to adapt style for regulators vs. analysts.

**4️⃣ Common traps to avoid**  

- Assuming an LLM always outperforms SHAP/LIME in accuracy—LLMs may hallucinate if not grounded.  
- Neglecting the need for **fidelity guarantees**; a purely natural language explanation can mislead.  
- Overlooking **bias amplification**: LLMs might echo training data biases unless carefully curated.

**5️⃣ Sanity‑check & communicate**  

- Verify that the LLM’s explanations align with SHAP scores on sample cases.  
- Present a side‑by‑side demo to stakeholders, highlighting where each method excels (numeric importance vs. narrative clarity).  
- Conclude: *Use SHAP/LIME for quantitative sanity checks and LLMs for human‑readable, contextual explanations—especially vital in regulated fraud detection.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
