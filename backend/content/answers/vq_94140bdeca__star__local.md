---
qid: vq_94140bdeca__star__local
question: Which of the following is not correct about User_Defined Exceptions ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:09-05:00'
sources: []
---

**Situation**  
During my senior‑year capstone, I built an inventory system in Java that required custom error handling for out‑of‑stock and duplicate SKU scenarios. The professor asked us to implement user‑defined exceptions and later quiz us on their properties.

**Task**  
I needed to ensure the exceptions behaved like standard ones: they should extend `Exception` or `RuntimeException`, be serializable, and allow stack traces. I also had to identify which statement about them was false for an interview.

**Action**  
I wrote two classes, `OutOfStockException` and `DuplicateSkuException`. Both extended `Exception` and implemented `Serializable`. I added constructors that accept a message and a cause, then threw them in the DAO layer. While reviewing the quiz options, I noticed one claimed “User‑defined exceptions cannot be caught using a generic catch block.” Knowing Java’s polymorphism, I realized this was incorrect—any exception type can be caught generically with `catch (Exception e)`. The other statements were true: they must extend `Throwable`, can be checked or unchecked, and are serializable.

**Result**  
I correctly answered that the false statement was “User‑defined exceptions cannot be caught using a generic catch block.” The class received full marks, and I learned to double‑check language nuances rather than assume new concepts behave differently from built‑in ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
