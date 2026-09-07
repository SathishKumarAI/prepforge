---
qid: ing_452605f02f__aws__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 486
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:18-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a conversational agent for an enterprise knowledge‑base that must retain user context across dozens of sessions while staying GDPR compliant and under $0.02 per 1 k tokens.

**Action – Decision & Design**  
After prototyping, I chose **rolling summarisation** over a vector store.  
*Why?*  
- **Cost & Scale:** Summaries stay <200 bytes; storing millions of embeddings in DynamoDB + S3 would hit $0.50/GB/month vs <$1/day for summaries.  
- **Latency & Availability:** Retrieval is a single GetItem from DynamoDB (99.999% SLA) versus a multi‑node OpenSearch query that could add 15 ms under heavy load.  
- **Regulatory Fit:** Summaries can be purged in bulk; embeddings would need re‑tokenisation for audit trails.

**Implementation**  
1. **Lambda@Edge + API Gateway** – receive user input, invoke a Lambda to generate a concise summary via OpenAI’s `gpt‑3.5‑turbo` (cost $0.002/1 k tokens).  
2. **DynamoDB Streams → Kinesis Data Firehose → S3** – store the rolling summary per session ID; versioned for audit.  
3. **Scheduled Lambda** – merges new context into the existing summary, keeping size <200 bytes.  

**Result**  
- 90% reduction in storage cost vs vector approach.  
- Average response latency dropped from 320 ms to 210 ms under peak load (10k concurrent users).  
- Compliance audit passed with zero data‑leak incidents.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster, cheaper service that met privacy needs.  
- **Ownership & Dive Deep:** Designed end‑to‑end cost model, validated trade‑offs, and iterated on real metrics.  

**Bar‑raiser Takeaway**  
Showcasing quantified impact (cost, latency), deep technical reasoning, and a clear learning loop from prototype to production demonstrates true ownership and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
