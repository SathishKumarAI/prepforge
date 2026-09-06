---
qid: vq_feb9bbb261__think__local
question: In Python, how do you abstract data?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 419
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:45:02-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - “Abstract data” could mean *encapsulating* it in classes, using *abstract base classes (ABCs)*, or simply hiding implementation details behind an interface.  
   - Assume the user wants a clean way to expose data without letting callers depend on concrete structures.

**2️⃣ Choose a mental model**  
   - Think of the *Interface Segregation Principle* from SOLID: provide only what’s needed.  
   - Map that to Python: use `@property`, `@abstractmethod` in an ABC, or simple composition.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the data you want to expose (e.g., a list of records).  
   2. Decide on the public API: read‑only, mutable, filtered, etc.  
   3. Create an ABC with abstract methods/properties that describe this API.  
   4. Implement concrete classes that inherit from the ABC and hide the underlying storage (list, dict, DB cursor).  
   5. Optionally add a factory or repository pattern to keep callers independent of concrete types.

**4️⃣ Common traps to avoid**  
   - Exposing mutable internals (e.g., returning `self._data` directly).  
   - Overusing inheritance when composition suffices; Python favors “duck typing.”  
   - Forgetting to document the intended interface, leading to accidental tight coupling.

**5️⃣ Sanity‑check & communicate**  
   - Verify that callers only see the defined methods/properties.  
   - Run a quick unit test: instantiate the concrete class via the ABC type and assert no direct access to internal fields.  
   - When explaining, highlight the benefit: “The caller interacts with an interface; you can swap out implementations without touching client code.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
