---
qid: vq_340f96342f__eli5__local
question: What is PYTHONPATH?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 183
total_tokens: 336
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:07-05:00'
sources: []
---

Imagine you’re in a huge library where every book (module) lives in its own shelf (folder). When you want to read a particular book, the librarian must know which shelves to check first. In Python, that “list of shelves” is called **PYTHONPATH**.

**PYTHONPATH** is simply an environment variable that tells Python where to look for modules and packages when you write `import something`. Think of it as a personalized map: if you add your own project folder to PYTHONPATH, Python will treat that folder like the library’s main shelf and will find your custom code right away.

So, just as a librarian uses a map to locate books quickly, Python uses PYTHONPATH to locate the files (modules) you want to use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
