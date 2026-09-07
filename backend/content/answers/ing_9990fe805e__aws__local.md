---
qid: ing_9990fe805e__aws__local
question: 'Explain: Crawling — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 508
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:54-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of our internal knowledge‑base search to reduce query latency from 1.8 s to under 300 ms while scaling from 10k to 2M indexed pages.

**Action**  
I owned the crawl‑engine architecture, starting with a **dive‑deep** analysis of current bottlenecks: slow HTTP fetches, unstructured data ingestion, and duplicate content. I designed a distributed crawler on **Amazon EC2 Spot Instances** (auto‑scaling groups) that fetched URLs in parallel, throttled per host to respect politeness, and stored raw HTML in **S3**. A **Lambda** pipeline parsed the markup with BeautifulSoup, extracted title/description meta tags, and persisted clean tokens into a **DynamoDB** table keyed by URL hash.

For search ranking I built a lightweight **Elasticsearch** domain on **Amazon OpenSearch Service**, ingesting documents via **Kinesis Data Streams** to keep index latency below 5 s. The crawler updated the stream with incremental changes, enabling near‑real‑time search freshness.

I applied **Customer Obsession** by creating an internal A/B test: a new relevance algorithm boosted click‑through rate from 12 % to 19 % (Δ7 pp). I also set up CloudWatch dashboards and automated alerts; when the crawler hit >90 % CPU on EC2, the system auto‑scaled, preventing outages.

**Result**  
- Query latency ↓ 83 % (1.8 s → 0.3 s)  
- Index size grew from 50 GB to 500 GB without cost overruns (spot pricing saved ~30 %).  
- Search relevance improved by 7 pp, directly correlating with a 4 % lift in user engagement.

**Bar‑raiser notes I’ll listen for:** ownership of full stack, depth of design trade‑offs (scalability vs. cost), quantified impact on business metrics, and lessons learned from scaling the crawler under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
