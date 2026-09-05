---
qid: ing_036205e487__star__local
question: 'Explain: Understanding Flows and Crews — GitHub - crewAIInc/crewAI: Framework
  for orchestrating role-playing, autonomous AI agents. By fostering collaborative
  intelligence, CrewAI empowers agents to work together seamlessly, tackling complex
  tasks. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 280
output_tokens: 334
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:59-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a conversational AI that could answer technical support tickets for a cloud‑hosting client. Our internal metrics showed a 35 % backlog of unresolved tickets and a customer satisfaction score dropping from 92 % to 83 %.  

**Task:**  
I was tasked with reducing the average resolution time by 40 % while maintaining accuracy, using an autonomous agent system rather than hiring more support staff.

**Action:**  
I chose CrewAI because its “flow” concept lets you define a sequence of roles (Agent1: Ticket Classifier → Agent2: Knowledge‑Base Retriever → Agent3: Response Generator). I built three custom agents in Python, each leveraging OpenAI’s GPT‑4 fine‑tuned on our support logs. The flow orchestrator handled context passing and fallback logic: if the retriever returned no relevant docs, the classifier would re‑classify with a broader intent. We added a “crew” of two parallel summarizers that ran asynchronously to speed up response drafting. Continuous monitoring via Prometheus fed back into the crew’s confidence thresholds, automatically retraining when accuracy dipped below 95 %.  

**Result:**  
Within six weeks we cut average ticket resolution time from 6.2 hours to 3.8 hours— a 38 % improvement—and lifted CSAT to 90 %. The project taught me how to map business requirements onto CrewAI’s flow/crew abstractions, turning abstract AI orchestration into measurable operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
