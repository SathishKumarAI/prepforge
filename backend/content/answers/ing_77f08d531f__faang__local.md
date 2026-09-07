---
qid: ing_77f08d531f__faang__local
question: 'Explain: We need to break up our code — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:07-05:00'
sources: []
---

**Clarify**  
The interviewer wants us to explain why a monolithic “Python full‑course” script should be refactored into smaller, reusable modules. I’d confirm:  
* The codebase is > 10 k lines and runs in production.  
* We need new features (e.g., data augmentation, model ensembles).  
* Team size is growing—multiple devs will touch the same file.

**Approach**  
1. **Identify logical boundaries** – data ingestion, preprocessing, model training, evaluation, utilities.  
2. **Create packages/sub‑modules** for each boundary.  
3. **Introduce a configuration layer** (JSON/YAML) to avoid hard‑coding paths/parameters.  
4. **Write unit tests per module** and an integration test that stitches them together.  
5. **Set up CI/CD** to run tests on every commit.

**Depth**  
* `data_loader.py` loads raw CSVs, handles missing values, returns a Pandas DataFrame.  
* `preprocess.py` normalizes features, performs one‑hot encoding, exposes a `transform(df)` function.  
* `model.py` contains a scikit‑learn Pipeline or a PyTorch model class with `fit(X, y)`, `predict(X)`.  
* `evaluate.py` computes metrics (accuracy, F1) and logs to TensorBoard/MLflow.  
* All modules use type hints for clarity. Complexity: O(n) per pass; memory footprint reduced by streaming large files.

**Edge Cases**  
* Missing columns → raise informative error.  
* Inconsistent data types → cast with fallback defaults.  
* Model overfitting → add validation split in `train.py`.  
* Deployment failures → mock external services in tests.

**Optimize & Communicate**  
After refactoring, we’ll see:  
* Faster onboarding (new devs read a single module).  
* Parallel feature development (no merge conflicts).  
* Easier unit testing and continuous delivery. I’d present this as a 5‑minute deck, highlighting the trade‑off between initial refactor time versus long‑term maintainability gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
