---
qid: ing_86d331d028__eli5__local
question: 'Explain: Next Steps — pydantic-ai \u00b7 PyPI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 380
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:44-05:00'
sources: []
---

Think of **pydantic‑ai** as a Swiss Army knife that lets your Python code talk to AI models while keeping the data you send and receive tidy, like a well‑organized toolbox.

1. **Install it from PyPI**  
   ```bash
   pip install pydantic-ai
   ```
   This is just like buying a new tool set; you’re adding the knife to your collection.

2. **Define a Pydantic model**  
   Create a simple data class that lists the fields you expect (e.g., `prompt`, `temperature`).  
   ```python
   from pydantic import BaseModel

   class ChatInput(BaseModel):
       prompt: str
       temperature: float = 0.7
   ```
   Here, Pydantic checks your input automatically—no extra code needed.

3. **Wrap an AI client**  
   Use the helper that turns the model into a call to OpenAI (or any provider).  
   ```python
   from pydantic_ai import ai

   @ai.model(ChatInput)
   def chat(input: ChatInput):
       # The decorator sends `input.dict()` to the AI and returns the response.
       pass
   ```
   Now, whenever you call `chat(prompt="Hello")`, the data is validated first, then sent.

4. **Run your function**  
   ```python
   result = chat(prompt="Tell me a joke")
   print(result)  # The model’s answer
   ```

That’s it—install, define, decorate, and call. The “knife” keeps your inputs clean and the AI interaction simple, just like a reliable tool that does one job well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
