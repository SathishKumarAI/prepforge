---
qid: vq_649cf3f183__fp__local
question: How to you create Singleton classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 440
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:07-05:00'
sources: []
---

**Why a singleton is needed**

In data‑engineering pipelines we often have state that must be shared across jobs—configuration, thread pools, or cached schemas. The *singleton pattern* guarantees a single instance so all components see the same state and avoid costly re‑initialisation.

**The Scala idiom**

Scala’s companion object is the natural singleton implementation:

```scala
class DataSource private (config: Config) {
  def query(sql: String): DataFrame = …
}
object DataSource {
  @volatile private var instance: Option[DataSource] = None

  def getInstance(config: Config): DataSource =
    instance.getOrElse(synchronized {
      instance match {
        case Some(ds) => ds
        case None =>
          val ds = new DataSource(config)
          instance = Some(ds)
          ds
      }
    })
}
```

* `private` constructor prevents external instantiation.  
* The `@volatile` flag and double‑checked locking ensure thread safety without serialising every call.  
* Lazy evaluation defers creation until first use, saving resources for unused pipelines.

**Underlying principle**

This is a *lazy‑initialized, thread‑safe memoisation* of a function from `Config` to `DataSource`. The singleton guarantees that the expensive constructor runs only once, satisfying the optimisation constraint: *minimise side‑effects while preserving global consistency.*

**Non‑obvious insight**

Because Scala’s objects are themselves singletons, you can expose the instance directly:

```scala
object DataSource {
  private val ds = new DataSource(defaultConfig)
  def apply(sql: String): DataFrame = ds.query(sql)
}
```

Here `apply` turns the object into a *function‑like* singleton. This pattern hides the class entirely, reducing boilerplate for callers and aligning with functional‑style APIs common in data‑engineering libraries. It also allows you to change the underlying implementation (e.g., switch to a connection pool) without affecting client code—an elegant encapsulation that many overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
