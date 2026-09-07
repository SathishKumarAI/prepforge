---
qid: vq_8e6560dedc__aws__local
question: What are the functions help() and dir() used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 365
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:11-05:00'
sources: []
---

**Answer (Amazon style)**  

*Situation:* While refactoring a Python‑based Lambda that parsed S3 event payloads, I discovered the function signature had changed in a new dependency version.  
*Task:* Quickly identify the available methods and their docstrings to adjust my code without breaking the 5 % SLA on invocation latency.  
*Action:* I used `dir(my_module)` to list all attributes exposed by the module—this gave me the exact method names that were still present, even after a silent rename. Then I called `help(my_module.some_method)` to pull the built‑in documentation string and parameter list directly in the REPL, allowing me to understand required arguments without digging through external docs.  
*Result:* The change was fixed within 12 minutes, restoring 99.9 % availability for 1,200 invocations per day and keeping our cost below $0.02/100 000 calls (Lambda + CloudWatch).  

**Leadership Principles Anchored:** *Customer Obsession* – ensuring uninterrupted service; *Dive Deep* – inspecting internals to troubleshoot quickly.  

**Bar‑raiser cues:** Demonstrated ownership of the issue, used deep introspection tools (`dir`, `help`) for rapid diagnosis, quantified impact on latency and cost, and learned that keeping docs in code (docstrings) saves operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
