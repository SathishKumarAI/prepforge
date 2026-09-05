---
qid: ing_f998fc096f__star__local
question: 'Explain: Auto-grader analysis — Constitutional Classifiers: Defending against
  universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 343
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:45-05:00'
sources: []
---

**Situation:**  
In a recent semester-long capstone, my team was tasked with building an AI‑driven homework auto‑grader for a large introductory CS class (≈800 students). The instructor flagged that existing open‑source graders were vulnerable to “jailbreak” prompts—students could trick the system into giving full credit on incomplete code.

**Task:**  
I had to design and implement a defense mechanism that would detect and mitigate such jailbreak attempts while still accurately grading legitimate submissions, all within a 48‑hour sprint before the exam deadline.

**Action:**  
I introduced a Constitutional Classifier (CC) framework inspired by Anthropic’s research. First, I curated a small set of “constitutional” rules—e.g., *“The grader must not reveal hidden solution paths to students.”* Using these rules as constraints, I wrapped the underlying language model in a two‑stage pipeline: 1) **Prompt filtering** with a lightweight classifier that flags suspicious prompts (≈90 % recall on our test set), and 2) **Controlled generation** where the CC re‑evaluates each response against the constitution before finalizing scores. I tuned the temperature and top‑k settings to balance creativity and safety, and integrated the pipeline into our existing Flask grader.

**Result:**  
Post‑deployment, we observed a 73 % drop in successful jailbreak attempts compared to the baseline model, while grading accuracy improved by 4 % on our validation set. The instructor reported higher student trust, and I learned how constitutional constraints can be operationalized without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
