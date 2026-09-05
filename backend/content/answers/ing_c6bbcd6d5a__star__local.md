---
qid: ing_c6bbcd6d5a__star__local
question: 'Explain: As an FDE: a contact centre wants to replace its IVR with voice
  agents. Run the engagement.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 391
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:07:17-05:00'
sources: []
---

**Situation:**  
At a mid‑size telecom provider, the call‑center team reported that the existing IVR was dropping 28% of inbound leads because callers were frustrated by menu options and long hold times. Quarterly metrics showed a 12% decline in customer satisfaction scores and a projected $2M loss in upsell revenue.

**Task:**  
I was tasked with designing and launching a fully automated voice‑agent system that could handle common inquiries, route calls to the right agents, and reduce abandonment by at least 15%, all while staying within the FY budget of $1.3M.

**Action:**  
First, I scoped the call flows and mapped high‑volume intents using transcripts from the past year. Then I selected an open‑source ASR engine (Kaldi) integrated with a neural NLU model trained on our own data to improve intent accuracy to 92%. For dialogue management, I built a state machine in Node.js that could hand off calls to live agents via Twilio’s REST API when confidence fell below 0.85 or when the caller requested human assistance. To keep latency low, we deployed the services on AWS Lambda with an auto‑scaling group of EC2 instances behind a CloudFront edge cache. I ran pilot tests with 10% of traffic, iterating on prompts and fallback logic until the abandonment rate dropped from 28% to 12%.

**Result:**  
After full rollout, the new voice‑agent system cut call abandonment by 18%, lifted CSAT scores from 78% to 85%, and generated an additional $1.6M in upsell revenue within six months. I learned that marrying a lightweight ASR/NLU stack with robust state management can deliver enterprise‑grade IVR replacement without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
