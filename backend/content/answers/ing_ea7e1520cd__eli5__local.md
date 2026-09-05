---
qid: ing_ea7e1520cd__eli5__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 267
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:38-05:00'
sources: []
---

Imagine your AI as a student who answers multiple‑choice quizzes. Saying it gets “95 % correct” sounds impressive, but we must check the test’s design before celebrating.

**Ask:**

1. **What is the task?** Is it spotting spam emails or diagnosing cancer?  
2. **How many questions were on the quiz?** A 10‑question test is less convincing than a 1,000‑question one.  
3. **What are the answer options?** With only two choices, a random guess scores 50 %.  
4. **Is there a baseline?** How does it compare to a simple rule or human performance?  
5. **How were data split?** Did training and testing use the same kinds of examples?  
6. **Was the test set truly unseen?** If the model saw similar data during training, accuracy is inflated.  
7. **What about hard cases?** Does it still hit 95 % on rare or edge‑case inputs?

If the quiz is well‑designed and the questions are answered above chance, the claim becomes meaningful; otherwise, it’s just a high score on a poorly constructed exam.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
