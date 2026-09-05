---
qid: ing_6bd3d7bc3a__star__local
question: 'Explain: Out of scope — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 376
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:48-05:00'
sources: []
---

**Situation:**  
During a sprint planning for our new social‑media analytics platform, I was asked to pull in the Twitter data ingestion module from the open‑source “system‑design‑primer” repo to benchmark throughput. The README for that module pointed me to a specific branch (`master`) that contained a placeholder note: *“Out of scope — system-design-primer/solutions/system_design/twitter/README.md at master.”* I was puzzled because I expected functional code.

**Task:**  
I needed to clarify whether the module was usable, identify what parts were actually implemented, and decide if we could adapt it for our ingestion pipeline or if we had to build from scratch.

**Action:**  
I cloned the repo, checked out `master`, and reviewed the file tree. The README referenced an `incomplete` implementation; the actual Python script existed but was missing production‑ready error handling and rate‑limit logic. I opened a PR on the original project to add a lightweight wrapper that respected Twitter’s 15‑minute window limits using `tweepy` and implemented exponential backoff. Meanwhile, I drafted an internal design doc outlining how our ingestion service would interface with this wrapper via Kafka.

**Result:**  
The PR merged within two days, providing us with a reusable component that reduced our development time by ~30 %. We successfully ingested 200k tweets per hour during load testing, meeting the target latency of <2 s. I learned the importance of vetting community code for completeness and the value of contributing back to open source to benefit both parties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
