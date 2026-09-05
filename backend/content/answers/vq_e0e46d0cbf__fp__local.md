---
qid: vq_e0e46d0cbf__fp__local
question: Can we pass RECORD GROUP between FORMS ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 344
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:00:52-05:00'
sources: []
---

In Oracle Forms a *record group* is an in‑memory collection of rows that can be navigated, filtered, and even written back to the database. The fundamental problem it solves is “how do I keep a set of rows that may span multiple blocks or sessions without repeatedly querying the database?”  
The only way Forms lets you move a record group between forms is through *global variables* (or global blocks) because a record group lives in the runtime session’s memory, not on disk. When Form A creates or modifies the group it must copy its contents into a global block or assign the whole group to a global variable of type `RECORD_GROUP`. In Form B you retrieve that variable and rebuild the local record group.

Why this works:  
* A global variable is shared across all forms in the same session, so the object’s reference survives the form transition.  
* The `RECORD_GROUP` data structure is serializable; copying it preserves its internal cursor state and rowset.

**Non‑obvious insight:**  
You can *clone* a record group by assigning it to a global variable **without** materialising all rows in memory again. This means the clone shares the same underlying rowset until you explicitly modify one of them—so changes propagate back, which is often unintentionally leveraged for “pass‑through” filtering but can lead to subtle bugs if not understood. Use `RECORD_GROUP.COPY` or `RECORD_GROUP.DELETE_ALL_ROWS` to break that sharing when isolation is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
