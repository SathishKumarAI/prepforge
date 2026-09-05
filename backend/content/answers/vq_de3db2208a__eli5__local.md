---
qid: vq_de3db2208a__eli5__local
question: what is companion object in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 216
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:03-05:00'
sources: []
---

Imagine you’re building a Lego set that represents a person (a class). Every time you make a new person you need a “blueprint” to tell the computer how to build one: what parts it needs and how to put them together. In Scala this blueprint is called a **companion object** – it lives in the same file as the class, shares its name, and can see all of the class’s private details.

Think of the companion object like the instruction manual that sits next to your Lego set: it can create new people (`apply`), hold helper functions (like `findById`) or constants that belong to the whole type, and even keep a hidden cache. Because it is “companion” it has special access rights—just as you can open the instruction booklet to tweak a part of your build. So, in Scala, a companion object is the class’s sidekick that supplies constructors, utilities, and shared state for all instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
