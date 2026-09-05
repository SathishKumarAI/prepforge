---
qid: vq_2749d04918__eli5__local
question: How do I change a user parameter at runtime from a layout object trigger?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:21-05:00'
sources: []
---

Imagine your app is like a kitchen where each recipe (layout) has ingredients (parameters). A *trigger* is a special instruction that runs automatically when you open the recipe book – think of it as a “cook’s note” that says, “When this page opens, do something.”  

To change a user parameter at runtime from such a trigger, follow these simple steps:

1. **Locate the trigger** in the layout editor (it looks like a small gear icon).  
2. **Write the instruction** inside the trigger box using the recipe language: `SET @userParam = newValue;`.  
   - *@userParam* is the variable you want to change.  
   - *newValue* can be a number, text, or another variable.  
3. **Save and run the layout**. When the page loads, the trigger fires, instantly updating the parameter for that user session.

Just like adding salt while cooking, this changes the value on‑the‑fly without restarting the app. The new setting stays in effect until you change it again or close the session.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
