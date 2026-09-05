---
qid: ing_aa442a8ec6__star__local
question: You have four hours to build and demo a working AI-powered product. How
  do you spend them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 468
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:13:10-05:00'
sources: []
---

**Situation:**  
During our quarterly hack‑week at a fintech startup we were given a challenge: “Build and demo an AI‑powered product in four hours.” The goal was to showcase how quickly we could turn a data set into a user‑friendly app that could predict loan approval risk.

**Task:**  
I had to select the right model, integrate it with a live UI, deploy it for instant testing, and prepare a concise demo script—all within 240 minutes. The product needed to ingest customer details, output a risk score, and explain its decision in plain language.

**Action:**  
1️⃣ **Kick‑off (30 min):** I scoped the data, chose a lightweight XGBoost model pre‑trained on credit history from Kaggle, and sketched the API contract.  
2️⃣ **Model Prep (45 min):** Loaded the model into a Python notebook, tuned hyperparameters on the fly with Optuna, and saved it as `model.pkl`.  
3️⃣ **API Layer (60 min):** Built a FastAPI endpoint (`/predict`) that loads the model once, validates JSON payloads, returns a score plus SHAP explanations.  
4️⃣ **Front‑end (45 min):** Used Streamlit to create a quick form: name, age, income, loan amount; on submit it calls the API and displays the risk percentage and top contributing features.  
5️⃣ **Deployment & Demo Prep (30 min):** Containerized everything with Docker Compose, ran locally, and rehearsed a 2‑minute pitch highlighting speed, explainability, and potential ROI.

**Result:**  
The demo launched within 3 h 45 m, scoring an average risk accuracy of 87% on our test set. Stakeholders loved the live explanation feature; we secured $50k for a prototype sprint. I learned that coupling fast‑prototype tools (FastAPI + Streamlit) with pre‑trained models can deliver tangible AI value in record time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
