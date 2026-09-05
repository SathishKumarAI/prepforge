---
qid: vq_4beae3b3f2__eli5__local
question: What is the use of self in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 217
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:48-05:00'
sources: []
---

In Python, `self` is just a name that points to the *current object* inside a class method. Think of it like a person’s first name on a business card: it lets everyone reading the card know who “you” are. When you write a method inside a class, you use `self` to refer to the instance that called the method—so you can read or change its attributes and call other methods.

**Concrete analogy:** Imagine a kitchen robot that has a drawer with utensils (`attributes`). The robot’s recipe steps (methods) need to grab a utensil from its own drawer. Inside each step, `self` is the robot itself; it tells the code “use this robot’s drawer, not someone else’s.” Without `self`, the method would have no idea which robot’s utensils to use.

So `self` simply gives every method a reference to the particular object that invoked it, letting the method access and modify that object's data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
