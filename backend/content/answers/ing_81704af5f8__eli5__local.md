---
qid: ing_81704af5f8__eli5__local
question: 'Explain: Instead of exposing 130 tools as function definitions, you expose
  them as a code API the agent writes scripts against. Walk me through the tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 232
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:01:55-05:00'
sources: []
---

Think of the AI’s helpers like kitchen gadgets.  
With **function definitions** you hand every gadget (a whisk, a blender, a timer) to the chef separately. The chef can pick exactly one, use it once, and then move on. It’s quick and safe—nothing unexpected happens because each tool is isolated.

With a **code API**, you give the chef a whole kitchen in which they write their own recipe. They can combine gadgets, loop over them, or tweak settings on the fly. The chef has more freedom to create complex dishes, but now there’s a risk: a badly written recipe could break the stove, spill ingredients everywhere, or use too many resources.

So, function definitions give you tight control and safety at the cost of flexibility; a code API offers creative power and efficiency but requires careful oversight to avoid chaos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
