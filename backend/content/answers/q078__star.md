---
qid: q078
question: "What is ETL and how does it differ from ELT?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** I took over a nightly data pipeline that pulled from a dozen sources into a legacy on-prem warehouse, and it was constantly breaking when source schemas changed, with transformations locked in brittle scripts.

**Task** I was asked to modernize the pipeline as we migrated to a cloud warehouse and make it more resilient and flexible.

**Action** The old design was classic ETL: extract from sources, transform in a middle-tier server, then load clean data into the warehouse, which meant every new question required re-running expensive transforms. On the cloud platform I flipped it to ELT: extract and load raw data straight into the warehouse first, then transform in-warehouse using SQL with dbt. Because storage was cheap and the warehouse compute was elastic, keeping raw data and transforming on read gave analysts freedom to reshape data without touching the ingest layer. I kept ETL only where we had to mask PII before landing it.

**Result** Pipeline failures dropped sharply, and new transformations that used to take days shipped in hours. The distinction I hold onto: ETL transforms before loading for tight control, ELT loads raw and transforms after, which suits scalable cloud warehouses.
