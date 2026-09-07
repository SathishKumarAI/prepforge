---
qid: ing_74451498a7__aws__local
question: 'Explain: Write a parser that consumes a streamed LLM response (server-sent
  events) arriving in arbitrary network chunks and yields complete JSON events.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 549
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:56-05:00'
sources: []
---

**Situation** – While leading the *LLM‑Streaming Service* at my previous company, we exposed a public API that returned server‑sent events (SSE) from an LLM backend. Clients received data in arbitrary TCP fragments; our goal was to expose a clean, high‑throughput JSON stream without buffering entire responses.

**Task** – Build a **streaming parser** that ingests raw SSE chunks, reassembles them into complete JSON objects, and emits them downstream with minimal latency, while staying cost‑efficient on AWS.

**Action**  
1. **Architecture** – Implemented the parser as an **AWS Lambda@Edge** function (or Fargate microservice for larger payloads) behind a CloudFront distribution to guarantee low‑latency, region‑local execution.  
2. **Buffering & Parsing** – Maintained an in‑memory `bytes.Buffer` per connection. On each `chunk_received`, append bytes and scan for the SSE terminator (`\n\n`). For every complete event block:  
   * Strip the “data:” prefix, trim whitespace, and unmarshal with `json.Unmarshal`.  
   * Emit via a **Kinesis Data Streams** shard to downstream analytics services.  
3. **Error Handling & Backpressure** – If JSON unmarshalling fails, log the raw payload to S3 (via Lambda’s retry policy) and continue; if buffer grows beyond 1 MB, throttle upstream by sending an HTTP `429` back‑to‑origin.  
4. **Scalability/Cost** – Lambda scales automatically; cold starts are negligible due to Edge deployment. Using Kinesis gives at‑least‑once delivery with fine‑grained scaling. Cost per event is < $0.00004, well below our target of <$0.001.

**Result** – Reduced average latency from 320 ms to **58 ms** (a 82% improvement). The system handled >50k concurrent streams with <1 % error rate, and the cost savings were 35 % compared to a monolithic Go service.  
I iterated on failure scenarios: after an outage where partial SSE fragments caused data loss, I added idempotency keys in Kinesis shards—now we can replay exactly 100% of events with no duplication.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered a fast, reliable API that met client SLAs.  
- **Ownership & Dive Deep** – Diagnosed fragmentation bugs, engineered buffer limits, and tuned Lambda concurrency until metrics met targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
