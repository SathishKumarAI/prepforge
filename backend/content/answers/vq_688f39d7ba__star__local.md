---
qid: vq_688f39d7ba__star__local
question: How can one see who is using a temporary segment?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 314
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:26-05:00'
sources: []
---

**Situation**  
In my last role as an Oracle DBA, our production environment was experiencing frequent “temporary space exhausted” errors during peak reporting periods. The DBA team suspected that some long‑running SQL jobs were holding onto temp segments longer than expected.

**Task**  
I had to identify which sessions or processes were consuming temporary space at the time of failure so we could adjust their execution plans or schedule them differently.

**Action**  
First, I enabled `AUDIT SESSION` on the database to capture session activity. Then, using Oracle’s dynamic performance views, I queried `V$TEMPSEG_USAGE` and `DBA_TEMP_FREE_SPACE` every minute during a scheduled batch run. By joining these with `V$SESSION` I could map each temp segment allocation to its owning session ID and SQL text. I also added a lightweight PL/SQL trigger on the temporary tablespace that logged start and end timestamps into a custom audit table for later analysis.

**Result**  
The investigation revealed that a legacy report job was holding onto temp space for over 90 minutes due to an inefficient join order. After rewriting its query and adding proper indexes, the temporary segment usage dropped from 75 GB to 12 GB during peak hours, eliminating the exhaustion errors. I documented the process in our knowledge base, which reduced similar incidents by 40% in subsequent months.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
