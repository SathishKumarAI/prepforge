---
qid: ing_68fc47068e__think__local
question: 'Explain: Library APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 468
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:58:17-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What exactly do we mean by “API” in ML libraries?* Assume the user wants a high‑level definition (interface, contract) plus examples from common frameworks like scikit‑learn or TensorFlow.  
   - *Assume no prior deep knowledge of software architecture,* so keep it conceptual but concrete.

**2. Adopt a mental model**  
   - Treat an API as a **public contract**: the set of callable functions/methods, expected inputs/outputs, and error handling.  
   - Relate this to a “black‑box” analogy (you call the box, you get results without caring about internals).  
   - In ML libraries, APIs expose data structures (arrays, tensors), training loops, evaluation utilities, etc.

**3. Step‑by‑step reasoning**  
   1. Start with the general definition of an API in software engineering.  
   2. Map that to ML libraries: what objects are exposed? (`fit`, `predict`, `transform`).  
   3. Illustrate typical signatures and data types (NumPy arrays, Pandas DataFrames).  
   4. Mention versioning & backward compatibility as part of the contract.  
   5. Conclude with why a clean API matters for usability, reproducibility, and extensibility.

**4. Common traps to avoid**  
   - Don’t conflate “API” with the entire library; focus on the *public interface*.  
   - Avoid overly technical jargon that may alienate beginners (e.g., “ABI”, “serialization”).  
   - Resist over‑simplifying: an API still has error contracts, documentation, and sometimes hooks for customization.

**5. Sanity‑check & verbalize**  
   - Re‑read the explanation aloud to ensure it flows from general to specific.  
   - Ask a colleague or a non‑technical friend if they grasp “API” after reading; adjust wording accordingly.  
   - Verify that each example aligns with actual library calls (e.g., `sklearn.model_selection.train_test_split`).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
