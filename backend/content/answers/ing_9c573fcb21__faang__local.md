---
qid: ing_9c573fcb21__faang__local
question: 'Explain: 5.3 Create a New Post — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 503
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:47:26-05:00'
sources: []
---

**Clarify**  
We’re designing the “Create New Post” flow for an Instagram‑style app: users upload media (photo/video), add caption/hashtags/location, then publish. Key assumptions: 1) Users can post up to 5 GB of media; 2) Latency target < 3 s for typical uploads; 3) System must handle millions of concurrent posts daily; 4) Data is immutable once published; 5) We need strong consistency for the post’s metadata.

**Approach**  
1. **Client → Edge CDN**: Multipart upload with resumable chunks to an S3‑compatible store, using signed URLs.  
2. **Metadata Service** (stateless microservice): receives POST request, validates payload, writes a row in a partitioned Post table (PostID, UserID, MediaURL, Caption, Tags, Timestamp).  
3. **Event Bus**: Publish “post_created” event to Kafka for downstream services (feed generator, analytics, recommendation).  
4. **Content Delivery**: Store media in a CDN; cache thumbnails and low‑res previews.  
5. **Security & Quotas**: Rate‑limit per user, enforce storage quotas via DB triggers or sidecar.

**Depth**  
- *Data model*: Partition key = UserID, sort key = Timestamp (for feeds).  
- *Consistency*: Use a single writable shard for metadata; eventual consistency for feeds is acceptable.  
- *Scalability*: Horizontal scaling of the metadata service behind a load balancer; CDN handles media traffic.  
- *Failure handling*: If media upload fails, rollback metadata via compensating transaction.

**Edge Cases**  
- Network interruptions → multipart resume logic.  
- Duplicate uploads → idempotent request IDs.  
- Exceeding quota → reject with clear error.  
- Large videos → chunked transcoding pipeline triggered asynchronously.

**Optimize & Communicate**  
We can reduce latency by pre‑creating signed URLs and performing the upload in parallel. To improve cost, we offload heavy transcoding to a serverless worker triggered post‑publish. I would present this architecture as a diagram, walk through a user’s journey, highlight trade‑offs (strong vs eventual consistency), and conclude with how each component satisfies FAANG scalability & reliability criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
