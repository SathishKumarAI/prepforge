---
qid: ing_9d0e133a8d__think__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 555
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:28:41-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   - *Goal*: Ensure the JSON returned by the LLM is syntactically correct, semantically meaningful, and matches the expected schema.  
   - *Assumptions*: The LLM can hallucinate; we have a defined JSON schema; we control prompt engineering and post‑processing.

**2. Mental model / framework**  
   - Treat the pipeline as **Input → Prompt → LLM → Post‑process → Validation → Use**.  
   - Each stage has a *failure mode* (mis‑prompting, generation errors, format drift).  
   - Use a combination of *deterministic checks* (JSON parsing, schema validation) and *probabilistic safeguards* (confidence scoring, human review).

**3. Step‑by‑step reasoning**  
   1. **Define an explicit JSON schema** (e.g., OpenAPI/JSON‑Schema).  
   2. **Prompt with strong constraints**: ask the LLM to output only the JSON block, wrap it in triple backticks, and provide a short instruction “no prose”.  
   3. **Generate multiple samples** (temperature=0) or use *repetition* for redundancy.  
   4. **Parse each sample** with a strict JSON parser; discard malformed ones.  
   5. **Validate against the schema**; collect errors.  
   6. If validation fails, either retry, fall back to a simpler prompt, or flag for human review.  
   7. Optionally, compute a *confidence score* from token probabilities (e.g., average log‑prob of the JSON tokens) and set a threshold.

**4. Common traps & wrong turns**  
   - **Over‑reliance on “only JSON”**: LLMs still slip in prose or comments.  
   - **Ignoring schema validation**: syntactically valid JSON can still be semantically wrong.  
   - **Using high temperature**: increases creativity but also errors.  
   - **Skipping retries**: a single failure may be recoverable.

**5. Sanity‑check & communicate**  
   - Run unit tests with known good/bad inputs to confirm the pipeline rejects malformed data.  
   - Log both raw outputs and validation results for auditability.  
   - Present the process diagrammatically (prompt → LLM → parse → validate) so stakeholders see where failures can be caught.  

By layering prompt engineering, deterministic parsing/validation, and optional confidence scoring, you make structured JSON from an LLM reliable in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
