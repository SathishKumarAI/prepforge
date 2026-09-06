---
qid: ing_900b5eada9__think__local
question: 'Explain: Data Flow — Pydantic Evals | Pydantic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 516
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:35:41-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Assume the reader knows basic Python but not Pydantic.  
- “Data flow” refers to how data is validated, parsed, and transformed when using Pydantic models (including evaluation features).  
- “Pydantic Evals” likely points to `@pydantic.validator` or dynamic field evaluation.

**2️⃣ Mental model / framework**  
- *Input → Validation* → *Model instance* → *Output/serialization*.  
- Treat a Pydantic model as a pipeline: raw data enters, passes through validators (sync/async), then is stored in attributes.  
- Evaluation can be seen as a sub‑pipeline that runs after basic parsing.

**3️⃣ Step‑by‑step reasoning**  
1. Raw JSON/dict → `BaseModel.parse_obj()`.  
2. Built‑in type checks happen automatically.  
3. Custom validators (`@validator`) run; they may use `pre=True` or `always=True`.  
4. If using `@root_validator`, entire model is available for cross‑field logic.  
5. After validation, data is stored in the instance’s attributes (immutable if `allow_mutation=False`).  
6. For serialization, `model.json()` or `dict()` triggers `json_encoders`/`exclude_unset`.  
7. “Eval” step: dynamic expressions can be evaluated via custom methods or `@validator` that compute derived fields.

**4️⃣ Common traps to avoid**  
- Forgetting `pre=True`: validators run before parsing, so raw values must be handled carefully.  
- Misusing `allow_mutation=False`: trying to modify after creation causes errors.  
- Assuming order of validators is the same as declaration; it’s actually alphabetical unless `@validator(..., allow_reuse=True)`.  
- Overlooking that `root_validator` runs *after* field validators.

**5️⃣ Sanity‑check & verbalize**  
- Walk through a toy example: create a model with an int field and a validator that doubles the value.  
- Explain how input “3” becomes 6 internally, then appears as 6 in output.  
- Summarize the flow diagram verbally: **Input → Parsing → Field Validators → Root Validator → Model Instance → Serialization**.  
- Ensure each step’s purpose is clear and that evaluation logic fits naturally into this pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
