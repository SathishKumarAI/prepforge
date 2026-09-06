---
qid: vq_649cf3f183__faang__local
question: How to you create Singleton classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:38-05:00'
sources: []
---

**Clarify**  
You’re asking how to implement a *singleton* (one‑instance) object that is lazily initialized and thread‑safe in Scala, typical for data‑engineering utilities like a Spark session or a connection pool.

**Approach**  
1. Use Scala’s `object` if you need a pure singleton.  
2. For more control (lazy init, parameters), create a class with a private constructor and expose a lazy `val` in an enclosing object.  
3. Ensure thread safety via the JVM’s class‑loading guarantees or by using `scala.concurrent.SyncVar`/`AtomicReference`.

**Depth**  

```scala
// 1️⃣ Simple eager singleton
object DataSource {
  val spark = SparkSession.builder.appName("ds").getOrCreate()
}

// 2️⃣ Lazy, parameterized singleton
class DataPool private(val url: String) { /*…*/ }

object DataPool {
  @volatile private var instance: Option[DataPool] = None

  def get(url: String): DataPool =
    instance match {
      case Some(p) => p
      case None =>
        synchronized {
          instance.getOrElse {
            val p = new DataPool(url)
            instance = Some(p)
            p
          }
        }
    }
}
```

- **Complexity**: O(1) for access; construction is O(n) in the pool size.  
- **Trade‑offs**: `object` gives eager init; lazy approach defers cost but adds synchronization overhead.

**Edge Cases**  
- Multiple threads racing to create the instance → handled by double‑checked locking.  
- Failures during initialization → wrap constructor in `Try`; propagate or retry.  
- Testing requires mocking the underlying resources and ensuring only one instance per JVM.

**Optimize & Communicate**  
If you need a *global* singleton across multiple applications, consider using Akka’s `ClusterSingleton` or a distributed cache (e.g., Redis). Always document the lifecycle: when to create, destroy, and how to handle graceful shutdown in a data‑engineering pipeline. This keeps interviewers impressed with both technical depth and system‑design awareness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
