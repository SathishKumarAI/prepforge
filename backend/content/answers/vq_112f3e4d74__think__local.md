---
qid: vq_112f3e4d74__think__local
question: what is output committer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 409
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:11:11-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is “output committer” in Hadoop/Hive context?*  
- Assume the user knows basic MapReduce but not the commit phase details.

**2️⃣ Mental model / framework**

- Think of a job as **two phases**: *map/shuffle* → *reduce* → *commit*.  
- The *output committer* is the component that guarantees **exactly‑once semantics** for writing job results to HDFS (or other storage).

**3️⃣ Step‑by‑step reasoning**

1. After reducers finish, they write temporary files (`_temporary`) in the target directory.  
2. The output committer decides whether the job succeeded or failed.  
3. If success: it **moves/renames** temp files to final names (e.g., `part-00000`).  
4. If failure: it cleans up temp data, leaving no partial results.  
5. Different committers exist (`FileOutputCommitter`, `MultipleTextOutputFormatCommitter`, etc.) and can be swapped via job configuration.

**4️⃣ Common traps to avoid**

- *Assuming* the committer runs on each mapper/reducer; it actually runs **once per task attempt** but final commit is once per job.  
- Mixing up “output format” vs. “output committer”; they are distinct components.  
- Forgetting that newer Hadoop versions use a *lazy* committer that writes directly to the target path and then deletes on failure.

**5️⃣ Sanity‑check & verbal explanation**

- Verify by checking job logs: look for `OutputCommitter` class names and status messages (“commit successful/failed”).  
- Explain aloud: “The output committer is like a safety guard at the door of your result folder—it only lets the finished files in if everything ran cleanly, otherwise it throws them out.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
