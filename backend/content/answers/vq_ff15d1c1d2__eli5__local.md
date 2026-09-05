---
qid: vq_ff15d1c1d2__eli5__local
question: Can you explain what a confusion matrix is in R?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 294
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:06-05:00'
sources: []
---

Think of a **confusion matrix** like a teacher grading a quiz that has only two possible answers: “Yes” or “No.”  
The teacher writes a table where each row is the *actual* answer (what really happened) and each column is the *predicted* answer from your AI model.  

|                | Predicted Yes | Predicted No |
|----------------|---------------|--------------|
| **Actual Yes** | True Positive | False Negative |
| **Actual No**  | False Positive | True Negative |

- **True Positive (TP):** The quiz really said “Yes,” and the AI also said “Yes.”  
- **False Negative (FN):** The quiz was “Yes,” but the AI missed it and said “No.”  
- **False Positive (FP):** The quiz was “No,” yet the AI mistakenly said “Yes.”  
- **True Negative (TN):** Both the quiz and the AI correctly say “No.”

In R, you create this table with `table(actual, predicted)` or functions like `confusionMatrix()` from the caret package. It tells you exactly how many times your model got each type of answer right or wrong, so you can see where it’s strong and where it needs improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
