---
qid: ing_3a3ae74b51__star__local
question: 'Explain: Week 1: Introduction to Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 378
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:25:03-05:00'
sources: []
---

**Situation**  
When I started my first data‑science bootcamp, the curriculum kicked off with a week dedicated to machine learning fundamentals. Everyone was on the same page—no prior coding or statistics beyond high school math—and the instructors promised we’d build and train our own model by Friday.

**Task**  
My goal for that week was twofold: (1) grasp the core terminology—supervised vs unsupervised, bias–variance trade‑off, overfitting—and (2) actually implement a simple predictive model so I could see how theory translates into code.

**Action**  
I dove into the lecture notes on linear regression and gradient descent, then opened Jupyter and coded a vanilla implementation from scratch in Python. Using NumPy, I calculated the cost function and updated weights iteratively, visualizing the loss surface with Matplotlib. After debugging, I refactored the code to use scikit‑learn’s `LinearRegression`, compared results, and experimented with regularization (`Lasso` vs `Ridge`). I also ran a quick k‑means clustering on a toy dataset to cement unsupervised learning concepts.

**Result**  
By Friday I had a working model that predicted house prices within 8% MAE on the test split. The exercise gave me confidence in both the math and the tooling, set a solid foundation for deeper topics, and taught me the value of iterating between hand‑crafted code and library functions to debug and learn effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
