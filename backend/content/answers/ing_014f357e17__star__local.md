---
qid: ing_014f357e17__star__local
question: 'Explain: Introduction — Context vs. Memory Engineering in Agentic AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:05-05:00'
sources: []
---

**Situation**  
While leading a research sprint at my university lab, we were building an autonomous chatbot that could maintain long‑term dialogues across multiple sessions. Our initial prototype kept the conversation state only in session memory; users reported it “forgot” earlier preferences after just a few turns.

**Task**  
I needed to design a system that preserved user context between interactions without bloating the model’s input size or violating privacy constraints, all within a 48‑hour sprint.

**Action**  
First, I split the problem into *Context Engineering* (capturing salient facts) and *Memory Engineering* (storing them efficiently). For context, we built an extractor that parsed user utterances for entities and intent tags using spaCy, then distilled key facts into a structured JSON “context vector.” For memory, we implemented a lightweight vector‑store in Pinecone, indexing each session’s context vectors with semantic embeddings from Sentence‑BERT. During retrieval, the agent queries Pinecone for the top‑k most relevant past contexts and fuses them back into the prompt using a dynamic prompt template that preserves privacy by redacting PII.

**Result**  
The bot’s recall accuracy jumped from 62 % to 91 % on our test set of 1,200 dialogue turns. User satisfaction scores rose by 27 %, and we cut runtime inference latency by 15 % because the prompt length stayed under 512 tokens. I learned that treating context extraction and memory storage as distinct engineering layers allows rapid iteration while keeping models lean and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
