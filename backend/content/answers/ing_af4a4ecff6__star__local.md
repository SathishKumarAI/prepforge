---
qid: ing_af4a4ecff6__star__local
question: 'Explain: Docker — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 371
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:45-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a new search‑heavy feature for our e‑commerce platform. The team had no dedicated Solr cluster, and the QA environment kept crashing when we scaled up to simulate traffic spikes.

**Task** – I needed to provision a consistent, reproducible Solr instance that could be spun up locally, in staging, and on the cloud, all while keeping configuration manageable and ensuring performance benchmarks (≤ 200 ms query latency under 5k concurrent users).

**Action** – I created a lightweight Docker image based on `solr:8.11`. Inside the container I mounted a `solrconfig.xml` that enabled request caching and tuned `numShards=4` for distributed search. I scripted a `docker‑compose.yml` to launch a 3‑node SolrCloud cluster, each node exposing port 8983, and used environment variables (`SOLR_HEAP`, `ZK_HOST`) to control JVM size and ZooKeeper coordination. To speed up local testing, I added a healthcheck that waited for `/solr/admin/ping`. The Dockerfile also pulled the latest security patches from Alpine, ensuring no outdated libraries were exposed.

**Result** – Deploying via Docker cut our environment spin‑up time from 45 minutes to under 5 minutes. QA reported consistent query latencies of 180–190 ms under load, and we avoided the previous “out‑of‑memory” crashes. I learned how containerization can isolate configuration, simplify scaling with SolrCloud, and provide a single source of truth for deployment across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
