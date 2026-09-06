---
qid: vq_9f5b8ff555__think__local
question: With which function of a summary item in the COMPUTE AT option required
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 592
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:07:00-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
   - Identify the domain: *DSA* (Data Structures and Algorithms) or *IBM DSA?* The wording “COMPUTE AT option” suggests a main‑frame COBOL/DB2 context, not a generic algorithm.  
   - Assume the user asks about the **`COMPUTE` statement** in a *COBOL* program that uses the `AT` clause for an **array element (summary item)**.  
   - Clarify whether “required” means “must be supplied to compile” or “necessary for the computation”.  

**2️⃣ Mental model / framework**  
   - Recall the syntax: `COMPUTE target-1 = expression-1, … AT array-name(index)`.  
   - Understand that **`AT`** specifies *where* in a table (array) the result should be stored.  
   - The function of a *summary item* is to hold an intermediate or final value; it must have a defined type and storage location.  

**3️⃣ Step‑by‑step reasoning**  
   1. List the components: target‑item, expression(s), optional `AT` clause.  
   2. Explain that the `AT` clause is only needed when the target is *inside* an array or table; otherwise it’s omitted.  
   3. Highlight that the summary item itself must be declared (e.g., in a `01` or `77` level) before use.  
   4. Emphasize that the `AT` clause can reference any valid index expression, but the index must be within bounds at run time.  

**4️⃣ Common traps to avoid**  
   - Mixing up **`COMPUTE AT`** with *MOVE* or *ADD* statements; each has its own syntax.  
   - Forgetting that `AT` only applies to *summary items* (array elements), not to individual fields unless they are part of a table.  
   - Assuming the clause is optional when the target is indeed an array element—this will cause a compile error.  

**5️⃣ Sanity‑check & verbal communication**  
   - Verify by writing a tiny COBOL snippet: `COMPUTE myArray(index) = value AT myArray(index).`  
   - Run through the compiler’s message set to ensure no syntax errors.  
   - When explaining, start with “In COBOL, when you want the result of a COMPUTE to be stored in a specific element of an array…” and finish by stressing that the **summary item must exist and be properly indexed**.

This structured approach lets you adapt the reasoning to similar questions about `COMPUTE`, `AT` clauses, or summary items across different programming contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
