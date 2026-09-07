---
qid: ing_f12bffc1c3__aws__local
question: 'Explain: The AI-native interview | Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 459
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:29-05:00'
sources: []
---

**Situation / Task**  
At my last company we launched *Sierra*, a fully‑AI‑native hiring platform that replaces traditional interview scripts with dynamic dialogue agents. The goal was to cut time‑to‑hire by 30 % while keeping quality scores above 90 %.  

**Action**  
I owned the end‑to‑end solution:  
1. **Requirements & Design** – Defined an asynchronous, event‑driven workflow: candidate uploads a video → AWS Transcribe + Amazon Comprehend extracts intent → Lambda generates context‑aware prompts → SageMaker endpoint runs a fine‑tuned GPT‑4 model to ask follow‑up questions and rate responses.  
2. **AWS Services** – S3 (storage), Step Functions (orchestration), DynamoDB (candidate state), SageMaker for inference, CloudWatch & X-Ray for observability.  
3. **Scalability / Availability** – Used *Provisioned Concurrency* on Lambda to keep cold‑start latency < 200 ms; deployed the SageMaker endpoint in a multi‑AZ region with automatic scaling.  
4. **Cost Control** – Employed spot instances for batch transcription, and switched the GPT inference to an on‑prem GPU cluster when request volume spiked past 10k/day, keeping monthly spend under $25K.  

**Result**  
- Reduced average interview cycle from 7 days to **4.3 days** (−38 %).  
- Maintained candidate satisfaction at **92 %** and quality score at **91 %**.  
- Saved the hiring team ~1,200 engineer‑hours annually.  

**Reflection / Learnings**  
I practiced *Bias for Action* by launching a pilot in two markets before full roll‑out; early feedback revealed that prompt phrasing caused bias. I *dive deep* into the NLP pipeline, rewrote prompts, and re‑trained the model—resulting in a 15 % improvement in bias mitigation metrics. This iteration reinforced the Amazon principle of **Ownership**: taking responsibility for both product quality and ethical AI practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
