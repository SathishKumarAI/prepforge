---
qid: ing_2017e60cd8__fp__local
question: 'Explain: So x should be 22. So let''s — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 361
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:16-05:00'
sources: []
---

In a beginner‑level Python lesson, the line

```python
x = 22
```

is an *assignment* that stores the integer literal **22** into the name `x`.  
Why must it be exactly 22? Because the instructor is demonstrating that the interpreter
converts a *literal* (a syntactic token representing a value) into a concrete object and binds that object to a variable.  

1. **Parsing & Lexing** – The lexer turns `22` into an integer token; the parser recognises it as an expression.
2. **Evaluation** – The interpreter evaluates the literal, producing an immutable `int` instance with value 22.
3. **Binding** – That instance is bound to the name `x` in the current namespace.

If you change the literal (e.g., `x = 5 + 17`) the same three steps happen: the expression yields a new int whose value is still 22, but the source code differs.  
A subtle point often missed is that **assignment does not copy**; it merely creates a reference to an existing object. Thus

```python
y = x          # y refers to the same integer instance as x
x += 1         # modifies x’s binding (creates a new int), leaving y unchanged
```

Understanding this reference‑binding behaviour is key for debugging mutable objects and for grasping Python’s memory model in later ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
