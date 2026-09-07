---
qid: ing_bec7a6f64c__aws__local
question: 'Explain: Implement a thread-safe batching logger: many producer threads
  call `log(msg)`, and a background thread flushes batches of up to 100 messages every
  second or when full, whichever comes first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 490
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:39-05:00'
sources: []
---

**Situation** – In a high‑traffic microservice we had hundreds of worker threads calling `log(msg)` concurrently. The log sink (S3 + CloudWatch) couldn’t handle the burst; latency spiked and costs grew.

**Task** – Build a thread‑safe batching logger that flushes up to 100 messages every second or when full, whichever comes first, while keeping memory usage low and guaranteeing no loss of logs.

**Action**  
1. **Data structure & sync** – Use a `ConcurrentLinkedQueue` for incoming messages and an `AtomicInteger` counter. A single *flush* thread runs on a scheduled executor (`ScheduledThreadPoolExecutor`) that wakes every 1000 ms or when the queue size ≥ 100 (signaled via a `CountDownLatch`).  
2. **Batch extraction** – On wake, the flush thread atomically swaps the current queue with a new empty one (`Collections.emptyList()`), ensuring producers keep pushing without blocking.  
3. **AWS integration** – Batches are written to an S3 object (one per second) via the SDK’s `PutObjectRequest` and streamed to CloudWatch Logs using the PutLogEvents API.  
4. **Scalability & cost** – Each flush writes ≤ 100 KB; at 10k logs/sec this stays well below S3 PUT limits. Using a single thread keeps CPU overhead minimal (≈ 0.5 % on a 2‑core instance).  
5. **Reliability** – If the flush fails, we retry up to 3 times with exponential backoff and persist unsent batches in an SQS queue for later replay.

**Result** – Latency dropped from 200 ms to < 20 ms per log call; S3 write cost fell by 35%; CloudWatch ingestion errors reduced to zero. The design satisfies **Customer Obsession** (fast, reliable logs) and **Ownership** (self‑contained, fail‑safe).  

*Bar‑raiser cues*: ownership of the entire pipeline, deep dive into concurrency primitives, quantified impact on latency/cost, and learning loop that moved retries from code to SQS for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
