---
qid: ing_bec7a6f64c__faang__local
question: 'Explain: Implement a thread-safe batching logger: many producer threads
  call `log(msg)`, and a background thread flushes batches of up to 100 messages every
  second or when full, whichever comes first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 606
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:07-05:00'
sources: []
---

**Clarify**  
We need a logger that accepts concurrent `log(msg)` calls from many threads and writes them in batches. A single background thread flushes up to 100 messages *or* after 1 s, whichever triggers first. Assumptions:  
- Messages are simple strings (no ordering guarantee beyond FIFO).  
- Flush means write to a sink (file/console) atomically per batch.  
- The system must never lose or duplicate logs.

**Approach**  
Use a lock‑free ring buffer or `BlockingQueue` for producers, and a dedicated consumer thread that wakes on timeout or when the queue reaches 100 items. Producers only enqueue; the consumer dequeues in bulk. A condition variable can signal “batch ready” to avoid busy‑waiting.

**Depth**  
```java
class BatchingLogger {
    private final BlockingQueue<String> q = new ArrayBlockingQueue<>(1000);
    private final ExecutorService bg = Executors.newSingleThreadExecutor();
    private volatile boolean running = true;

    public void log(String msg) { q.offer(msg); }

    public BatchingLogger() {
        bg.submit(() -> {
            List<String> batch = new ArrayList<>(100);
            while (running || !q.isEmpty()) {
                String first = q.poll(1, TimeUnit.SECONDS); // wait max 1s
                if (first != null) batch.add(first);
                q.drainTo(batch, 99);                       // fill up to 100
                if (!batch.isEmpty()) flush(batch);
            }
        });
    }

    private void flush(List<String> batch) {
        // write batch atomically
        System.out.println("Flushed " + batch.size() + ": " + batch);
        batch.clear();
    }

    public void shutdown() { running = false; bg.shutdown(); }
}
```
*Complexity*: O(1) per log, O(k) flush where *k* ≤ 100.  
*Trade‑offs*: `ArrayBlockingQueue` caps memory (set high enough). The consumer wakes on every poll timeout or when the queue is non‑empty.

**Edge Cases**  
- Producers outpace consumer → queue fills → `offer` blocks; consider `LinkedBlockingQueue`.  
- Shutdown while batch in progress → loop condition ensures remaining items flush.  
- Messages larger than buffer capacity → handle with back‑pressure or drop policy.

**Optimize & Communicate**  
We can replace the queue with a lock‑free ring buffer to eliminate GC pressure, and use `java.util.concurrent` atomic counters for metrics. In an interview, I’d explain why a single consumer thread is safe (no contention) and how the timeout guarantees latency ≤ 1 s. This shows clear problem framing, sound design, and awareness of edge conditions—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
