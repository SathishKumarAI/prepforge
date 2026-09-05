---
qid: ing_cc2d0d8967__star__local
question: 'Explain: Changing Data Structures is Complicated — Bonsai Blog | Fully
  Managed Elasticsearch & OpenSearch \u2022 Why Elasticsearch should not be your Primary
  Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 371
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:17:18-05:00'
sources: []
---

**Situation**  
I was working on a product analytics platform that stored event streams in an OpenSearch cluster. We had a legacy schema with flat documents: `user_id`, `event_type`, and a single `payload` JSON blob. By Q3, our feature team needed to support richer analytics—dimensioned events, nested user profiles, and time‑series aggregations.

**Task**  
Redesign the data model so that new event types could be indexed without breaking existing dashboards or ingest pipelines, while keeping query latency under 200 ms for 1M daily events.

**Action**  
I first mapped out the access patterns: most reads were “events by user” and “aggregate counts over time.” I introduced an alias layer with `index_templates` to define multiple mappings per index type. For nested data, I used OpenSearch’s `nested` datatype and added a secondary index for denormalized aggregates. I built a migration script that streamed the old indices into new ones using the Reindex API, preserving versioning metadata. To avoid downtime, I set up a rolling update with “hot-warm” tiered nodes and enabled `read-only` mode on the legacy shards until all consumers pointed to the new aliases.

**Result**  
The transition completed in 48 hours with zero service interruption. Query latency dropped from 350 ms to 120 ms, and we reduced storage by 18% thanks to deduplication of common fields. I learned that careful aliasing and incremental reindexing are key: changing a data structure in OpenSearch is doable, but only if you treat the index as a versioned API surface rather than a monolithic table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
