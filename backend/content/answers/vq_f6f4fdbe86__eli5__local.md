---
qid: vq_f6f4fdbe86__eli5__local
question: What are decorators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 187
total_tokens: 340
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:09-05:00'
sources: []
---

Imagine you’re a chef preparing a simple soup (your function). A decorator is like a special sauce that you can pour over the soup to give it extra flavor—maybe garlic, spice, or a splash of lemon—without changing how the soup itself was made. In Python, a *function* is just code that takes inputs and returns an output. A *decorator* is another function that “wraps” around your original function, adding new behavior before or after it runs (like logging, timing, or checking permissions). When you write `@my_decorator` above a function, Python automatically passes the function into `my_decorator`, and the result becomes the new version of the function. Think of decorators as reusable seasoning packets that enhance any recipe without rewriting the core ingredients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
