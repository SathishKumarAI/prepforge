---
qid: ing_4e3c51b7fc__star__local
question: 'Explain: Comparison with Traditional Automation — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:08-05:00'
sources: []
---

**Situation**  
In my last role, we had a legacy batch‑processing pipeline that ran nightly on a mainframe. It processed customer orders, applied discounts, and updated inventory. The team spent hours each week debugging scripts, handling exceptions manually, and the system would stall when an unexpected data format appeared.

**Task**  
I was tasked with reducing downtime by 40 % and cutting manual exception handling time to under five minutes per incident, while keeping compliance with audit requirements.

**Action**  
Instead of rewriting the entire batch job, I introduced a lightweight computer‑use agent (CUBA) that monitored the mainframe’s terminal output in real time. Using Python’s `pexpect` library, the agent parsed each screen, identified error patterns, and automatically invoked predefined macros to correct common data entry mistakes. For more complex cases it triggered a rule‑based decision engine built on Drools, which generated remediation scripts that ran back on the mainframe. I also integrated Slack notifications so the ops team could see alerts instantly and confirm resolution.

**Result**  
The automation reduced manual exception handling from 90 minutes to just 3 minutes per incident, cutting downtime by 45 %. System uptime rose from 97 % to 99.5 %, and we saved roughly $30k annually in labor costs. I learned that a focused computer‑use agent can complement legacy systems without costly rewrites, provided it respects the existing audit trail and offers transparent logging for compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
