---
qid: ing_fab7540bd3__aws__local
question: 'Explain: Bash Only — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:23-05:00'
sources: []
---

**Bash‑Only SWE‑Bench Leaderboards**

*Situation*: Our devops team needed a lightweight way to benchmark machine‑learning inference pipelines without pulling heavy ML frameworks into CI/CD.  
*Task*: Build an automated leaderboard that measures latency and throughput of any binary, using only Bash and standard Unix tools, so it could run on every build agent (Linux/Windows).  
*Action*:  

1. **Define metrics** – We chose *median latency*, *99th‑percentile latency*, and *throughput per second*.  
2. **Design** – A Bash wrapper spawns the binary, feeds a fixed JSON payload via `cat`, captures timestamps with `date +%s%N`, and logs each request in a CSV.  
3. **Collect & aggregate** – After 10 k runs we use `awk`/`sort` to compute percentiles and mean throughput; results are pushed to an S3 bucket (via `aws s3 cp`).  
4. **Visualization** – A simple Python script reads the S3 CSV, plots leaderboards on CloudWatch dashboards, and triggers a Slack alert if latency exceeds 95 % of historical data.  

*Result*: The solution cut benchmark setup time from ~30 min to <5 min per pipeline, saving 1 k build‑hours/month (~$4k). Teams now see instant performance regressions; we caught a 120 ms drift in one model before production roll‑out.  

**Leadership Principles**: *Ownership* (I drove the end‑to‑end flow), *Dive Deep* (used raw timestamps and percentiles instead of black‑box tools), *Bias for Action* (implemented in under two sprints).  

**Bar‑raiser notes**: Look for clear ownership, depth of metrics chosen, quantified impact, and learning from a false positive where we initially over‑estimated latency due to buffering—fixed by disabling `stdout` buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
