---
qid: vq_99f600a830__aws__local
question: What are Dataset, Linked Service and IR ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 436
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:10-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task** – In my last role I led the migration of a 3 TB on‑prem data lake to Azure Synapse for a financial services client. The team needed clear definitions for **Dataset**, **Linked Service**, and **Integration Runtime (IR)** so that automated pipelines could be built without hard‑coding credentials or schema.

**Action** –  
1. **Dataset**: I defined it as the *logical representation* of data (schema, format, location) that a pipeline reads from or writes to. I created reusable JSON schemas for each source table and stored them in a Git repo so any new pipeline could reference the same definition.  
2. **Linked Service**: I treated this as the *connection metadata*—host, authentication type, and other connection properties. I used Azure Key Vault secrets for passwords and managed identities for service principals to avoid credential leakage.  
3. **Integration Runtime (IR)**: I distinguished between *Azure IR* (cloud‑native) for copying data within Azure, *Self‑Hosted IR* for on‑prem sources, and *SSIS IR* for legacy SSIS packages. I set up a multi‑region Azure IR cluster to reduce latency for the EU client.

**Result** – The pipelines now reuse 80 % of their configuration across environments, cutting new pipeline development time from **3 weeks → 1 day**. Cost dropped by **35 %** because we eliminated unnecessary on‑prem compute. I documented the design in Confluence and led a knowledge‑share session that raised team confidence in data‑engineering patterns.

**Leadership Principles** – *Customer Obsession* (deliver fast, reliable pipelines), *Ownership* (own end‑to‑end data flow definition).  

**Bar‑raiser cues** – Clear ownership of each component, deep dive into security and cost trade‑offs, measurable impact on dev velocity, and lessons learned from earlier manual setups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
