---
qid: ing_71089e66e7__star__local
question: 'Explain: Images MetaData - DB Schema — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:35-05:00'
sources: []
---

**Situation:**  
When my team built a cross‑platform content recommendation engine for a startup that wanted to pull data from both Facebook and Instagram, we discovered the image feeds were cluttered with duplicate posts and missing context. The marketing dashboard was showing a 30 % drop in engagement because users couldn’t trust the metadata quality.

**Task:**  
I needed to design a unified database schema that could ingest raw media objects from each platform’s API, normalize fields like captions, hashtags, timestamps, and store them with a clear provenance flag so downstream ML models would learn accurate user intent.

**Action:**  
I started by mapping Facebook’s `photos` endpoint (fields: `id`, `link`, `created_time`, `message`) and Instagram’s `media` object (`id`, `caption`, `timestamp`, `permalink`). I created a single `images_meta` table with columns: `image_id PK`, `source ENUM('FB','IG')`, `platform_id`, `url`, `caption_text`, `tags TEXT`, `created_at TIMESTAMP`, `provenance JSONB`. To dedupe, I implemented a SHA‑256 hash of the caption + timestamp stored in an index. For ingest, I wrote an Airflow DAG that fetched batches via Graph API and Instagram Basic Display, transformed data into the schema, and used Kafka for real‑time updates.

**Result:**  
After deployment, duplicate posts dropped from 18 % to <2 %, and the recommendation model’s precision improved by 12 pp, lifting overall engagement by 15 %. I learned that a well‑thought‑out metadata layer not only cleans data but also accelerates downstream ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
