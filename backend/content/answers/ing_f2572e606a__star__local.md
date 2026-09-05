---
qid: ing_f2572e606a__star__local
question: 'Explain: Web Page Similarity and URL Duplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 347
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:46-05:00'
sources: []
---

**Situation:**  
At my previous job I was tasked with revamping the company’s web‑scraping pipeline for a competitive intelligence product. The crawl had grown from 10 k pages/day to over 1 million, and we were constantly ingesting duplicate content that bloated storage and skewed analytics.

**Task:**  
I needed to build an efficient system to detect both exact URL duplicates and semantically similar web pages so the crawler could prune redundant requests and reduce downstream processing costs by at least 40%.

**Action:**  
First, I implemented a canonicalization layer using URL‑normalization (scheme, host, path sorting) and hashed each cleaned URL into Redis as a Bloom filter to catch exact repeats. For similarity, I extracted TF‑IDF vectors from the page body, applied MinHash + LSH to cluster near‑duplicate documents in real time, and stored the resulting signatures in Elasticsearch. The crawler consulted these structures before issuing any HTTP request; if a signature matched an existing one, it skipped fetching and instead logged the reference. I also added a lightweight content checksum (MD5 of cleaned text) for quick sanity checks.

**Result:**  
The new deduplication logic cut our storage usage by 35% and reduced crawl time from 12 hours to 7 hours per cycle. We also improved data quality, leading to a 15% increase in the accuracy of sentiment scores derived from the scraped content. I learned that combining deterministic URL normalization with probabilistic similarity hashing can scale effectively for large‑scale crawls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
