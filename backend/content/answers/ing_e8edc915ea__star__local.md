---
qid: ing_e8edc915ea__star__local
question: 'Explain: Video and Thumbnail storage — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 370
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:00-05:00'
sources: []
---

**Situation** – In my last role at a media startup, we were building an internal video platform to host user‑generated content similar to YouTube. Our initial prototype stored every MP4 and its thumbnail in a single relational database table, which caused slow queries and high storage costs as the library grew to over 100 k videos.

**Task** – I was tasked with redesigning the storage architecture so that video playback latency dropped below 200 ms for 95% of users, while keeping cost per GB under $0.02/month and ensuring thumbnails could be served at 10× the traffic volume during peak hours.

**Action** – I moved all media files to Amazon S3 with a versioned bucket layout (userID/videoID/). For streaming I configured CloudFront edge caches with signed URLs, enabling adaptive bitrate HLS segments stored in separate “stream” prefixes. Thumbnails were pre‑generated at multiple resolutions using AWS Lambda and stored in an S3 “thumbs” prefix; I added a DynamoDB table to index metadata (URL, size, MIME). I also implemented lifecycle policies to transition infrequently accessed videos to Glacier after 90 days.

**Result** – After deployment, the average video start‑up latency fell from 1.2 s to 0.15 s for 98% of requests. Storage costs dropped by 35%, and thumbnail hit rates at peak exceeded 99%. I learned how to balance CDN caching, object storage tiers, and metadata indexing to scale a video platform cost‑effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
