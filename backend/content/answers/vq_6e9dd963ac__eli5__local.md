---
qid: vq_6e9dd963ac__eli5__local
question: Explain the definition of decorators in Python?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 190
total_tokens: 345
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:09-05:00'
sources: []
---

Think of a decorator as a “wrapper” that sits around a recipe (a function) and adds extra flavor before or after it runs—just like putting a pastry into a glaze or adding a drizzle of honey.

In Python, you write a function (the recipe) and then another function that takes the first one as an argument. That second function returns a new version of the original. When you “decorate” your recipe with `@decorator_name`, Python automatically replaces the original function with this wrapped version. The decorator can log calls, check permissions, or time execution without changing the core logic of the function it decorates.

So, decorators are simply reusable wrappers that modify a function’s behavior while keeping its name and interface unchanged—just as a glaze changes a cake’s taste but leaves the cake itself intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
