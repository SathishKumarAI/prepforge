---
qid: ing_1779936806__think__local
question: 'Explain: Preserves numbers, temperatures, measurements'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 475
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:17:23-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- *What “preserves” means*: keeping values unchanged through processing (no rounding, truncation, or unit conversion unless explicitly required).  
- *Assumptions*: The data are numeric (integers/floats), temperatures may be in Celsius/Fahrenheit/kelvin, measurements have units (m, kg, etc.), and the AI pipeline is deterministic.

**2. Adopt a mental model: “Data‑centric integrity”**  
Treat every value as an immutable token that must pass through the system with its metadata (unit, precision) intact. Think of it like a database row that never changes unless a deliberate update occurs.

**3. Step‑by‑step reasoning**  

1. **Input validation** – check type, range, and unit consistency before any transformation.  
2. **Metadata tagging** – attach unit/precision tags to each value (e.g., 37 °C).  
3. **Processing rules** – only apply operations that preserve the quantity (e.g., adding two temperatures in the same scale).  
4. **Unit conversion guardrails** – if a conversion is necessary, do it explicitly with a checked function and log the change.  
5. **Output serialization** – round or format only for display; keep raw values unchanged in storage.

**4. Common traps to avoid**  

- *Implicit unit conversions* (e.g., adding °C to K without noticing).  
- *Floating‑point drift* from repeated arithmetic operations.  
- *Over‑rounding* during intermediate steps that later propagates errors.  
- Assuming “preserve” means “exactly the same bit pattern”; in practice, a small epsilon may be acceptable.

**5. Sanity‑check & communicate**  

- Run unit tests that feed known values and assert equality before/after processing.  
- Log any changes to units or precision explicitly.  
- Explain to stakeholders: “All numeric inputs are treated as immutable; only intentional transformations (e.g., unit conversion) alter their representation.” This transparency builds trust in the AI system’s numerical fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
