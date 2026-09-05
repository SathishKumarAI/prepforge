---
qid: vq_a61335aeb7__eli5__local
question: How to write a Unicode string in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 258
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:57-05:00'
sources: []
---

Imagine you’re typing a letter that can use any character from the world’s alphabets—English, Chinese, Arabic, emojis and more. In Python 3, every normal string (`"Hello"` or `'你好'`) is already that “world‑letter” type; it’s called **Unicode**. Just write the characters inside quotes, and Python keeps them as a single object.

If you’re still on the older Python 2, plain strings (`"Hi"`) are limited to ASCII by default. To tell Python you want Unicode, put a little `u` before the opening quote: `u"Hello"` or `u'こんにちは'`. That `u` is like a flag that says, “treat this as a full‑character string.”

So:

- **Python 3:** `"any characters here"` → Unicode by default.
- **Python 2:** `u"any characters here"` → Unicode; without the `u`, it’s plain ASCII.

That’s all you need to write a Unicode string in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
