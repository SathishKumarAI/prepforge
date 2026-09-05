---
qid: ing_deb0df92d2__star__local
question: 'Explain: Run, look what we got, our model — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 371
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:54:06-05:00'
sources: []
---

**Situation** – In a data‑science sprint for an e‑commerce client, I had built a recommendation model in Python using scikit‑learn and XGBoost. The training script ran fine locally but when deployed to the staging server the output predictions were wildly off and the logs only showed “Model loaded, running inference…”.

**Task** – My job was to quickly identify why the deployed model behaved differently from my local runs, confirm its integrity, and get a correct set of predictions back for QA.

**Action** – I first executed a sanity‑check routine: re‑loaded the same training data on the server, ran `pickle.load()` on the saved pipeline, and printed the feature matrix shape. The shapes matched, so I turned to the inference step. Using `pandas` I logged the raw input features and compared them against the ones that had been pre‑processed locally with `StandardScaler`. I discovered a version mismatch – the server used an older `scikit-learn` where the scaler stored mean/variance differently. I re‑trained the scaler, serialized it again, updated the deployment bundle, and reran the inference script. Finally, I compared the predictions to the ground truth using `mean_absolute_error`, which dropped from 0.82 to 0.19.

**Result** – The corrected model produced accurate recommendations that passed QA in under an hour, boosting the client’s click‑through rate by ~12% once live. I learned that version control for dependencies and a quick sanity‑check routine are critical when moving ML code from dev to prod.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
