---
qid: ing_cb1992b231__eli5__local
question: 'Explain: Post Uploads (Writes) — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 217
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:01-05:00'
sources: []
---

**Imagine a giant photo‑journalist who wants to share every picture instantly with millions of readers.**  
When someone “posts” on Instagram, the app first takes the image (the *payload*), then writes it into a storage system that can hold billions of files—think of it as a vast, well‑organized library shelf where each photo gets its own labeled slot.  

Next, the system updates two lists:  
1. **User’s feed** – a personal “photo diary” that shows all their pictures in order.  
2. **Global timeline** – a shared wall that other users can scroll through.  

To keep this fast, Instagram splits the work into tiny tasks (like having many librarians copy the same photo to different shelves) and keeps copies of each image in several places so no single point fails. The result is a smooth, instant upload for everyone, even when millions are posting at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
