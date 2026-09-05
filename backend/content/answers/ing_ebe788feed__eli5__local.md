---
qid: ing_ebe788feed__eli5__local
question: 'Q65: Your agent can execute arbitrary Python code. How do you make this
  safe?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 242
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:53-05:00'
sources: []
---

Imagine your AI is a chef who can cook any recipe (Python code) you give it. To keep the kitchen safe, you put a **sandbox** around the stove—think of a metal cage that lets the chef stir and heat but stops hot pans from spilling over into the rest of the house. Inside this cage, the chef can use all ingredients (variables, libraries), but he cannot open the fridge (access the file system) or leave the kitchen to touch other rooms (make network calls).  

You also give him a **permission list**: “you may read numbers from here, but you may not write files or call the internet.” This list is checked every time before the chef runs a new recipe. If he tries something on the list—like opening a door to the pantry—the cage stops it and logs the attempt.  

So, by confining execution in a sandbox with strict permissions, your agent can run arbitrary code safely without risking your system or data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
