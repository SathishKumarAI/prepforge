---
qid: ing_7318e6fc5e__eli5__local
question: 'Explain: Lower Latency — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 210
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:38:58-05:00'
sources: []
---

Imagine you’re sending a pizza from a kitchen to many hungry friends spread across the city. If every friend had to wait for the same long delivery truck that always takes the main highway, some would arrive after hours—unacceptable when everyone wants it hot and fresh. A **Content Delivery Network (CDN)** solves this by placing tiny “pizza kitchens” in neighborhoods close to your friends. When a friend asks for a pizza, the request goes to the nearest kitchen instead of the distant central one, so the pizza arrives quickly.

In computing, the “pizza” is data (images, videos, web pages). A CDN keeps copies of that data on servers all over the world. When you load a site, your browser talks to the server closest to you, cutting travel time and reducing **latency**—the delay between request and response. This makes websites feel snappier, just like a hot pizza delivered in minutes rather than hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
