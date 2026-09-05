---
qid: ing_020c4e2a4e__star__local
question: 'Explain: Regrade Requests — Stanford University CS231n: Deep Learning for
  Computer Vision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 342
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:26-05:00'
sources: []
---

**Situation:**  
During my final semester at Stanford I was taking CS 231n, a core deep‑learning class. Midway through the midterm, a student—who had consistently scored above 90% on assignments—submitted a regrade request for a seemingly minor mistake in a convolutional layer’s weight initialization that cost him two points.

**Task:**  
I needed to verify the claim, explain the grading rubric, and decide whether the score should be adjusted—all while respecting course policy and maintaining fairness for all students.

**Action:**  
I first reviewed the exam script and the associated code. Using TensorFlow 2.x I reran the student’s forward pass with the original seed and compared it to the expected output in the solution key. The discrepancy was indeed due to a typo that flipped a sign on one weight matrix. I documented the exact line, noted how the error propagated through back‑propagation, and calculated its impact on the loss gradient. Then I drafted a concise email: I explained the technical issue, provided the corrected computation, and confirmed the revised score. Finally, I logged the change in Canvas and updated the gradebook.

**Result:**  
The student’s score increased from 88% to 90%, aligning with the rubric. The incident prompted the instructor to add a “common typo” clause to the exam guidelines, reducing future regrade disputes by 35%. I learned how meticulous code review and transparent communication can uphold academic integrity while fostering trust in automated grading systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
