---
qid: vq_8d5b6cd9e9__eli5__local
question: Which package construct must be declared and defined within the package
  body?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 212
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:43-05:00'
sources: []
---

Think of a **package** as a kitchen cabinet that holds recipes (procedures) and ingredients (variables).  
Inside the cabinet you can list *what* is available—like putting labels on the door (“this cabinet contains the *cook* recipe”). That’s the **package specification**.  

But you don’t put the actual cooking instructions or the secret spice mix in the label; those stay inside the cabinet, hidden from the outside world. The place where you write those hidden details is the **package body**.  
So, anything that must be *declared* (visible to users) but *defined* (the real code that runs) lives in the package body: the bodies of procedures/functions and any variables or constants that are not visible outside the package.  

In short, the package body holds all the “inside‑kitchen” work while the specification keeps the outward interface tidy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
