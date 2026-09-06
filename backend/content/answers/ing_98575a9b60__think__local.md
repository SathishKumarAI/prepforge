---
qid: ing_98575a9b60__think__local
question: 'Explain: Build the task-lifecycle core of an annotation platform. Start
  simple; I''ll add requirements: consensus of k annotators, then priority re-review,
  then annotator cooldowns.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 519
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:10:30-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- What *task* means (image, text, audio).  
- How an *annotation* is stored and linked to a task.  
- Basic entities: `Task`, `Annotation`, `Annotator`.  
- Assume a stateless API layer; persistence in a DB.  

**2. Pick a mental model / framework**  
Use a **state‑transition diagram** for the task lifecycle:  
`CREATED → IN_PROGRESS → REVIEW → COMPLETED`.  
Each state transition is triggered by an event (e.g., “annotation submitted”, “review passed”).  

**3. Reason step‑by‑step to the answer**  
1. **Creation** – a user uploads data, a `Task` record appears in `CREATED`.  
2. **Assignment** – assign available annotators; mark task as `IN_PROGRESS`.  
3. **Annotation collection** – each annotator submits an `Annotation`; store with status `SUBMITTED`.  
4. **Consensus check** – once *k* annotations exist, run a function that compares them (e.g., majority vote). If consensus reached → move to `COMPLETED`.  
5. **Priority re‑review** – if not yet reached consensus or flagged as low confidence, add task back into a priority queue for re‑assignment.  
6. **Annotator cooldowns** – after finishing a task, set a timestamp on the annotator; future assignments skip those still in cooldown.  

**4. Common traps to avoid**  
- *Race conditions*: two annotators finish simultaneously and both trigger consensus. Use database transactions or atomic counters.  
- *Hot‑spoting*: putting all tasks in one table without indexing on status leads to slow queries. Index `status` + `created_at`.  
- *Hard‑coding k*: expose it as a configuration per project so you can tweak later.  

**5. Sanity‑check & communicate**  
Run through a quick mock scenario: create a task → assign 3 annotators (k=2) → first submits, no consensus; second submits, consensus achieved → status changes to `COMPLETED`. Verify that the annotator who just finished has a cooldown timestamp set. Explain this flow verbally or with a diagram so stakeholders see the states and triggers clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
