---
qid: ing_9326d73281__eli5__local
question: 'Explain: Create an eval for a task — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 242
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:01-05:00'
sources: []
---

Think of building a recipe book for your robot chef.  
An **eval** is like a test kitchen where you run the same dish many times to see how well it turns out.  

1. **Choose a task** – decide what you want the chef to cook (e.g., “translate French to English”).  
2. **Gather ingredients** – collect a set of example sentences that the chef should handle.  
3. **Write the recipe** – create an *evaluation* that tells the chef how to measure success: give it a sentence, get its translation, then compare it with a correct one.  
4. **Run the test kitchen** – feed all examples through the model and record scores (accuracy, fluency, etc.).  
5. **Review the results** – look at the statistics; if many dishes are off, tweak the recipe or retrain the chef.

In short, an eval is a systematic way to give your AI a set of tasks, run it repeatedly, and score its performance—just like a chef’s test kitchen ensures every dish meets the standard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
