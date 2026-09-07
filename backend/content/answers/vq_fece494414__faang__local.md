---
qid: vq_fece494414__faang__local
question: What is encapsulation in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 419
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:15-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *encapsulation* in Python and how it’s implemented.  
Assumptions:  
- They expect a language‑level definition, not just OOP jargon.  
- Examples should be short and show syntax (private names, properties).  

**Approach**  
1. Define encapsulation conceptually.  
2. Show how Python enforces it via name mangling (`__attr`).  
3. Mention property decorators for controlled access.  
4. Discuss why true privacy is limited but still useful.  

**Depth**  
Encapsulation bundles data and behavior, hiding internal state from external manipulation. In Python, attributes prefixed with a single underscore `_` signal *protected* intent (convention only). Double underscores trigger name mangling: `self.__x` becomes `_ClassName__x`, preventing accidental access. To expose controlled read/write, use `@property` and setter decorators:

```python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("negative")
        self._balance = amount
```

Thus the internal `_balance` is shielded while still accessible via a public API.  

**Edge cases**  
- Name mangling can be bypassed (`obj._ClassName__x`).  
- Over‑encapsulation can hinder debugging and testing.  
- Dynamic attributes added at runtime circumvent static checks.  

**Optimize & communicate**  
Explain trade‑offs: Python favors *“we are all adults”* philosophy—convention over enforcement. Emphasize that encapsulation improves maintainability, but developers must still document intended access patterns. Conclude with a quick summary to show you grasp both theory and practical usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
