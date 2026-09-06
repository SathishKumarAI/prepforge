---
qid: ing_812edf9138__think__local
question: 'Explain: Change log — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 457
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:32:18-05:00'
sources: []
---

**1. Clarify the request & set assumptions**  
   - Identify what “Change log – Constitutional Classifiers” refers to (Anthropic’s public repo).  
   - Note that the user wants an explanation of *how* these classifiers defend against universal jailbreaks.  
   - Assume the audience has basic AI safety knowledge but not deep familiarity with Anthropic’s papers.

**2. Choose a mental model / framework**  
   - Use the “Constitutional AI” pipeline: (1) define a set of principles (“constitution”), (2) generate content, (3) have an internal critic evaluate against those principles, (4) iterate until acceptable output is produced.  
   - Map this to the specific defense mechanism: the classifier acts as that internal critic.

**3. Reason step‑by‑step toward the answer**  
   1. Explain what a “universal jailbreak” is (adversarial prompts that force the model to violate safety).  
   2. Describe how a Constitutional Classifier is trained on examples of safe vs unsafe outputs using reinforcement learning from human feedback (RLHF).  
   3. Show how, during inference, the classifier scores each candidate response and rejects those below a threshold—effectively “blocking” jailbreak attempts.  
   4. Mention that the classifier is continuously updated with new jailbreak data, keeping it robust.

**4. Common traps to avoid**  
   - Don’t conflate the classifier with the policy network; they are separate components.  
   - Avoid claiming the classifier guarantees 100 % safety—highlight the probabilistic nature.  
   - Don’t oversimplify RLHF as a black‑box; explain that human labels guide the classifier’s decision boundary.

**5. Sanity‑check & communicate**  
   - Re‑read to ensure each step logically follows: definition → training → inference → update loop.  
   - Use clear, concise language and analogies (e.g., “the classifier is like a gatekeeper that checks every answer against a rulebook”).  
   - End with a brief note on limitations and future directions so the explanation feels complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
