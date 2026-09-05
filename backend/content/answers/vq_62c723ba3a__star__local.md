---
qid: vq_62c723ba3a__star__local
question: Udf example in Hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 347
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:29-05:00'
sources: []
---

**Situation** – In my last role we were ingesting click‑stream logs from a mobile app into HDFS. The raw data had an obfuscated user ID field that needed to be mapped back to the real email address for downstream analytics, but the mapping table was huge (≈50 M rows) and updated nightly.

**Task** – I had to create a fast, reusable way to resolve the user IDs on‑the‑fly during Hive queries without blowing up memory or requiring an external lookup service.

**Action** – I wrote a custom Java UDF called `resolve_user_email`. The UDF loaded the mapping table into a Bloom filter and a hash map at initialization (using Hadoop’s DistributedCache). Inside `evaluate(String obfId)`, it first checked the Bloom filter for quick negative filtering, then performed a hash‑map lookup to return the email. I packaged the UDF as a JAR, added it to Hive’s classpath, and registered it with `CREATE TEMPORARY FUNCTION resolve_email AS 'com.company.udf.ResolveUserEmail';`. In queries I used `resolve_email(obfuscated_id)` in SELECT clauses and WHERE predicates, enabling Hive to push the lookup into the map‑reduce job itself.

**Result** – Query latency dropped from ~12 min to under 2 min for a 200 GB dataset. The UDF also reduced network traffic by eliminating external lookups. I learned how to balance memory usage with lookup speed in Hive UDFs and the importance of pre‑filtering with Bloom filters for large reference tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
