---
qid: ing_7cc61b7eef__eli5__local
question: 'Explain: Inputs ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 255
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:26-05:00'
sources: []
---

**Paged Attention – what it does, in plain terms**

Imagine you’re reading a very long book (the model’s *attention memory*). Your eyes can only focus on a few pages at once because your brain has limited space. Paged attention is like having a smart librarian that keeps the most relevant pages in a small stack, and pulls new pages from the big shelf only when you need them.

In a large language model (LLM), every word you type becomes an *input token*. The model needs to look at all previous tokens to decide what comes next. But if you have thousands of tokens, storing all of them in memory would crash the computer. Paged attention solves this by dividing the big memory into “pages” and loading only the pages that are actually needed for the current calculation. It keeps a tiny, fast-access cache for the most recent or most relevant tokens, while the rest stay on slower storage until they’re requested.

So, paged attention lets huge models handle massive conversations without exhausting RAM, just like the librarian lets you read an entire novel with only a few pages in your pocket.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
