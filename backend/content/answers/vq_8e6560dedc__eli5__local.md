---
qid: vq_8e6560dedc__eli5__local
question: What are the functions help() and dir() used for?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 214
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:55-05:00'
sources: []
---

Think of Python as a big toolbox that you can open up with a flashlight.  
*`help()` is like asking the flashlight’s manual: “What does this tool do?”* When you type `help(list)`, it shows you the list of functions, what arguments they take, and a short description—exactly what a user guide would say.

*`dir()` is like shining that flashlight inside the toolbox to see every part that’s visible.** It returns a list of names (functions, variables, classes) that are currently defined in an object or module. If you run `dir(str)` you’ll see all the string methods you can use.

So:  
- **`help()` → “Show me the user guide for this tool.”**  
- **`dir()`  → “List every visible part inside this toolbox.”**

Both help you explore Python without having to read through a whole library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
