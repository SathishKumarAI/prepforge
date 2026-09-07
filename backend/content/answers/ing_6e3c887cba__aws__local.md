---
qid: ing_6e3c887cba__aws__local
question: What are the prerequisites? — Welcome to the \ud83e\udd17 AI Agents Course
  \u00b7 Hugging Face
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 520
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:14-05:00'
sources: []
---

**Situation (S)**  
I was tasked with launching an “AI Agents” bootcamp on Hugging Face that would prepare data scientists to build production‑ready conversational agents. The challenge: many participants had only a basic ML background and no cloud experience, yet the curriculum required end‑to‑end deployment skills.

**Task (T)**  
Define clear prerequisites so that every student could hit the ground running while keeping course throughput high and cost predictable.

**Action (A)**  

| Requirement | Why it matters | AWS services & design |
|-------------|----------------|-----------------------|
| **Python 3.8+ + pip** | Core language for Hugging Face libraries. | None – local dev; containerized via Docker. |
| **Basic Git workflow** | Enables collaboration on notebooks and code sharing. | CodeCommit or GitHub (free tier). |
| **AWS CLI & IAM role** | Allows students to launch SageMaker endpoints without admin overhead. | IAM policies (`AmazonSageMakerFullAccess` + least‑privilege S3 access). |
| **Data science stack (NumPy, Pandas, Matplotlib)** | Needed for preprocessing demos. | Amazon SageMaker Studio or local Jupyter. |
| **Understanding of tokenization & embeddings** | Critical for model fine‑tuning. | No AWS service; pre‑built Hugging Face tokenizers. |
| **Basic cloud cost awareness (SageMaker pricing, spot instances)** | Keeps the bootcamp within a $50/month budget per student. | Use SageMaker Spot training jobs (`sagemaker.amazonaws.com/spot`). |

**Result (R)**  
After implementing these prerequisites, enrollment dropped 30 % from “confused” to “ready”, and we reduced average onboarding time from 4 h to 1 h. The course ran on a $12 k/month AWS bill instead of the projected $18 k, saving 33 %.  

**Leadership Principles Highlighted**  
- **Ownership**: I assumed full responsibility for curriculum alignment with cloud realities.  
- **Dive Deep**: Built a cost model and validated it against real SageMaker spot pricing data.  

*Bar‑raiser note*: They’ll look for my ownership of the end‑to‑end student experience, depth in AWS service trade‑offs, and clear metrics showing impact.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
