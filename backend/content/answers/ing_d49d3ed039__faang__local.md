---
qid: ing_d49d3ed039__faang__local
question: When would happen if object change value of a class?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:24-05:00'
sources: []
---

**Clarify**  
The question asks: *“When would happen if an object changes the value of a class?”* I interpret this as: under what circumstances does modifying an instance attribute affect other instances or the class definition itself? Clarifying assumptions: we’re talking about Python‑style classes, where attributes can be defined at the class level (shared) or the instance level (unique).  

**Approach**  
1. Identify whether the attribute is a *class variable* or an *instance variable*.  
2. Explain how assignment to `self.attr` vs. `ClassName.attr` behaves.  
3. Discuss side‑effects on other objects and potential pitfalls.  

**Depth**  
- **Class variables** are stored in the class’s namespace; every instance shares them. If one object does `obj.attr = new_value`, Python first creates/updates an *instance* attribute of that particular object, leaving the class variable untouched. To change the shared value you must assign to the class: `MyClass.attr = new_value`.  
- **Instance variables** are per‑object; changing them only affects that instance.  
- **Mutable defaults** (e.g., lists defined as a default class attribute) can lead to surprising sharing if not reinitialized in `__init__`.  

Complexity is O(1) for assignments, but the *semantic* cost of unintended sharing can be high—leading to bugs and hard‑to‑track state changes.  

**Edge Cases**  
- Overriding a class attribute with an instance attribute hides the shared value.  
- Deleting an instance attribute (`del obj.attr`) restores lookup to the class variable.  
- Using `@property` or descriptors can mask this behavior, adding another layer of indirection.  

**Optimize & Communicate**  
To avoid accidental shared state:  
1. Prefer instance attributes for per‑object data.  
2. Use immutable defaults (`None`) and set mutable objects in `__init__`.  
3. Document class vs. instance responsibilities clearly.  

Explain this reasoning to interviewers by walking through a small code example, highlighting the lookup order (`instance → class → base classes`), and stressing how misunderstanding can lead to subtle bugs—exactly what FAANG teams value in clean, maintainable ML codebases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
