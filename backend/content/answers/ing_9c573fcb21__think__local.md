---
qid: ing_9c573fcb21__think__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 531
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:24:10-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm whether the interview question is *“design an Instagram‑style post creation feature”* or a broader system‑design task.  
- Assume we’re building for millions of users with real‑time feeds, media uploads, and high availability.  
- Decide on scope: focus on post ingestion (image/video + metadata) rather than the entire feed algorithm.

**2️⃣ Adopt a design framework**  
- *User story → Core use cases* → *High‑level components* → *Data flow & persistence* → *Scalability & reliability* → *Trade‑offs*.  
- Use the “5‑step system design” pattern: 1) Problem restatement, 2) Requirements (functional/non‑functional), 3) High‑level architecture, 4) Detailed component design, 5) Edge cases & future improvements.

**3️⃣ Step‑by‑step reasoning**  
a. **Identify actors** – user, upload service, media processor, database, CDN, feed generator.  
b. **Sequence the flow** – user submits post → API gateway → validation → store metadata in DB → async job uploads media to object storage → transcoding workers → generate thumbnails → update DB + publish event.  
c. **Choose data stores** – relational (PostgreSQL) for metadata, NoSQL (Cassandra/ DynamoDB) for feeds, object store (S3) for media.  
d. **Decouple with messaging** – Kafka or SQS for async processing and eventual consistency.  
e. **Consider caching & CDN** – cache popular posts in Redis, serve media via CloudFront.

**4️⃣ Common traps to avoid**  
- Forgetting *eventual consistency* between metadata DB and feed store.  
- Assuming all users upload same size media; ignore large file handling (chunked uploads).  
- Ignoring security: authentication, authorization, and rate limiting on the API.  
- Over‑optimizing early; focus first on correctness then scale.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does every step handle failure? What happens if transcoding fails?”  
- Verify that latency stays within user expectations (≤ 2 s for UI).  
- Reiterate the trade‑offs: e.g., using a CDN increases cost but improves global latency.  
- Conclude with open questions you’d ask the interviewer to refine assumptions or constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
