---
qid: vq_5784da89c2__think__local
question: What are some R functions which can be used to debug?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 421
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:37:05-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - The user wants *R* debugging tools, not general IDE tricks.  
   - Assume they have a typical R session (base or tidyverse) and are familiar with functions like `debug()`, but want a concise list.

**2️⃣ Adopt a “tool‑by‑purpose” mental model**  
   - Group functions by what they do: *step‑through*, *state inspection*, *conditional breakpoints*, *profiling*, *trace logging*.  
   - This mirrors how debuggers in other languages are organized, making the list intuitive.

**3️⃣ Build the answer step‑by‑step**  
   1. Start with core base functions (`debug()`, `undebug()`, `browser()`).  
   2. Add inspection helpers (`traceback()`, `getAnywhere()`, `ls.str()`).  
   3. Include conditional breakpoints (`options(error = recover)` and `recover()`).  
   4. Mention tracing/logging tools (`debugonce()`, `trace()`, `traceback()`).  
   5. Add profiling aids (`Rprof()`, `system.time()`).  
   6. Finish with IDE‑specific helpers (`breakpoints()` in RStudio, `debugger` package).  

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate *profiling* with *debugging*.  
   - Remember that `trace()` can alter function code; warn about side effects.  
   - Keep the list succinct—too many functions may overwhelm.

**5️⃣ Sanity‑check & communicate**  
   - Verify each function’s existence in CRAN or base R.  
   - Use a short example (e.g., `debug(function_name)`) to illustrate usage.  
   - End with a quick “pick the tool that matches your need” sentence, reinforcing the mental model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
