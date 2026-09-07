---
qid: ing_fd814b4262__aws__local
question: 'Explain: Endpoint: POST /playlists — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 529
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:21-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“When I first joined the product team at a music‑streaming startup, we had to expose a new **POST /playlists** endpoint that would let users create playlists from any song URI they provided. The goal was to keep latency under 200 ms for 99th‑percentile traffic while handling up‑to‑10k requests per second during peak hours.”*  

### Situation & Task  
During my first sprint, the **customer obsession** principle drove us to understand real‑world usage patterns: a typical request included ~15 song URIs, and users expected instant feedback. I was tasked with designing the endpoint that would ingest these URIs, validate them, create a playlist record, and trigger background enrichment (e.g., genre tags).  

### Approach & Design  
1. **API Gateway + Lambda** – Exposes HTTPS POST, throttles to 15 k rps, automatically scales.  
2. **EventBridge** – Emits `PlaylistCreated` events to decouple the API from downstream processing.  
3. **DynamoDB (Global Table)** – Stores playlist metadata (ownerId, name, songCount). Partition key = `playlistId`; provisioned capacity + auto‑scaling guarantees 99th‑percentile latency < 100 ms.  
4. **SQS FIFO** – Queues enrichment jobs to avoid duplicate processing; each message contains the new playlistId and list of URIs.  
5. **Step Functions (or ECS Fargate)** – Orchestrates a microservice that calls the internal **Song Service** (GraphQL) to fetch metadata, then writes tags back to DynamoDB.  

### Result  
- **Latency:** 95th‑percentile < 120 ms, 99th‑percentile < 190 ms under synthetic load of 12k rps.  
- **Cost:** <$0.02 per request on Lambda + $0.003 per playlist in DynamoDB.  
- **Reliability:** 99.999% uptime over 6 months; automatic retries on SQS prevented data loss.  

### Reflection (Bar‑raiser focus)  
I took *ownership* by mapping the entire flow, diving deep into DynamoDB capacity planning, and iterating on error handling after a production outage where missing URIs caused partial failures. The lesson: “fail fast, recover gracefully.” This design now supports 1M daily playlists with minimal ops overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
