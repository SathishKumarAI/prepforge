---
qid: vq_eac9ed4233__think__local
question: In Python, how do you make a copy of an object?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 495
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:37:14-05:00'
sources: []
---

### 1️⃣ Clarify the question  
- **What kind of “copy” is needed?**  
  - Shallow (duplicate references) vs deep (recursive duplication).  
- **Is it a built‑in type, custom class, or something that implements `__deepcopy__`/`__copy__`?**  
- **Do we need to preserve the object’s state exactly (including private attributes)?**  

### 2️⃣ Mental model / framework  
- **Shallow copy:** duplicates the outer container but keeps inner objects referenced.  
  - Use: `obj.copy()`, `dict(obj)`, `list(obj)`, `copy.copy(obj)` (module).  
- **Deep copy:** recursively copies every nested object.  
  - Use: `copy.deepcopy(obj)` (module).  

### 3️⃣ Step‑by‑step reasoning  
1. Import the standard library module `copy`.  
2. Decide if shallow or deep is required.  
   - For most simple cases (`int`, `str`, tuples, lists of primitives) a shallow copy suffices.  
   - If nested mutable objects exist (lists inside dicts), use deep.  
3. Call the appropriate function:  
   ```python
   import copy
   new_obj = copy.copy(original)      # shallow
   new_obj = copy.deepcopy(original)  # deep
   ```
4. Verify by modifying `new_obj` and checking that `original` remains unchanged (deep) or partially changes (shallow).

### 4️⃣ Common traps to avoid  
- **Assuming all objects support `.copy()`.** Built‑in containers do, but custom classes may not.  
- **Using assignment (`a = b`) → same reference, no copy.**  
- **Forcing deep copy on immutable types (e.g., `int`, `str`).** Unnecessary overhead.  
- **Not handling objects with `__slots__` or properties that require special copying logic.**

### 5️⃣ Sanity‑check & communicate  
- Run a quick test: create an object, make a copy, mutate the copy, and observe the original’s state.  
- Explain the difference between shallow vs deep to the audience, highlighting when each is appropriate.  

This structured approach ensures you choose the right copying strategy and avoid common pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
