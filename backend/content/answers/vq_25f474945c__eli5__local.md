---
qid: vq_25f474945c__eli5__local
question: What is the companion object in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 286
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:04-05:00'
sources: []
---

Imagine a book (a *class*) that tells you how to make a toy car. Inside the same book is a special chapter called the *companion*—the **companion object**. It lives in the same file and has the exact name as the book, so readers know they belong together. The chapter can’t be opened by anyone else; it’s only there for the book’s use.

The companion object holds things that don’t need a specific car to exist: factory recipes (methods that create cars), constants shared by all cars, or helper functions that work with the car type itself. Because the book and its chapter are in the same file, they can access each other’s private parts—just like a writer who knows every detail of their own story.

**Key terms**
- *Class*: blueprint for creating objects (toy cars).  
- *Object*: a single instance that can hold values or methods.  
- *Companion object*: an object sharing the same name and file as its class, used to store utilities related to the class but not tied to any particular instance.

So, a companion object is like a secret recipe book for your class, keeping shared tools close at hand while remaining invisible to outsiders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
