---
qid: vq_65a3d11eaa__star__local
question: Is Python Object-oriented or Functional Programming?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 389
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:58-05:00'
sources: []
---

**Situation**  
During a technical interview for a backend role, the interviewer asked me whether Python is an object‑oriented or functional programming language. I knew they wanted to see if I could articulate Python’s hybrid nature rather than give a simplistic yes/no.

**Task**  
Explain how Python supports both paradigms, highlight key features and trade‑offs, and demonstrate with concrete code snippets that show my grasp of each style.

**Action**  
I started by noting that Python is fundamentally *object‑oriented*: everything is an object, classes are first‑class citizens, and inheritance/duck typing are built in. I pointed to the `class` keyword, method resolution order, and metaclasses as proof. Then I switched gears to its functional side: first‑class functions (`lambda`, `map`, `filter`, `reduce`), higher‑order functions, immutable data via tuples, and the `functools` module (e.g., `partial`, `lru_cache`). I shared a quick example that combined both: a class with a static method that uses a functional pipeline to process input. Finally, I mentioned performance trade‑offs—OOP can be more readable for stateful services, while FP shines in concurrent data processing.

**Result**  
The interviewer nodded and followed up asking about my experience using decorators and generators in production code. I was able to discuss a real project where I refactored a legacy module from imperative loops to a functional pipeline, reducing lines by 35% and improving test coverage by 20%. I learned that clearly articulating Python’s dual nature not only satisfies the question but also demonstrates depth of experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
