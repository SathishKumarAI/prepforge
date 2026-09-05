---
qid: ing_6aaa661fc4__eli5__local
question: What actually happens during supervised fine-tuning? What role do chat templates
  and special tokens play?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 247
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:05-05:00'
sources: []
---

Think of a student learning to answer questions by reading a textbook (the pre‑trained model) and then practicing with a tutor who gives feedback on each answer (supervised fine‑tuning). The tutor shows the correct response, points out mistakes, and the student rewrites the answer until it matches the teacher’s example.  

In AI, “fine‑tuning” is that practice phase: we give the model pairs of prompts (questions) and target replies (answers). The model tries to predict the reply; if its guess differs from the target, we adjust its internal weights so it will be closer next time.  

Chat templates are like a script the tutor follows— they format the prompt, add a special “role” marker (“User: …”) so the model knows who is speaking. Special tokens (e.g., `<bos>`, `<pad>`) act as invisible bookmarks that help the model keep track of where sentences start or end and how to pad short inputs to a fixed length. They give the model extra cues about structure, just like a teacher’s clear instructions make learning easier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
