---
qid: ing_12aec62bdb__eli5__local
question: How Airbnb Optimised Critical Rendering Path?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 293
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:05:13-05:00'
sources: []
---

Think of a web page as a **movie** that the browser must load and play for you.  
The *critical rendering path* is the list of steps the browser takes to show the first frame: download HTML, parse it into a DOM tree, apply CSS to build a render‑tree, calculate layout, paint pixels, then composite layers.  

Airbnb made this “movie” start faster by treating every resource (images, fonts, scripts) like **actors** that can rehearse ahead of time but only when the audience (the user) will see them. They:

1. **Pre‑fetch and cache**: The browser downloads key assets while the page is still loading, so they’re ready when needed.
2. **Lazy‑load**: Heavy images or non‑essential scripts are postponed until after the main content appears, like putting side‑kicks behind the curtain.
3. **Code splitting**: JavaScript is split into small pieces that load only when a user interacts with a specific part of the page, preventing a single heavy file from blocking everything.

By staging resources this way—like a well‑rehearsed cast ready to step onto the stage at just the right moment—Airbnb keeps the critical rendering path short and lets users see useful content almost instantly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
