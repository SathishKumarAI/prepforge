---
qid: ing_43ab4c65aa__aws__local
question: 'Explain: Consistency patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 504
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:20-05:00'
sources: []
---

**Context & Goal**  
When designing a distributed ML inference service we faced *eventual‑consistency* vs. *strong consistency* trade‑offs for model metadata (e.g., version tags). I led the team to adopt **read‑through cache with write‑back pattern** so that every request hit the most recent model without blocking on primary storage.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| 1 TB of model metadata in S3, read latency 200 ms | Ensure <50 ms per inference request while keeping data fresh | • Built a DynamoDB table as the canonical source (strongly consistent reads).<br>• Added an ElastiCache Redis layer with TTL=30 s for hot keys.<br>• Implemented a background Lambda that invalidates cache on S3 object change events. | **Latency dropped 80 %** (from 200 ms to 40 ms) and read throughput scaled to 10k RPS without increasing cost >15 %. |

### Technical Design
- **Services**: S3 (immutable storage), DynamoDB (metadata catalog, strong consistency), ElastiCache Redis (cache), Lambda + EventBridge (invalidation).  
- **Scalability**: Cache shards auto‑scale with CloudWatch; DynamoDB provisioned capacity adjusted via Adaptive Capacity.  
- **Availability**: Multi‑AZ deployments for all services; fallback to DynamoDB if cache miss occurs.  
- **Cost**: 30 s TTL keeps Redis usage <10 % of peak, Lambda invocations <$0.1k/month.

### Amazon Lens
- **Customer Obsession**: Reduced inference latency directly improves user experience on the ML platform.  
- **Ownership & Dive Deep**: I traced a 200 ms latency spike to stale cache entries and engineered an automated invalidation pipeline.  
- **Bias for Action**: Deployed the solution in a staging environment within two weeks, validated with A/B testing before production roll‑out.  

**Learning**: Initially we over‑cached for too long (TTL=5 min), causing staleness. After observing user complaints, I shortened TTL and added event‑driven invalidation—an iterative improvement that balanced consistency with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
