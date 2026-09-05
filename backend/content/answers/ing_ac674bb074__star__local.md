---
qid: ing_ac674bb074__star__local
question: 'Explain: When do you build an agent versus a fixed workflow? The PM wants
  "an agent."'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 323
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:16-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with automating the quarterly compliance audit for our financial services client. Their existing process involved pulling data from three legacy systems, running a series of rule‑based checks, and then manually reviewing any exceptions.

**Task**  
The product manager insisted on “an agent” that could handle the entire workflow autonomously: ingest data, apply business rules, learn from feedback, and raise alerts without human intervention. My job was to decide whether an autonomous agent or a fixed workflow pipeline would be more appropriate, then design the solution accordingly.

**Action**  
I evaluated the variability of audit rules (≈20% change per quarter) and the volume of exceptions (~5% of transactions). For low‑variance, high‑volume steps I built a deterministic ETL pipeline with Airflow DAGs and scheduled SQL jobs. For the rule‑evaluation layer, I implemented a lightweight reinforcement‑learning agent that scored each transaction and updated its policy nightly using logged human overrides. The agent’s decisions were auditable via a logging service, and it could fall back to the fixed workflow if confidence dropped below 0.8.

**Result**  
The hybrid approach cut manual review time by 70% (from 12 hours to ~3.5 hours per audit cycle) and reduced error rates from 4.2% to 1.1%. I learned that agents shine when rule sets evolve rapidly, but deterministic pipelines remain essential for repeatable, auditable steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
