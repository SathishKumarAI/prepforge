---
qid: vq_649cf3f183__eli5__local
question: How to you create Singleton classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 226
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:46-05:00'
sources: []
---

Imagine your data‑pipeline has a single “traffic light” that tells every part of the system whether it can read or write to the database.  
In Scala you make this traffic light a **singleton class** so there is only one instance everywhere, just like a real traffic light.

1. **Create an object** (Scala’s keyword for a singleton).  
   ```scala
   object DatabaseTrafficLight {
     var allowed = false          // a simple flag – “unavoidable term”
   }
   ```
2. **Access it anywhere**: `DatabaseTrafficLight.allowed = true` or read its value with `DatabaseTrafficLight.allowed`.

Because an `object` is instantiated automatically once and never again, all parts of your program share the same state—exactly what a singleton guarantees. No need for constructors, `lazy val`, or synchronization; Scala’s `object` does it for you.

That’s all: a single, shared traffic light that keeps your data engineering workflow running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
