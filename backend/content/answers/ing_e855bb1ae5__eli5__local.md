---
qid: ing_e855bb1ae5__eli5__local
question: 'Explain: Write scenarios in Claude Code — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 270
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:08-05:00'
sources: []
---

Imagine you’re a chef who wants to make sure every dish tastes great before it goes on the menu.  
Claude Code is like your recipe notebook, but for an AI “chef” called an Agent.  

1. **Define a scenario** – write a clear story: “The Agent must find a flight from New York to Paris that arrives before 6 PM.”  
2. **Set up the environment** – give it a mock data set (flight schedules, weather, user preferences).  
3. **Tell the agent what to do** – write the prompt that the Agent reads: “Choose the best flight and explain why.”  
4. **Specify the expected answer** – note the correct flight number, price, and reasoning.  
5. **Run the test** – Claude Code executes the scenario, the Agent follows the prompt, then compares its reply to the expected answer.  
6. **Collect results** – if it matches, the test passes; otherwise you see exactly where it mis‑stepped.

Just as a chef checks each dish, this process lets you systematically verify that an AI agent behaves correctly in many situations, catching mistakes early and improving reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
