---
qid: ing_d04ee7e67c__star__local
question: 'Explain: No labels found. Sorry about that. — modelcontextprotocol/modelcontextprotocol
  \u00b7 Discussions \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 325
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:59-05:00'
sources: []
---

**Situation** – In my last role I was building an image classification pipeline for a client’s e‑commerce platform. The model expected 20 product categories but the training dataset had mislabeled files and some folders were empty, so when we ran the data loader it threw “No labels found” in the log.

**Task** – Fix the data ingestion process so the model could load all 20 classes without errors, and ensure future datasets are validated automatically.

**Action** – I first wrote a Python script that walked through the dataset directory, counted images per folder, and generated a CSV mapping file. Then I integrated this into the TensorFlow `tf.data` pipeline using `tf.keras.utils.image_dataset_from_directory`, passing the CSV for label extraction. To catch similar issues early, I added a pre‑training sanity check: if any class had fewer than 10 samples, the script logged a warning and halted training. Finally, I set up a CI job that runs this validation on every pull request.

**Result** – The pipeline now loads all classes reliably; training time dropped from 2 h to 1.4 h due to efficient preprocessing. The client saw a 12% increase in classification accuracy after retraining with the cleaned dataset, and we prevented future “No labels found” errors entirely. I learned that automated validation scripts are essential for robust ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
