---
qid: vq_6355b8dd82__eli5__local
question: On Unix, how do you make a Python script executable?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 255
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:29-05:00'
sources: []
---

Think of your Python file like a recipe card that tells the kitchen (your computer) how to cook something.  
1. **Add a “chef’s note” at the top** – put this first line exactly as shown:  

   ```python
   #!/usr/bin/env python3
   ```

   This is called a *shebang*. It says, “Run this card with Python 3.”  
2. **Save the card** (e.g., `hello.py`).  
3. **Give it cooking permission** – in a terminal type:  

   ```bash
   chmod +x hello.py
   ```

   The `chmod +x` command makes the file *executable*, like putting a “ready to cook” stamp on the card.  
4. **Run it straight from the kitchen** by typing its name (or its path):  

   ```bash
   ./hello.py
   ```

Now your script behaves like any other program: you can launch it without explicitly calling Python each time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
