---
qid: ing_4fd3a88ee9__star__local
question: 'Explain: Step 7. Define an agent — How Do AI Agents Work - by Neo Kim and
  Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 324
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:43-05:00'
sources: []
---

**Situation:** At my previous startup, we were tasked with automating customer support for a SaaS product that received over 10,000 tickets daily. The existing ticketing system was slow and often routed issues to the wrong teams, causing SLA breaches.

**Task:** I had to design an AI agent that could interpret incoming queries, classify them by priority and department, and generate concise responses or route them to human agents when needed—all within two minutes per ticket.

**Action:** First, I defined the agent’s architecture: a conversational model (GPT‑4 fine‑tuned on our support logs) coupled with a rule‑based post‑processor. I used Python with FastAPI for the inference endpoint and Redis as a queue to handle burst traffic. The agent’s policy was encoded in a decision tree that checked intent confidence, urgency flags from a custom NLP pipeline, and a fallback threshold. For training, I leveraged our annotated dataset of 50k tickets, splitting it into train/validation sets and iterating on loss metrics until the F1 score hit 0.92 for priority classification.

**Result:** After deployment, ticket routing accuracy rose to 96%, reducing SLA breaches by 38% in the first quarter. Response time dropped from an average of 4 minutes to under 90 seconds. I learned that defining a clear policy layer around raw ML predictions is crucial for reliability and compliance in production AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
