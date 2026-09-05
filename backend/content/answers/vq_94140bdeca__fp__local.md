---
qid: vq_94140bdeca__fp__local
question: Which of the following is not correct about User_Defined Exceptions ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 308
total_tokens: 481
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:41-05:00'
sources: []
---

In Java (and most OOP languages), a **user‑defined exception** is simply any class that extends `Throwable`.  
The language imposes no extra constraints beyond that, so the following “must” statements are true:

| Statement | Correct? |
|-----------|----------|
| 1. It must extend `Exception` or `RuntimeException`. | ✔️ |
| 2. It can be thrown with a custom message via a constructor. | ✔️ |
| 3. It must be caught in the same method where it is thrown. | ❌ |

The third claim is false because exceptions propagate up the call stack until they are either **caught** or reach the top level, where the JVM terminates the thread. A user‑defined exception can be declared with a `throws` clause and left uncaught; the runtime will automatically unwind the stack.

*Non‑obvious insight:*  
Even though you can declare an exception that never gets thrown (e.g., in a stubbed method), it still consumes class‑loading time and memory. If a library defines many unused custom exceptions, it inflates its footprint without any benefit—an example of *exception overengineering*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
