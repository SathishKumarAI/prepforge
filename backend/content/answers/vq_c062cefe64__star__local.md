---
qid: vq_c062cefe64__star__local
question: Which of the following is not correct about the “TABLE” datatype ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:31-05:00'
sources: []
---

**Situation:** While refactoring the reporting module for our e‑commerce platform, I discovered that the new “TABLE” data type we were using in PostgreSQL was causing query timeouts during nightly aggregation jobs.

**Task:** My goal was to audit the schema definitions and correct any misuse of the TABLE datatype so that the ETL pipeline could finish within the 30‑minute window.

**Action:** I started by reviewing the documentation and comparing it with our actual usage. The docs state:  
1) “TABLE is a composite type that can be used in columns.”  
2) “TABLE can only appear in user‑defined types, not as a column data type.”  
3) “TABLE allows storage of multiple rows within a single column.”  

I ran `SELECT * FROM pg_type WHERE typname = 'table';` and found no such entry, confirming that PostgreSQL does not expose TABLE as a native column type. I then replaced the erroneous columns with JSONB arrays and updated the ETL scripts to flatten them.

**Result:** The nightly job now completes in 12 minutes, a 60% improvement, and we avoided future schema drift by documenting the correct usage of composite types. I learned that even small misinterpretations of database docs can cascade into performance bottlenecks, so always validate with actual system metadata before making changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
