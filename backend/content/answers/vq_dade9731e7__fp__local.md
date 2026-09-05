---
qid: vq_dade9731e7__fp__local
question: Can you copy the PROGRAM UNIT into an Object group ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 634
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:36-05:00'
sources: []
---

In IBM i (AS/400) the **PROGRAM UNIT** is a compiled program that lives in a library as an object of type *PGM.  
An **OBJECT GROUP** is not a storage container; it is a logical collection of libraries and members that a job can “search” for objects at run time.  
Because an object group contains only references (library/member names), you cannot *copy* a program unit into it – there is no place to materialise the copy inside the group.

The way to make a program available through an object group is:

1. **Copy the program** itself to another library that is part of the object‑group search path, e.g.  
   ```bash
   CPYOBJ OBJ(QGPL/PGMNAME) TOOBJ(MYGROUP/PGMNAME) TOLIB(QGPL)
   ```
2. Or create a *member* in a *source file* that contains the program source and compile it into a new library that is part of the object group.

**Why this must be so:**  
An object group is essentially a list of search paths; its purpose is to let a job resolve an object name without knowing its exact library. Storing objects inside the group would defeat that abstraction and create duplication overhead.  

*Non‑obvious insight:* Even though you cannot copy a program into an object group, you can **add the same program to multiple libraries** (by copying) and then list all those libraries in one object group. This lets several jobs share a single program instance without physically duplicating it—an efficient use of storage that leverages the group’s search‑path semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
