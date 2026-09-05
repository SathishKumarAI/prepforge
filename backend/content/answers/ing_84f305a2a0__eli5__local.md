---
qid: ing_84f305a2a0__eli5__local
question: What are the differences between HashMap and HashTable in Java?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 283
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:07:29-05:00'
sources: []
---

Think of a **HashMap** and a **Hashtable** as two different kinds of filing cabinets that let you store “key‑value” pairs—like a name (key) and a phone number (value).

| Feature | HashMap | Hashtable |
|---------|--------|-----------|
| **Thread safety** | Not safe for concurrent use unless you wrap it or use `Collections.synchronizedMap`. | Built‑in synchronization: only one thread can touch it at a time. |
| **Null values** | Allows *one* null key and any number of null values. | No null keys or values allowed; they throw an exception. |
| **Performance** | Faster in single‑threaded code because there’s no locking overhead. | Slower when many threads run, but safe if you need it. |
| **Legacy** | Newer (since Java 1.2), part of the `java.util` package. | Old (before Java 1.0), in `java.util`. |

So, if your program runs on a single thread or you’ll add your own synchronization, choose **HashMap** for speed and flexibility. If many threads will read/write the same map and you want built‑in safety, go with **Hashtable**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
