---
qid: vq_d1261c39f1__eli5__local
question: Where can I get a list of all hidden Oracle parameters?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 265
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:28:57-05:00'
sources: []
---

Think of an Oracle database as a huge kitchen with many appliances. Most of the knobs and switches you see on the stove or fridge are the *public* settings that any cook can adjust—those are the normal configuration parameters you’ll find in `spfile` or `init.ora`.  
The hidden (or “private”) parameters are like secret levers inside a pantry door that only the master chef knows about; they control low‑level behavior and aren’t meant for everyday use.

To see all of them, ask Oracle to list everything it stores in its parameter tables:

```sql
SELECT name, value, isdefault, issensitive
FROM v$parameter
WHERE hidden = 'TRUE';
```

Or, if you’re on a newer version, query the view that shows both public and private parameters:

```sql
SELECT name, value
FROM dba_registry_parameters
WHERE ishidden = 'Y';
```

These queries pull from Oracle’s internal catalog (`v$parameter` or `dba_registry_parameters`) where every knob—visible or hidden—is recorded. Just like checking the pantry list before you start cooking, run the query to discover all the hidden settings your database holds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
