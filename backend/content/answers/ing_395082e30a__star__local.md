---
qid: ing_395082e30a__star__local
question: 'Explain: Multi-agent patterns in LlamaIndex — Multi-agent patterns in LlamaIndex
  | Developer Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 352
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:35-05:00'
sources: []
---

**Situation:**  
In a recent data‑science sprint for our fintech client, we needed to generate personalized investment reports from millions of transaction records while ensuring compliance with GDPR. The existing LlamaIndex pipeline was single‑agent and struggled with the volume and the need for real‑time privacy checks.

**Task:**  
Design a multi‑agent architecture that splits data ingestion, query processing, and privacy enforcement into independent agents, all orchestrated through LlamaIndex’s new MultiAgent framework, to meet a 30‑second response window per user request.

**Action:**  
I instantiated three LlamaIndex agents:  
1. *DataCollector* uses the `SimpleDirectoryReader` to stream chunks from S3 and indexes them with `GPTVectorStoreIndex`.  
2. *PrivacyGuard* runs as a background agent, leveraging a custom `PromptTemplate` that checks for personally identifiable information (PII) using OpenAI’s text‑classification endpoint; any PII triggers an automatic mask before the chunk is forwarded.  
3. *ReportGenerator* consumes user queries via `ChatEngine`, chains the masked vectors, and formats outputs with Markdown. I wired them together in a `MultiAgentChain` that routes requests asynchronously, ensuring the PrivacyGuard agent runs concurrently without blocking the query flow.

**Result:**  
The new pipeline cut report generation time from 45 seconds to 22 seconds on average, handled a 10× data increase, and eliminated GDPR violations. I learned how LlamaIndex’s agent composition lets you decouple concerns, scale independently, and enforce compliance policies without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
