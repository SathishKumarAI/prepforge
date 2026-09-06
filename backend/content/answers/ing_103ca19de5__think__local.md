---
qid: ing_103ca19de5__think__local
question: 'Explain: In Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 438
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:46:22-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Confirm that “In Scope” means *what is included* in the learning objectives, not what is excluded.  
   - Assume the audience has basic ML knowledge but no deep familiarity with social‑network datasets or platform APIs.  

**2️⃣ Adopt a mental model: “Data → Model → Evaluation → Deployment”**  
   - Map each platform (Facebook, Instagram) onto this pipeline: data acquisition (Graph API, media metadata), preprocessing (text/image cleaning), modeling (recommendation, sentiment analysis), evaluation metrics, and eventual integration back into the platform.  

**3️⃣ Step‑by‑step reasoning**  
   1. List the *available data sources* for each network (user posts, likes, comments, hashtags).  
   2. Identify *typical ML tasks*: content recommendation, user profiling, fraud detection.  
   3. For each task, outline the **input features**, **model family** (e.g., collaborative filtering vs CNNs), and **evaluation metric** (precision@k, ROC‑AUC).  
   4. Discuss *platform‑specific constraints*: privacy policies, rate limits, data size.  

**4️⃣ Avoid common traps**  
   - Don’t conflate “social network” with a single platform; treat Facebook and Instagram separately.  
   - Beware of over‑generalizing results from one platform to the other—image‑heavy Instagram vs text‑heavy Facebook.  
   - Skip technical jargon without explanation (e.g., “embedding” or “transfer learning”).  

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑state each section in one sentence to ensure it’s concise and accurate.  
   - Use a simple diagram or bullet list when summarizing the pipeline per platform.  
   - Ask: *Does this answer explain what is covered (not excluded) for both Facebook and Instagram in ML contexts?* If yes, you’re good; if not, refine the scope statement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
